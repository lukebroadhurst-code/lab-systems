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
          <div className="mt-12 flex flex-col gap-6 text-[1.1875rem] leading-[1.55] text-graphite max-w-[68ch]">
            <p>
              I build commercial engines: the outbound that books the meetings,
              the frameworks that keep every proposal and message sharp, and the
              AI tooling trained on both. The longest-running version runs the
              commercial engine at Rooost, a UK workforce accommodation company
              serving construction and infrastructure contractors, where every
              framework on this site has been tested against real buyers and
              real deadlines. LAB Systems exists because that system kept turning
              out to be the product.
            </p>
            <p>
              The conviction comes from range. I spent more than a decade
              building brands of my own in music and events, where an audience
              tells you within about 8 seconds whether the voice is true, before
              turning that instinct commercial: paid search, CRM architecture,
              cold outbound, pricing, and pitch rooms across construction,
              infrastructure, recruitment, and logistics. The same stack now
              runs for more than 1 business, including Matresa, the pre-launch
              commercial engine of a maternal health platform selling into
              enterprise HR. When we document how your business sells,
              it&rsquo;s a practitioner doing the documenting rather than a
              strategist who last shipped anything in 2019.
            </p>
            <p>
              The practice comes first: a small number of deep engagements where
              the frameworks, the growth systems, and the AI infrastructure get
              built side by side. Through 2026 the work productises into the
              platform, the same system offered as a subscription. If you want
              to know whether any of this works before you commit to a call, ask
              me to show you a live one.
            </p>
          </div>
        </MotionIn>

        <MotionIn delay={0.15}>
          <div className="mt-12">
            <p className="font-serif text-[1.25rem] leading-tight text-ink">
              Luke Broadhurst
            </p>
            <p className="text-[0.95rem] text-graphite">Founder, LAB Systems</p>
          </div>
        </MotionIn>

        <MotionIn delay={0.2}>
          <div className="mt-12 hairline-t pt-8">
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
