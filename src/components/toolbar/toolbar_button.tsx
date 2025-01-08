import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ToolbarButtonProps {
  onClick?: () => void
  isActive?: boolean
  icon: LucideIcon
}

export const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      className={cn(
        "text-small h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-secondary hover: text-secondary-foreground",
        isActive && "bg-secondary text-secondary-foreground",
      )}
      onClick={onClick}
    >
      <Icon className="size-4" />
    </button>
  )
}
