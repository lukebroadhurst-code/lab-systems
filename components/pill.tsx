import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "inverse" | "accent";
};

const tones = {
  default:
    "border-line bg-paper text-graphite",
  inverse:
    "border-paper/30 bg-transparent text-paper",
  accent:
    "border-accent/60 bg-accent/10 text-ink",
};

export function Pill({ tone = "default", className, children, ...rest }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] leading-none",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
