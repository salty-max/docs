import { useEditorStore } from "@/store/use-editor-store"
import { type ColorResult, SketchPicker } from "react-color"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { HighlighterIcon } from "lucide-react"

export const HighlightColorButton = () => {
  const { editor } = useEditorStore()

  const value = editor?.getAttributes("highlight").color || "#FFFFFF"

  const onColorChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center gap-y-1 justify-center rounded-sm hover:bg-secondary hover:text-secondary-foreground px-1.5 overflow-hidden text-sm">
          <HighlighterIcon className="size-4" />
          <div className="h-0.5 w-full" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onColorChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
