import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
import { MotionIn } from "@/components/motion-in";
import { MotionItem } from "@/components/motion-item";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from LAB Systems: the commercial engines running at Rooost and Matresa. Outbound infrastructure, growth systems, and AI tooling in live businesses.",
};

type Block = { label: string; body: string };

function CaseStudy({
  intro,
  blocks,
  system,
  footer,
}: {
  intro: Block[];
  system: { label: string; items: string[] };
  blocks: Block[];
  footer: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      {intro.map((b) => (
        <div key={b.label} className="flex flex-col gap-2">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-graphite">
            {b.label}
          </span>
          <p className="text-[1.0625rem] leading-[1.6] text-graphite">
            {b.body}
          </p>
        </div>
      ))}

      <div className="flex flex-col gap-4">
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-graphite">
          {system.label}
        </span>
        <ul className="flex flex-col">
          {system.items.map((item) => (
            <MotionItem
              key={item}
              className="flex gap-4 py-4 hairline-t text-[1.0625rem] leading-[1.55] text-ink"
            >
              <span
                aria-hidden
                className="mt-[11px] inline-block h-px w-3 shrink-0 bg-line"
              />
              <span>{item}</span>
            </MotionItem>
          ))}
        </ul>
      </div>

      {blocks.map((b) => (
        <div key={b.label} className="flex flex-col gap-2">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-graphite">
            {b.label}
          </span>
          <p className="text-[1.0625rem] leading-[1.6] text-graphite">
            {b.body}
          </p>
        </div>
      ))}

      <div className="hairline-t pt-4">
        <p className="text-[0.95rem] text-graphite">{footer}</p>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="section-y">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="01" label="Work" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h1" as="h1" className="mt-6">
              The system, running in{" "}
              <em className="italic">real businesses.</em>
            </Heading>
          </MotionIn>
          <MotionIn delay={0.1}>
            <p className="mt-8 text-[1.1875rem] leading-[1.55] text-graphite">
              Every figure below is either the client&rsquo;s own published
              claim or a system fact, so the page survives checking. Numbers
              from live campaigns get published here as they mature.
            </p>
          </MotionIn>
        </Container>
      </section>

      {/* Matresa */}
      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="02" label="Matresa" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6 mb-12">
              An enterprise sales engine, built before the app goes live.
            </Heading>
          </MotionIn>

          <CaseStudy
            intro={[
              {
                label: "The client",
                body: "Matresa is a clinically grounded maternal health platform, a registered Class I medical device developed with Warwick University, launching in the UK in August 2026. The platform supports mothers from pregnancy through the return to work while giving employers anonymised workforce insight, and it sells to HR, People, and Wellbeing leaders at large UK employers.",
              },
              {
                label: "The brief",
                body: "Enterprise HR deals take months, and the app had a launch date. Matresa needed qualified conversations with enterprise buyers ahead of go-live, a commercial strategy for converting them, and infrastructure a small founding team could run themselves.",
              },
            ]}
            system={{
              label: "The growth system",
              items: [
                "Prospect sourcing and enrichment through Apollo, with a verification layer before any send",
                "Cold email at scale on dedicated sending domains, warmed for 30 days, keeping the main brand domain clean",
                "Email-first sequences, 1 question per email, with LinkedIn outreach picking up contacts after the email sequence completes",
                "HubSpot rebuilt as 2 pipelines with explicit qualification gates between them",
                "Every reply routed into shared Slack channels the minute it lands",
              ],
            }}
            blocks={[
              {
                label: "The strategy layer",
                body: "A pre-launch commercial strategy, delivered as a document built in Matresa's own design system, covering the paid founding partner offer (capped at 5, traded contractually for case-study rights and references), pricing architecture, segment focus on mid-market knowledge firms, and outreach hooks drawn from the 2027 dismissal-protection reforms.",
              },
              {
                label: "The detail worth stealing",
                body: "Every UK employer with 250+ staff publishes gender pay gap data. The targeting model ranks prospects by female share of senior pay quartiles, so the first email can quote a number the prospect reported themselves.",
              },
            ]}
            footer="Status. The engine went live ahead of the August 2026 launch, with capacity for 400+ emails a day once domains are fully warmed. Campaign numbers will be published here as they mature; the client's own pilot evidence, a Big Four firm reporting a 20% productivity improvement, is already doing the heavy lifting inside the sequences."
          />
        </Container>
      </section>

      {/* Rooost */}
      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="03" label="Rooost" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6 mb-12">
              The commercial engine for a workforce accommodation business.
            </Heading>
          </MotionIn>

          <CaseStudy
            intro={[
              {
                label: "The client",
                body: "Rooost is a UK workforce accommodation company serving construction and infrastructure contractors, housing the crews that build the country's major projects.",
              },
              {
                label: "The brief",
                body: "Growth ran on relationships and referrals, which works until a key person moves. The commercial engine needed to generate pipeline consistently, keep every proposal and message on-brand, and stop living in a handful of people's heads.",
              },
            ]}
            system={{
              label: "The growth system",
              items: [
                "Paid search feeding qualified demand into the top of the funnel",
                "HubSpot pipelines with qualification gates, and replies routed to the team",
                "Cold email and LinkedIn sequencing for outbound into target contractors",
                "AI-produced sales collateral: proposals, strategy documents, and decks in Rooost's design system",
              ],
            }}
            blocks={[
              {
                label: "The strategy layer",
                body: "Brand voice, messaging, offer, and pricing documented so the whole commercial team works from 1 source of truth rather than from memory.",
              },
              {
                label: "The detail worth stealing",
                body: "The same frameworks that run the outbound also generate the proposals, so a first-touch email and the document that closes the deal speak in exactly one voice.",
              },
            ]}
            footer="Status. The stack runs Rooost's commercial engine day to day, across paid search, pipeline, outbound, and collateral. Performance figures will be published here as they mature."
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="section-y hairline-t">
        <Container width="narrow">
          <div className="flex flex-col items-start gap-8">
            <MotionIn>
              <Heading variant="h2" as="h2">
                Want an engine like these?
              </Heading>
            </MotionIn>
            <MotionIn delay={0.05}>
              <Button href="/contact" size="lg">
                Book a 30-minute call
              </Button>
            </MotionIn>
          </div>
        </Container>
      </section>
    </>
  );
}
