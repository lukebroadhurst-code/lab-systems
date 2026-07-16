import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

type Column = {
  number: string;
  team: string;
  uses: string[];
};

const columns: Column[] = [
  {
    number: "i",
    team: "Marketing",
    uses: [
      "On-brand first drafts",
      "Content repurposing",
      "Brief generation",
      "Brand compliance checks",
    ],
  },
  {
    number: "ii",
    team: "Sales",
    uses: [
      "Proposal generation",
      "Objection handling",
      "Email drafting",
      "Outbound sequences and reply handling",
      "Competitive positioning",
    ],
  },
  {
    number: "iii",
    team: "Customer Success",
    uses: [
      "Response drafting",
      "Knowledge retrieval",
      "Escalation summaries",
      "Onboarding support",
    ],
  },
];

export function DailyUse() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20 items-end">
            <MotionIn>
              <SectionLabel number="05" label="In daily use" />
            </MotionIn>
            <MotionIn>
              <Heading variant="h2" className="max-w-[22ch]">
                Built for the three teams that need it most.
              </Heading>
            </MotionIn>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {columns.map((col, i) => (
              <MotionIn key={col.team} delay={i * 0.06}>
                <div className="flex flex-col gap-6 hairline-t pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-graphite">
                      {col.number}
                    </span>
                    <Heading variant="h3" as="h3">
                      {col.team}
                    </Heading>
                  </div>
                  <ul className="flex flex-col gap-3 text-[1.0625rem] text-ink">
                    {col.uses.map((use) => (
                      <li
                        key={use}
                        className="flex gap-3 leading-[1.4]"
                      >
                        <span
                          aria-hidden
                          className="mt-[10px] inline-block h-px w-3 shrink-0 bg-line"
                        />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
