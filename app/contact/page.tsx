import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionLabel } from "@/components/section-label";
import { MotionIn } from "@/components/motion-in";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute discovery call. We listen to where your teams are stuck, take a view on whether the engagement model fits, and tell you straight if it doesn't.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-y">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="01" label="Contact" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h1" as="h1" className="mt-6">
              Book a 30-minute
              <br />
              <em className="italic">discovery call.</em>
            </Heading>
          </MotionIn>
          <MotionIn delay={0.1}>
            <p className="mt-8 text-[1.1875rem] leading-[1.55] text-graphite max-w-[58ch]">
              The call covers your situation, where the team is stuck, and
              whether the engagement model fits what you actually need. We tell
              you straight if it doesn&rsquo;t. No pitch, no follow-up
              sequence.
            </p>
          </MotionIn>
        </Container>
      </section>

      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="02" label="Pick a time" />
          </MotionIn>

          <MotionIn delay={0.05}>
            <div className="mt-8 border border-line bg-fog rounded-[4px] p-8 md:p-12">
              <p className="text-[1.0625rem] leading-[1.55] text-graphite">
                Email{" "}
                <a
                  href="mailto:hello@labsystems.co"
                  className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                >
                  hello@labsystems.co
                </a>{" "}
                with 2 or 3 times that suit you, and we&rsquo;ll confirm 1 by
                reply.
              </p>
            </div>
          </MotionIn>
        </Container>
      </section>

      <section className="section-y hairline-t">
        <Container width="narrow">
          <MotionIn>
            <SectionLabel number="03" label="Or use the form" />
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6">
              Tell us where you&rsquo;re stuck.
            </Heading>
          </MotionIn>
          <MotionIn delay={0.1}>
            <p className="mt-6 text-[1.0625rem] leading-[1.55] text-graphite max-w-[58ch]">
              A sentence is fine. We reply within one working day from a real
              email address, not a marketing platform.
            </p>
          </MotionIn>

          <MotionIn delay={0.15}>
            <div className="mt-10">
              <ContactForm />
            </div>
          </MotionIn>
        </Container>
      </section>
    </>
  );
}
