import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

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
      "The thinking layer. We document how your business sounds, sells, and serves, so every team works from one source of truth instead of from memory.",
    items: [
      "Brand voice and messaging architecture",
      "Sales playbooks and objection handling",
      "Content pillars and guidelines",
      "Customer personas and journeys",
    ],
  },
  {
    number: "ii",
    title: "AI Infrastructure",
    description:
      "The execution layer. Custom AI tools trained on your frameworks, with team-specific interfaces and the guardrails that keep output consistent at scale.",
    items: [
      "Custom AI trained on your brand",
      "Purpose-built interfaces per team",
      "Optimised prompt templates",
      "Quality guardrails and governance",
    ],
  },
];

export function WhatWeBuild() {
  return (
    <section className="section-y hairline-t bg-fog">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <MotionIn>
            <SectionLabel number="03" label="What we build" />
          </MotionIn>

          <div className="flex flex-col gap-12">
            <MotionIn>
              <Heading variant="h2" className="max-w-[20ch]">
                Frameworks. Infrastructure. Both built around your business.
              </Heading>
            </MotionIn>

            <div className="grid gap-6 md:grid-cols-2">
              {cards.map((card, i) => (
                <MotionIn key={card.title} delay={i * 0.06}>
                  <article className="flex h-full flex-col gap-6 bg-paper p-8 md:p-10 border border-line rounded-[4px]">
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
        </div>
      </Container>
    </section>
  );
}
