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
            <SectionLabel number="03" label="The problem" />
          </MotionIn>

          <div className="flex flex-col gap-8 max-w-[760px]">
            <MotionIn>
              <Heading variant="h2">
                The pipeline lives in 2 diaries, and the playbook lives in
                someone&rsquo;s head.
              </Heading>
            </MotionIn>

            <MotionIn delay={0.05}>
              <p className="text-[1.1875rem] leading-[1.55] text-graphite">
                Most mid-market companies run their commercial engine on memory.
                Proposals get rebuilt from a blank page each time, in whatever
                voice the writer had that morning. New business arrives through
                referrals and 1 or 2 relentless salespeople, which works right
                up until one of them leaves. Marketing produces drafts the MD
                rewrites at the weekend, while the brand guidelines sit in a
                shared drive folder last opened in January. Generic AI tools
                speed all of this up and flatten the voice as they go. The cost
                shows up as inconsistent proposals, slow onboarding, and a
                pipeline that depends entirely on 2 people staying put.
              </p>
            </MotionIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
