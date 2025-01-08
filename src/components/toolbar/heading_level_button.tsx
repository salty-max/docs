import { useEditorStore } from "@/store/use-editor-store"
import { type Level } from "@tiptap/extension-heading"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const HeadingLevelButton = () => {
  const { editor } = useEditorStore()

  const headings = [
    { label: "Normal text", value: 0, fontSize: "1rem" },
    { label: "Heading 1", value: 1, fontSize: "1.4rem" },
    { label: "Heading 2", value: 2, fontSize: "1.3rem" },
    { label: "Heading 3", value: 3, fontSize: "1.1rem" },
    { label: "Heading 4", value: 4, fontSize: "1rem" },
    { label: "Heading 5", value: 5, fontSize: "1rem" },
    { label: "Heading 6", value: 6, fontSize: "1rem" },
  ]

  const getCurrentHeading = () => {
    for (let level = 1; level <= 6; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`
      }
    }

    return "Normal text"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-secondary hover:text-secondary-foreground px-1.5 overflow-hidden text-sm">
          <span className="truncate text-sm">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-secondary hover:text-secondary-foreground",
              (value === 0 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-secondary text-secondary-foreground"),
            )}
            style={{ fontSize }}
            onClick={() =>
              value === 0
                ? editor?.chain().focus().setParagraph().run()
                : editor
                    ?.chain()
                    .focus()
                    .toggleHeading({ level: value as Level })
                    .run()
            }
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
