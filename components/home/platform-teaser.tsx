import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { EarlyAccessForm } from "@/components/early-access-form";
import { MotionIn } from "@/components/motion-in";

export function PlatformTeaser() {
  return (
    <section className="bg-ink text-paper section-y">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <MotionIn>
            <SectionLabel number="09" label="Coming 2026" tone="inverse" />
          </MotionIn>

          <div className="flex flex-col gap-10 max-w-[760px]">
            <MotionIn>
              <Heading variant="h1" as="h2" className="text-paper">
                The same system, as a{" "}
                <em className="italic">platform,</em> in 2026.
              </Heading>
            </MotionIn>

            <MotionIn delay={0.05}>
              <div className="flex flex-col gap-5 text-[1.1875rem] leading-[1.55] text-paper/75">
                <p>
                  The consulting work is productising into a subscription
                  platform for mid-market marketing, sales, and customer success
                  teams. A founding cohort gets access first, at pricing locked
                  for as long as they stay, in exchange for shaping the roadmap
                  with us. The cohort stays small because the feedback has to be.
                </p>
                <p>
                  Leave an email address and you will hear from us before the
                  public list opens.
                </p>
              </div>
            </MotionIn>

            <MotionIn delay={0.1}>
              <EarlyAccessForm tone="inverse" />
            </MotionIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
