import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/button";
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
                Already running in real businesses.
              </Heading>
            </MotionIn>

            <MotionIn delay={0.05}>
              <p className="text-[1.1875rem] leading-[1.55] text-graphite">
                Built and run by an operator who has spent years inside
                commercial teams, not slide decks. At Rooost, a UK workforce
                accommodation company serving construction and infrastructure
                contractors, the system runs the whole commercial engine: paid
                search, HubSpot pipelines, cold email and LinkedIn sequencing,
                and AI-produced sales collateral. For Matresa, a pre-launch
                maternal health platform selling into enterprise HR, it built
                the outbound infrastructure and the commercial strategy behind
                their founding-customer motion.
              </p>
            </MotionIn>

            <MotionIn delay={0.1}>
              <div>
                <Button href="/work" variant="ghost" size="lg">
                  Read the case studies
                </Button>
              </div>
            </MotionIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
