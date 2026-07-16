import { cn } from "@/lib/cn";

// Hairline registration marks at the four corners of a card or panel.
// Purely decorative; the parent must be position:relative.
export function CornerTicks({
  tone = "line",
}: {
  tone?: "line" | "paper";
}) {
  const color = tone === "line" ? "border-line" : "border-paper/40";
  const arm = cn("pointer-events-none absolute h-2 w-2", color);
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className={cn(arm, "left-2 top-2 border-l border-t")} />
      <span className={cn(arm, "right-2 top-2 border-r border-t")} />
      <span className={cn(arm, "bottom-2 left-2 border-b border-l")} />
      <span className={cn(arm, "bottom-2 right-2 border-b border-r")} />
    </span>
  );
}
