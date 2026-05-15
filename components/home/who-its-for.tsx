import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

const bestFit = [
  "Recruitment & Staffing",
  "Property & Real Estate",
  "Construction & Trades",
  "Logistics & Distribution",
  "Manufacturing & Wholesale",
];

const strongFit = [
  "B2B SaaS (Series A/B)",
  "Professional Services",
  "Events & Hospitality",
  "Training & Education",
];

function FitColumn({
  label,
  number,
  items,
}: {
  label: string;
  number: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-5 hairline-t pt-6">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-graphite">
          {number}
        </span>
        <h3 className="font-serif italic text-[1.5rem] leading-[1.2] text-ink">
          {label}
        </h3>
      </div>
      <ul className="flex flex-col gap-3 text-[1.0625rem] text-ink">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 leading-[1.4]"
          >
            <span
              aria-hidden
              className="mt-[10px] inline-block h-px w-3 shrink-0 bg-line"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhoItsFor() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20 items-end">
            <MotionIn>
              <SectionLabel number="08" label="Who it's for" />
            </MotionIn>
            <MotionIn>
              <Heading variant="h2" className="max-w-[22ch]">
                Built for operators in industries with substance.
              </Heading>
            </MotionIn>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <MotionIn>
              <FitColumn label="Best fit" number="i" items={bestFit} />
            </MotionIn>
            <MotionIn delay={0.06}>
              <FitColumn label="Strong fit" number="ii" items={strongFit} />
            </MotionIn>
          </div>

          <MotionIn delay={0.1}>
            <p className="hairline-t pt-6 text-[0.95rem] text-graphite">
              We don&rsquo;t work in financial services, healthcare, or
              government.
            </p>
          </MotionIn>
        </div>
      </Container>
    </section>
  );
}
