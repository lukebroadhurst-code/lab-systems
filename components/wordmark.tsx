import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[15px]",
  md: "text-[17px]",
  lg: "text-[22px]",
};

export function Wordmark({ className, href = "/", size = "md" }: Props) {
  const content = (
    <span
      className={cn(
        "inline-flex items-baseline gap-3 leading-none text-ink",
        sizes[size],
        className,
      )}
    >
      <span className="font-serif italic tracking-tight">LAB</span>
      <span
        aria-hidden
        className="h-px w-6 translate-y-[-4px] bg-line"
      />
      <span className="font-sans uppercase tracking-[0.22em] text-graphite text-[0.66em]">
        Systems
      </span>
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
