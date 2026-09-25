
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "cn"

function CardLoader({ className }: { className?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Skeleton className={cn("h-36 w-full rounded-sm", className)} />
    </div>
  )
}

export default CardLoader