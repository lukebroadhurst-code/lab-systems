"use client";

import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/cn";

type Props = React.LiHTMLAttributes<HTMLLIElement> & {
  delay?: number;
};

export function MotionItem({ delay = 0, className, style, children, ...rest }: Props) {
  const { ref, revealed } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={cn("motion-reveal", revealed && "motion-revealed", className)}
      style={{ ...style, transitionDelay: revealed ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </li>
  );
}
