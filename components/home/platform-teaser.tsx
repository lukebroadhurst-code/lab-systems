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
            <SectionLabel number="07" label="Coming 2026" tone="inverse" />
          </MotionIn>

          <div className="flex flex-col gap-10 max-w-[760px]">
            <MotionIn>
              <Heading variant="h1" as="h2" className="text-paper">
                The same system, now as a{" "}
                <em className="italic">platform.</em>
              </Heading>
            </MotionIn>

            <MotionIn delay={0.05}>
              <div className="flex flex-col gap-5 text-[1.1875rem] leading-[1.55] text-paper/75">
                <p>
                  The consulting work productises into a SaaS platform in 2026.
                  Same approach, same governance, available as a subscription
                  for mid-market marketing, sales, and customer success teams
                  who want the system without the project.
                </p>
                <p>
                  Early access opens to a small group first. Leave your email
                  and we will be in touch before the wider list goes live.
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
