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
              Brand frameworks
              <br />
              and <em className="italic">AI infrastructure</em>
              <br />
              for teams that scale.
            </Heading>
          </MotionIn>

          <MotionIn delay={0.1}>
            <p className="text-[1.1875rem] leading-[1.55] text-graphite max-w-[60ch]">
              We build the strategic frameworks and the AI infrastructure that
              make your marketing and sales teams dramatically more efficient,
              while keeping your brand consistent at scale.
            </p>
          </MotionIn>

          <MotionIn delay={0.15}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Book a discovery call
              </Button>
              <Button href="/approach" variant="ghost" size="lg">
                See our approach
              </Button>
            </div>
          </MotionIn>

          <MotionIn delay={0.2}>
            <div className="hairline-t pt-4">
              <p className="text-[0.95rem] text-graphite">
                For UK companies, 50 to 500 employees, £5M to £100M revenue.
              </p>
            </div>
          </MotionIn>
        </div>
      </Container>
    </section>
  );
}
