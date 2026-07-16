import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

export function Proof() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <MotionIn>
            <SectionLabel number="06" label="Proof" />
          </MotionIn>

          <div className="flex flex-col gap-8 max-w-[760px]">
            <MotionIn>
              <Heading variant="h2">
                Built in-house before it was sold.
              </Heading>
            </MotionIn>

            <MotionIn delay={0.05}>
              <p className="text-[1.1875rem] leading-[1.55] text-graphite">
                LAB Systems is run by an operator, and the stack is live in
                working businesses today. At Rooost, a UK workforce accommodation
                company serving construction and infrastructure clients, it runs
                the whole commercial engine: paid search, HubSpot pipelines, cold
                email and LinkedIn sequencing, and AI-produced sales collateral.
                For a pre-launch maternal health platform selling into enterprise
                HR, it built the outbound infrastructure and the commercial
                strategy behind their founding-customer motion. The consultancy
                sells the system after running it, which means the mistakes
                arrive pre-made and the templates arrive pre-tested.
              </p>
            </MotionIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
