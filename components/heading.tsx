import { cn } from "@/lib/cn";

type Variant = "display" | "h1" | "h2" | "h3";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  variant?: Variant;
  serif?: boolean;
};

const variantClasses: Record<Variant, string> = {
  display:
    "text-[clamp(3rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.02em]",
  h1: "text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.02em]",
  h2: "text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.1] tracking-[-0.015em]",
  h3: "text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]",
};

export function Heading({
  as,
  variant = "h2",
  serif = true,
  className,
  children,
  ...rest
}: Props) {
  const Tag =
    as ??
    (variant === "display" || variant === "h1"
      ? "h1"
      : variant === "h2"
        ? "h2"
        : "h3");
  return (
    <Tag
      className={cn(
        variantClasses[variant],
        serif ? "font-serif font-normal text-ink" : "font-sans font-medium text-ink",
        "text-balance",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
