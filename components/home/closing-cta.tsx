import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { MotionIn } from "@/components/motion-in";

export function ClosingCta() {
  return (
    <section className="section-y hairline-t">
      <Container width="narrow">
        <div className="flex flex-col items-center gap-10 text-center">
          <MotionIn>
            <Heading variant="display" as="h2" className="text-balance">
              Ready to build your <em className="italic">system?</em>
            </Heading>
          </MotionIn>

          <MotionIn delay={0.05}>
            <p className="text-[1.1875rem] leading-[1.55] text-graphite max-w-[58ch]">
              A 30-minute discovery call. We listen to where your teams are
              stuck, take a view on whether the engagement model fits, and tell
              you straight if it doesn&rsquo;t. No pitch.
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
  );
}
