import { cn } from "@/lib/cn";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatBlock({ value, label, className }: Props) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="font-serif text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-[-0.02em] text-ink">
        {value}
      </span>
      <span className="text-[0.78rem] uppercase tracking-[0.18em] text-graphite">
        {label}
      </span>
    </div>
  );
}
