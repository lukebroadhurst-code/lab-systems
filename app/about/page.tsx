import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "A short note from the founder. Why LAB Systems exists, what came before, and what's next.",
};

export default function AboutPage() {
  return (
    <section className="section-y">
      <Container width="narrow">
        <MotionIn>
          <SectionLabel number="01" label="About" />
        </MotionIn>

        <MotionIn delay={0.05}>
          <Heading variant="h1" as="h1" className="mt-6">
            A short note
            <br />
            from the <em className="italic">founder.</em>
          </Heading>
        </MotionIn>

        <MotionIn delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-10 md:flex-row md:items-start md:gap-12">
            <div className="shrink-0">
              <div
                aria-label="Founder portrait placeholder"
                className="size-[160px] md:size-[200px] rounded-[4px] bg-fog border border-line flex items-center justify-center"
              >
                <span className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-graphite">
                  {`{{TODO}}`}
                </span>
              </div>
              <p className="mt-3 text-[0.85rem] text-graphite">
                {`{{TODO: founder name & title}}`}
              </p>
            </div>

            <div className="flex flex-col gap-6 text-[1.1875rem] leading-[1.55] text-graphite">
              <p>{`{{TODO: founder copy, paragraph 1. Why this exists. What problem you saw in the market that nobody else was solving. The trigger that turned an observation into a business.}}`}</p>
              <p>{`{{TODO: founder copy, paragraph 2. What came before. The career, the projects, the work that earned the conviction to start this. Speak in plain terms about what you have shipped and what you learned.}}`}</p>
              <p>{`{{TODO: founder copy, paragraph 3. What is next. The trajectory from the current consulting practice into the platform, and what you want the business to look like in three years.}}`}</p>
            </div>
          </div>
        </MotionIn>

        <MotionIn delay={0.15}>
          <div className="mt-16 hairline-t pt-8">
            <p className="text-[0.95rem] text-graphite">
              Direct line:{" "}
              <a
                href="mailto:hello@labsystems.co"
                className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink transition-colors"
              >
                hello@labsystems.co
              </a>
            </p>
          </div>
        </MotionIn>
      </Container>
    </section>
  );
}
