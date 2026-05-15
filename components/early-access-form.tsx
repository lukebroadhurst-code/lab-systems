"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "inverse";

type Props = {
  tone?: Tone;
  className?: string;
};

export function EarlyAccessForm({ tone = "default", className }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );

  const inverse = tone === "inverse";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || state === "submitting") return;
    // Submissions are not wired yet. Show a passive notice instead.
    setState("done");
  }

  if (state === "done") {
    return (
      <p
        className={cn(
          "text-[0.95rem]",
          inverse ? "text-paper/80" : "text-graphite",
          className,
        )}
        role="status"
      >
        Submissions open soon. In the meantime, email{" "}
        <a
          href="mailto:hello@labsystems.co?subject=Early%20access"
          className={cn(
            "underline underline-offset-4",
            inverse ? "text-paper decoration-paper/40 hover:decoration-paper" : "text-ink decoration-line hover:decoration-ink",
          )}
        >
          hello@labsystems.co
        </a>
        .
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col sm:flex-row gap-3 max-w-md", className)}
      noValidate
    >
      <label htmlFor="early-access-email" className="sr-only">
        Email address
      </label>
      <input
        id="early-access-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={cn(
          "flex-1 h-12 rounded-[4px] border bg-transparent px-4 text-[0.95rem] placeholder:text-current placeholder:opacity-50 focus:outline-none focus:ring-0 transition-colors",
          inverse
            ? "border-paper/30 text-paper focus:border-paper"
            : "border-line text-ink focus:border-ink",
        )}
      />
      <button
        type="submit"
        disabled={state === "submitting"}
        className={cn(
          "h-12 px-6 rounded-[4px] text-[0.95rem] font-medium transition-colors duration-200",
          inverse
            ? "bg-paper text-ink hover:bg-fog disabled:opacity-60"
            : "bg-ink text-paper hover:bg-graphite disabled:opacity-60",
        )}
      >
        {state === "submitting" ? "Sending" : "Request access"}
      </button>
      {state === "error" && (
        <p
          role="alert"
          className={cn(
            "basis-full text-[0.85rem]",
            inverse ? "text-paper/80" : "text-accent",
          )}
        >
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
