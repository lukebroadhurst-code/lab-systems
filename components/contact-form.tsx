"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type State = "idle" | "submitting" | "done" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Discovery call");
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name") ?? ""}`,
        `Company: ${fd.get("company") ?? ""}`,
        `Email: ${fd.get("email") ?? ""}`,
        "",
        `${fd.get("prompt") ?? ""}`,
      ].join("\n"),
    );
    window.location.href = `mailto:hello@labsystems.co?subject=${subject}&body=${body}`;
    setState("done");
  }

  if (state === "done") {
    return (
      <div className="hairline-t pt-8" role="status">
        <p className="text-[1.0625rem] text-ink">
          Your email client should have opened with the message ready to send.
          If not, write to{" "}
          <a
            href="mailto:hello@labsystems.co"
            className="underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            hello@labsystems.co
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  const fieldBase =
    "h-12 w-full rounded-[4px] border border-line bg-transparent px-4 text-[0.95rem] text-ink placeholder:text-graphite placeholder:opacity-70 focus:border-ink focus:outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="text-[0.78rem] uppercase tracking-[0.18em] text-graphite"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={fieldBase}
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-company"
            className="text-[0.78rem] uppercase tracking-[0.18em] text-graphite"
          >
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            required
            autoComplete="organization"
            className={fieldBase}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-[0.78rem] uppercase tracking-[0.18em] text-graphite"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldBase}
          placeholder="you@company.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-prompt"
          className="text-[0.78rem] uppercase tracking-[0.18em] text-graphite"
        >
          What&rsquo;s prompting this?
        </label>
        <textarea
          id="contact-prompt"
          name="prompt"
          required
          rows={5}
          className={cn(
            fieldBase,
            "h-auto min-h-[140px] py-3 leading-[1.55] resize-y",
          )}
          placeholder="A sentence or two on what your teams are stuck on."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="h-12 px-6 rounded-[4px] bg-ink text-paper text-[0.95rem] font-medium transition-colors duration-200 hover:bg-graphite disabled:opacity-60"
        >
          {state === "submitting" ? "Sending" : "Send"}
        </button>

        {state === "error" && (
          <p role="alert" className="text-[0.85rem] text-accent">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
