import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

const stats = [
  { value: "8 to 12 hrs", label: "saved per person, per week" },
  { value: "100%", label: "brand consistency at scale" },
  { value: "3 to 4 months", label: "typical payback period" },
];

export function Impact() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20 items-end">
            <MotionIn>
              <SectionLabel number="05" label="The impact" />
            </MotionIn>
            <MotionIn>
              <Heading variant="h2" className="max-w-[22ch]">
                What changes once the system is in place.
              </Heading>
            </MotionIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((s, i) => (
              <MotionIn
                key={s.label}
                delay={i * 0.06}
                className={
                  i === 0
                    ? "py-8 md:py-0 hairline-t md:border-t-0"
                    : "py-8 md:py-0 hairline-t md:border-t-0 md:border-l md:border-line md:pl-10"
                }
              >
                <div className="flex flex-col gap-3">
                  <span className="font-serif text-[clamp(2.75rem,5vw,4.25rem)] leading-[1] tracking-[-0.02em] text-ink">
                    {s.value}
                  </span>
                  <span className="text-[0.78rem] uppercase tracking-[0.18em] text-graphite max-w-[28ch]">
                    {s.label}
                  </span>
                </div>
              </MotionIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
