import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";

export function Problem() {
  return (
    <section className="section-y hairline-t">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <MotionIn>
            <SectionLabel number="02" label="The problem" />
          </MotionIn>

          <div className="flex flex-col gap-8 max-w-[760px]">
            <MotionIn>
              <Heading variant="h2">
                Your teams are buried in content, and the brand keeps slipping.
              </Heading>
            </MotionIn>

            <MotionIn delay={0.05}>
              <p className="text-[1.1875rem] leading-[1.55] text-graphite">
                Marketing teams burn hours on first drafts that never quite
                sound right. Sales teams build proposals from scratch every
                time because the playbook lives in someone&rsquo;s head.
                Generic AI tools save time but strip the voice. Brand
                guidelines exist somewhere on a shared drive, although nobody
                refers to them. The cost shows up everywhere: in inconsistent
                proposals, in onboarding that takes too long, in a director
                who spends half their week rewriting the team&rsquo;s work.
              </p>
            </MotionIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
