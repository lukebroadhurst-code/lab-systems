import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

const stages = [
  { label: "Prospect sourced", meta: "apollo · verified", to: "82%", delay: "0s" },
  { label: "Sequenced", meta: "email → linkedin", to: "58%", delay: "-1.2s" },
  { label: "Qualified reply", meta: "routed to slack", to: "36%", delay: "-2.4s" },
  { label: "Meeting booked", meta: "into pipeline", to: "20%", delay: "-3.6s" },
];

export function EngineViz() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20 items-end">
            <MotionIn>
              <SectionLabel label="The engine, visualised" />
            </MotionIn>
            <MotionIn>
              <Heading variant="h2" className="max-w-[22ch]">
                Signal in. Booked meetings out.
              </Heading>
            </MotionIn>
          </div>

          <MotionIn delay={0.05}>
            <div className="flex flex-col gap-3 max-w-[680px]">
              {stages.map((s) => (
                <div
                  key={s.label}
                  className="relative flex h-14 items-center justify-between overflow-hidden rounded-[3px] border border-line bg-paper px-4"
                >
                  <span
                    className="engine-fill"
                    style={
                      {
                        "--to": s.to,
                        animationDelay: s.delay,
                      } as React.CSSProperties
                    }
                  />
                  <span className="relative font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                    {s.label}
                  </span>
                  <span className="relative font-mono text-[0.7rem] text-graphite">
                    {s.meta}
                  </span>
                </div>
              ))}
            </div>
          </MotionIn>
        </div>
      </Container>
    </section>
  );
}
