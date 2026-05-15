import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  width?: "wide" | "narrow";
  as?: "div" | "section" | "main" | "header" | "footer" | "article";
};

export function Container({
  width = "wide",
  as: Tag = "div",
  className,
  children,
  ...rest
}: Props) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        width === "wide" ? "max-w-[1200px]" : "max-w-[760px]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
