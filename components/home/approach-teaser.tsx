import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
import { MotionIn } from "@/components/motion-in";
import { MotionItem } from "@/components/motion-item";

const stages = [
  {
    number: "01",
    name: "Discovery",
    detail:
      "We audit the brand, the sales material, and the operating reality before we propose anything.",
  },
  {
    number: "02",
    name: "Frameworks",
    detail:
      "Voice, messaging architecture, sales playbook, and personas, all documented and signed off.",
  },
  {
    number: "03",
    name: "Build",
    detail:
      "Custom AI infrastructure trained on those frameworks and your existing knowledge.",
  },
  {
    number: "04",
    name: "Enablement",
    detail:
      "Team training, governance, and the handoff that makes the system stick.",
  },
];

export function ApproachTeaser() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24 items-start">
          <div className="flex flex-col gap-8">
            <MotionIn>
              <SectionLabel number="06" label="Approach" />
            </MotionIn>
            <MotionIn>
              <Heading variant="h2">
                We build the engine.
                <br />
                <em className="italic">Your team drives it.</em>
              </Heading>
            </MotionIn>
            <MotionIn delay={0.05}>
              <p className="text-[1.1875rem] leading-[1.55] text-graphite max-w-[44ch]">
                Engagements run for 11 to 14 weeks. We work alongside your
                leadership and the teams who will use the system every day, so
                the frameworks reflect how your business actually operates and
                the infrastructure fits how your people actually work.
              </p>
            </MotionIn>
            <MotionIn delay={0.1}>
              <div>
                <Button href="/approach" variant="ghost" size="lg">
                  See the full approach
                </Button>
              </div>
            </MotionIn>
          </div>

          <ol className="flex flex-col">
            {stages.map((stage, i) => (
              <MotionItem
                key={stage.number}
                delay={i * 0.05}
                className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-6 hairline-t first:hairline-t"
              >
                <span className="font-mono text-[0.85rem] text-graphite tabular-nums pt-1">
                  {stage.number}
                </span>
                <h3 className="font-serif text-[1.5rem] leading-[1.15] tracking-[-0.01em] text-ink">
                  {stage.name}
                </h3>
                <span aria-hidden />
                <p className="text-[1.0625rem] leading-[1.55] text-graphite max-w-[40ch]">
                  {stage.detail}
                </p>
              </MotionItem>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
