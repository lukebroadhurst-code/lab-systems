import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
import { MotionIn } from "@/components/motion-in";

export function Hero() {
  return (
    <section className="relative section-y overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 18% 22%, rgba(180,95,58,0.06) 0%, rgba(180,95,58,0) 70%)",
        }}
      />
      <Container>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 hidden h-[300px] w-[360px] -translate-y-1/2 xl:block"
          >
            <div className="engine-bus" />
            {[24, 72, 120, 168, 216, 264].map((top) => (
              <div key={top} className="engine-lane" style={{ top }} />
            ))}
            {[
              { top: 21, left: 96 },
              { top: 69, left: 232 },
              { top: 117, left: 150 },
              { top: 165, left: 300 },
              { top: 213, left: 60 },
              { top: 261, left: 200 },
            ].map((n) => (
              <div
                key={`${n.top}-${n.left}`}
                className="engine-node"
                style={{ top: n.top, left: n.left }}
              />
            ))}
            {[
              { top: 20.5, duration: "6.5s", delay: "0s" },
              { top: 116.5, duration: "8s", delay: "-3s" },
              { top: 164.5, duration: "5.5s", delay: "-1.5s" },
              { top: 260.5, duration: "7.2s", delay: "-4s" },
            ].map((d) => (
              <div
                key={d.top}
                className="engine-dot"
                style={{
                  top: d.top,
                  animationDuration: d.duration,
                  animationDelay: d.delay,
                }}
              />
            ))}
            <div className="engine-pulse" style={{ top: 17.5 }} />
            <div
              className="engine-pulse"
              style={{ top: 161.5, animationDelay: "-1.6s" }}
            />
          </div>

          <div className="flex flex-col gap-8 max-w-[860px] xl:max-w-[640px] relative z-10">
          <MotionIn>
            <SectionLabel number="01" label="LAB Systems" />
          </MotionIn>

          <MotionIn delay={0.05}>
            <Heading variant="display" as="h1">
              Your growth runs on memory.
              <br />
              We build the <em className="italic">system.</em>
            </Heading>
          </MotionIn>

          <MotionIn delay={0.1}>
            <p className="text-[1.1875rem] leading-[1.55] text-graphite max-w-[60ch]">
              Outbound that books qualified meetings, playbooks that keep every
              proposal and message sharp, and AI trained on both. LAB Systems
              builds the commercial engine of a growing company, with your team,
              in 11 to 14 weeks, then hands it over.
            </p>
          </MotionIn>

          <MotionIn delay={0.15}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#demo" size="lg">
                See the difference
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Book a 30-minute call
              </Button>
            </div>
          </MotionIn>

          <MotionIn delay={0.2}>
            <div className="hairline-t pt-4">
              <p className="text-[0.95rem] text-graphite">
                For UK companies, from seed-funded startups to 500-person teams.
              </p>
            </div>
          </MotionIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
