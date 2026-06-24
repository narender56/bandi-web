import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex overflow-hidden rounded-xl", className)} aria-hidden="true">
      <Image src="/bandi-logo.png" alt="" width={64} height={64} className="h-full w-full object-cover" />
    </span>
  )
}
