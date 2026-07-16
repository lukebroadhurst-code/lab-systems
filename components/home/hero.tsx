import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
import { MotionIn } from "@/components/motion-in";

export function Hero() {
  return (
    <section className="relative section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 18% 22%, rgba(180,95,58,0.06) 0%, rgba(180,95,58,0) 70%)",
        }}
      />
      <Container>
        <div className="flex flex-col gap-8 max-w-[860px]">
          <MotionIn>
            <SectionLabel number="01" label="LAB Systems" />
          </MotionIn>

          <MotionIn delay={0.05}>
            <Heading variant="display" as="h1">
              Pipeline, playbooks, and the AI systems that{" "}
              <em className="italic">run them.</em>
            </Heading>
          </MotionIn>

          <MotionIn delay={0.1}>
            <p className="text-[1.1875rem] leading-[1.55] text-graphite max-w-[60ch]">
              LAB Systems builds the commercial engine of a growing company:
              outbound that books qualified meetings, frameworks that keep every
              proposal and message sharp, and AI tooling trained on both. Built
              with your team in 11 to 14 weeks, then handed over.
            </p>
          </MotionIn>

          <MotionIn delay={0.15}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#demo" size="lg">
                See the difference
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Book a 30-minute call
              </Button>
            </div>
          </MotionIn>

          <MotionIn delay={0.2}>
            <div className="hairline-t pt-4">
              <p className="text-[0.95rem] text-graphite">
                For UK companies, from seed-funded startups to 500-person teams.
              </p>
            </div>
          </MotionIn>
        </div>
      </Container>
    </section>
  );
}
