import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
import { MotionIn } from "@/components/motion-in";
import { MotionItem } from "@/components/motion-item";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How LAB Systems works. Discovery, frameworks, build, enablement. Why we build the strategic and technical layers together, not in sequence.",
};

const stages = [
  {
    number: "01",
    name: "Discovery",
    duration: "2 weeks",
    detail:
      "We sit with leadership, read a sample of customer conversations, audit every existing piece of brand and sales material, and interview the people who do the work. The output is not a 200-slide diagnostic. It is a plain-language read on how the business sounds at its best and where the gaps actually are.",
  },
  {
    number: "02",
    name: "Frameworks",
    duration: "3 to 4 weeks",
    detail:
      "Voice, messaging architecture, sales playbook, and personas. Every decision goes through the people who will use it before it gets signed off. By the end of the stage the business has a single source of truth that a new hire can pick up on day one.",
  },
  {
    number: "03",
    name: "Build",
    duration: "4 to 6 weeks",
    detail:
      "Custom AI infrastructure trained on the frameworks and your existing knowledge. We build the team-specific interfaces so marketing, sales, and customer success each get a tool that fits their actual workflow, not a generic chat window.",
  },
  {
    number: "04",
    name: "Enablement",
    duration: "2 weeks",
    detail:
      "Training the teams who will use the system, setting up governance so quality stays high as more people use it, and handing off to either ongoing support or self-management. We don't leave until the system is part of the operating rhythm.",
  },
];

const deliverables = [
  "A documented brand book covering voice, messaging architecture, content pillars, and personas",
  "Custom AI infrastructure trained on your business, hosted in your environment or ours",
  "Purpose-built team interfaces for marketing, sales, and customer success",
  "Governance documentation and quality guardrails for ongoing use",
];

export default function ApproachPage() {
  return (
    <>
      <section className="section-y">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="01" label="Approach" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h1" as="h1" className="mt-6">
              How the work runs.
            </Heading>
          </MotionIn>
          <MotionIn delay={0.1}>
            <p className="mt-8 text-[1.1875rem] leading-[1.55] text-graphite">
              Engagements run for 11 to 14 weeks end to end. The first half is
              thinking work. The second half is building. They are not
              sequential phases handed between teams. The same group of people
              who interview your leadership write the prompts the AI uses six
              weeks later, and that continuity is the point.
            </p>
          </MotionIn>
        </Container>
      </section>

      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="02" label="The thinking" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6">
              Why we build both halves at once.
            </Heading>
          </MotionIn>

          <div className="mt-10 flex flex-col gap-6 text-[1.1875rem] leading-[1.55] text-graphite">
            <MotionIn delay={0.1}>
              <p>
                Most engagements stop at the framework. They hand over a brand
                book, a messaging architecture, a playbook, and walk away. The
                intent is good. The result is usually a 60-page document that
                sits on a shared drive and never reaches the work.
              </p>
            </MotionIn>
            <MotionIn delay={0.15}>
              <p>
                We build both halves in the same engagement because the
                framework only holds if it shows up in the day-to-day output.
                The AI infrastructure is what makes that happen. It is the
                bridge between what was decided in a workshop and what a
                marketer produces on a Tuesday afternoon under deadline. Build
                the infrastructure later and the gap widens. By the time the
                engineering work starts, leadership has moved on, the team has
                reverted to old habits, and the careful thinking in the brand
                book is already aging.
              </p>
            </MotionIn>
          </div>
        </Container>
      </section>

      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="03" label="The 4 stages" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6">
              Discovery, frameworks, build, enablement.
            </Heading>
          </MotionIn>

          <ol className="mt-12 flex flex-col">
            {stages.map((stage, i) => (
              <MotionItem
                key={stage.number}
                delay={i * 0.06}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 py-8 hairline-t"
              >
                <span className="font-mono text-[0.85rem] text-graphite tabular-nums pt-2">
                  {stage.number}
                </span>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.01em] text-ink">
                    {stage.name}
                  </h3>
                  <span className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-graphite shrink-0">
                    {stage.duration}
                  </span>
                </div>
                <span aria-hidden />
                <p className="text-[1.0625rem] leading-[1.55] text-graphite">
                  {stage.detail}
                </p>
              </MotionItem>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-y hairline-t bg-fog">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="04" label="What you own at the end" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6">
              The deliverables, plain and named.
            </Heading>
          </MotionIn>

          <ul className="mt-10 flex flex-col">
            {deliverables.map((item, i) => (
              <MotionItem
                key={item}
                delay={i * 0.05}
                className="flex gap-6 py-6 hairline-t text-[1.0625rem] leading-[1.55] text-ink"
              >
                <span className="font-mono text-graphite text-[0.85rem] pt-1 tabular-nums">
                  0{i + 1}
                </span>
                <span>{item}</span>
              </MotionItem>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="05" label="What it costs" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6">
              Priced by scope, not by hour.
            </Heading>
          </MotionIn>
          <MotionIn delay={0.1}>
            <p className="mt-8 text-[1.1875rem] leading-[1.55] text-graphite">
              Engagements typically range from £15,000 to £60,000 depending on
              scope. Optional ongoing support is priced separately, by month or
              by retainer, agreed at the end of the engagement once we know what
              the team actually needs.
            </p>
          </MotionIn>
        </Container>
      </section>

      <section className="section-y hairline-t">
        <Container width="narrow">
          <div className="flex flex-col items-start gap-8">
            <MotionIn>
              <Heading variant="display" as="h2">
                Want to talk it through?
              </Heading>
            </MotionIn>
            <MotionIn delay={0.05}>
              <p className="text-[1.1875rem] leading-[1.55] text-graphite max-w-[58ch]">
                A 30-minute discovery call. We listen to where your teams are
                stuck, take a view on whether the engagement model fits, and
                tell you straight if it doesn&rsquo;t. No pitch.
              </p>
            </MotionIn>
            <MotionIn delay={0.1}>
              <Button href="/contact" size="lg">
                Book a discovery call
              </Button>
            </MotionIn>
          </div>
        </Container>
      </section>
    </>
  );
}
