import { useEditorStore } from "@/store/use-editor-store"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const FontFamilyButton = () => {
  const { editor } = useEditorStore()

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Courier New", value: "Courier New" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Papyrus", value: "Papyrus" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Verdana", value: "Verdana" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-secondary hover:text-secondary-foreground px-1.5 overflow-hidden text-sm">
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {fonts.map(({ label, value }) => (
          <button
            key={value}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-secondary hover:text-secondary-foreground",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-secondary text-secondary-foreground",
            )}
            style={{ fontFamily: value }}
            onClick={() => editor?.chain().setFontFamily(value).run()}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
