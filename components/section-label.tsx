import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  number?: string;
  label: string;
  tone?: "default" | "inverse";
};

export function SectionLabel({
  number,
  label,
  tone = "default",
  className,
  ...rest
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.18em] leading-none",
        tone === "default" ? "text-graphite" : "text-paper/80",
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
      />
      {number ? (
        <span
          className={cn(
            "font-mono tabular-nums",
            tone === "default" ? "text-graphite" : "text-paper/70",
          )}
        >
          {number}
        </span>
      ) : null}
      <span aria-hidden className={cn("h-px w-6", tone === "default" ? "bg-line" : "bg-paper/30")} />
      <span>{label}</span>
    </span>
  );
}
