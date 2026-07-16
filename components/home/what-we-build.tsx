import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";
import { CornerTicks } from "@/components/corner-ticks";

const icons = [
  // Strategic Frameworks: a document
  <svg key="i" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden>
    <path d="M5 4h11l3 3v13H5z" />
    <path d="M8 9h7M8 13h7M8 17h4" />
  </svg>,
  // Growth Systems: a signal
  <svg key="ii" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden>
    <path d="M3 12h5l2-5 4 14 2-6h5" />
  </svg>,
  // AI Infrastructure: a chip
  <svg key="iii" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden>
    <rect x="6" y="6" width="12" height="12" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>,
];

type Card = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

const cards: Card[] = [
  {
    number: "i",
    title: "Strategic Frameworks",
    description:
      "The thinking layer. How your business sounds, sells, and serves, documented so every team works from 1 source of truth.",
    items: [
      "Brand voice and messaging architecture",
      "Sales playbooks, personas, and objection handling",
      "Offer and pricing architecture",
      "Content pillars and guidelines",
    ],
  },
  {
    number: "ii",
    title: "Growth Systems",
    description:
      "The demand layer. The outbound engine, built properly: deliverability first, personalisation grounded in real data, every reply routed and every deal gated.",
    items: [
      "Prospect data sourcing, enrichment, and verification",
      "Cold email infrastructure at scale: separate sending domains, 30-day warmup, inbox rotation",
      "LinkedIn sequencing that picks up where the email sequence ends",
      "Personalisation built from data your prospects published themselves",
      "CRM pipelines with qualification gates, and replies routed straight into your team’s Slack",
    ],
  },
  {
    number: "iii",
    title: "AI Infrastructure",
    description:
      "The execution layer. Custom AI trained on your frameworks, producing the daily work.",
    items: [
      "Custom AI trained on your brand and playbooks",
      "Purpose-built interfaces per team",
      "Branded sales assets on demand: proposals, strategy documents, decks in your design system",
      "Quality guardrails and governance",
    ],
  },
];

export function WhatWeBuild() {
  return (
    <section className="section-y hairline-t bg-fog">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20 items-end">
            <MotionIn>
              <SectionLabel number="04" label="What we build" />
            </MotionIn>
            <MotionIn>
              <div className="flex flex-col gap-3">
                <Heading variant="h2" className="max-w-[24ch]">
                  Frameworks. Growth systems. AI infrastructure.
                </Heading>
                <p className="text-[1.0625rem] leading-[1.55] text-graphite">
                  3 layers, built in this order, each one feeding the next.
                </p>
              </div>
            </MotionIn>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, i) => (
              <MotionIn key={card.title} delay={i * 0.06}>
                <article className="relative flex h-full flex-col gap-6 bg-paper p-8 md:p-10 border border-line rounded-[4px]">
                  <CornerTicks />
                  <span className="text-graphite">{icons[i]}</span>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-graphite">
                      {card.number}
                    </span>
                    <Heading variant="h3" as="h3">
                      {card.title}
                    </Heading>
                  </div>
                  <p className="text-[1.0625rem] leading-[1.55] text-graphite">
                    {card.description}
                  </p>
                  <ul className="mt-2 flex flex-col gap-3 text-[1rem] text-ink">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 hairline-t pt-3 first:hairline-t first:pt-3"
                      >
                        <span aria-hidden className="font-mono text-graphite text-[0.85rem] mt-[3px]">
                          +
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
