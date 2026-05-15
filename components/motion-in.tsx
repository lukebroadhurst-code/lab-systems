"use client";

import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function MotionIn({ delay = 0, className, style, children, ...rest }: Props) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", revealed && "motion-revealed", className)}
      style={{ ...style, transitionDelay: revealed ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </div>
  );
}
