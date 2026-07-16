"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import { CornerTicks } from "@/components/corner-ticks";
import { presets, sampleBrand, type DemoPreset } from "@/lib/demo-presets";

const STEP_MS = 16;
const CHARS_PER_STEP = 3; // ~180 chars/sec

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Demo() {
  const [selected, setSelected] = useState<DemoPreset>(presets[0]);
  // Pre-filled so the on-brand panel is never blank: the before/after message
  // lands even if the reveal animation never plays. The typewriter is an
  // enhancement triggered by scroll-in and by chip clicks.
  const [shown, setShown] = useState(presets[0].onBrand);
  const [streaming, setStreaming] = useState(false);
  const [done, setDone] = useState(true);
  const [playId, setPlayId] = useState(0); // bump to (re)play the reveal
  const playedOnce = useRef(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const play = (preset: DemoPreset) => {
    setSelected(preset);
    setPlayId((n) => n + 1);
  };

  // Replay the reveal the first time the demo scrolls into view.
  useEffect(() => {
    if (playedOnce.current) return;
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    if (prefersReducedMotion()) return; // keep the pre-filled text, no animation

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !playedOnce.current) {
            playedOnce.current = true;
            play(selectedRef.current);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -80px 0px", threshold: 0 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Typewriter reveal. Runs only when a play is requested (playId > 0).
  // Strict-Mode safe — the cleanup clears this run's own interval.
  useEffect(() => {
    if (playId === 0) return; // initial pre-filled state, nothing to animate
    playedOnce.current = true;
    const full = selected.onBrand;

    if (prefersReducedMotion()) {
      setShown(full);
      setStreaming(false);
      setDone(true);
      return;
    }

    setShown("");
    setStreaming(true);
    setDone(false);

    let i = 0;
    const id = setInterval(() => {
      i += CHARS_PER_STEP;
      if (i >= full.length) {
        clearInterval(id);
        setShown(full);
        setStreaming(false);
        setDone(true);
      } else {
        setShown(full.slice(0, i));
      }
    }, STEP_MS);
    timer.current = id;

    return () => clearInterval(id);
  }, [playId, selected]);

  const skip = () => {
    if (timer.current) clearInterval(timer.current);
    setShown(selected.onBrand);
    setStreaming(false);
    setDone(true);
  };

  return (
    <section id="demo" ref={sectionRef} className="section-y hairline-t scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20 items-end">
            <SectionLabel number="02" label="See the difference" />
            <Heading variant="h2" className="max-w-[24ch]">
              Generic AI, then the same draft on-brand.
            </Heading>
          </div>

          {/* Sample brand context */}
          <div className="flex flex-col gap-1 border-t border-line pt-6">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-graphite">
              Sample brand
            </span>
            <span className="text-[1.0625rem] text-ink">
              {sampleBrand.name}.{" "}
              <span className="text-graphite">Voice: {sampleBrand.voice}</span>
            </span>
          </div>

          {/* Scenario chips */}
          <div
            role="tablist"
            aria-label="Choose a scenario"
            className="flex flex-wrap gap-3"
          >
            {presets.map((p) => {
              const active = p.id === selected.id;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => play(p)}
                  className={cn(
                    "rounded-[4px] border px-4 py-2 text-[0.9rem] transition-colors duration-200",
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-line bg-transparent text-graphite hover:border-ink hover:text-ink",
                  )}
                >
                  <span className="font-medium">{p.team}</span>
                  <span className={cn(active ? "text-paper/70" : "text-graphite/70")}>
                    {"  "}
                    {p.scenario}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Before / after panels */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Generic */}
            <div className="relative flex flex-col rounded-[4px] border border-line bg-fog p-6 md:p-8">
              <CornerTicks />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-graphite mb-4">
                Generic AI
              </span>
              <p className="text-[1.0625rem] leading-[1.6] text-graphite min-h-[180px] md:min-h-[200px]">
                {selected.generic}
              </p>
            </div>

            {/* On-brand */}
            <div
              onClick={streaming ? skip : undefined}
              className={cn(
                "relative flex flex-col rounded-[4px] border border-line border-l-2 border-l-accent bg-white p-6 md:p-8",
                streaming && "cursor-pointer",
              )}
            >
              <CornerTicks />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent mb-4">
                On-brand
              </span>
              <p
                aria-hidden="true"
                className="text-[1.0625rem] leading-[1.6] text-ink min-h-[180px] md:min-h-[200px]"
              >
                {shown}
                {streaming && (
                  <span className="ml-0.5 inline-block w-[2px] -mb-[2px] h-[1.1em] bg-accent align-middle animate-pulse" />
                )}
              </p>
              {/* Screen-reader announcement: full text once, when complete */}
              <span className="sr-only" aria-live="polite">
                {done ? selected.onBrand : ""}
              </span>
            </div>
          </div>

          {/* Post-reveal CTA */}
          <div
            className={cn(
              "flex flex-col items-start gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-center",
              done
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none",
            )}
          >
            <p className="text-[1.0625rem] text-graphite">
              That is one voice, held across every team. Now picture it on yours.
            </p>
            <Button href="/contact" size="md">
              Make this work on your brand
            </Button>
          </div>

          {streaming && (
            <button
              onClick={skip}
              className="self-start text-[0.85rem] text-graphite underline decoration-line underline-offset-4 hover:decoration-ink transition-colors"
            >
              Skip the animation
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
