import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Pill } from "@/components/pill";
import { EarlyAccessForm } from "@/components/early-access-form";
import { MotionIn } from "@/components/motion-in";
import { MotionItem } from "@/components/motion-item";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "LAB Systems, as a platform. The productised version of the consulting practice, arriving in 2026. Early access opens to a small group first.",
};

const modules = [
  {
    number: "01",
    name: "Brand Configuration",
    description:
      "Voice, messaging, and pillars set once and referenced everywhere the platform writes.",
  },
  {
    number: "02",
    name: "AI Training Pipeline",
    description:
      "Your content and knowledge translated into a model that knows your business.",
  },
  {
    number: "03",
    name: "Team Workspaces",
    description:
      "Purpose-built interfaces for marketing, sales, and customer success teams.",
  },
  {
    number: "04",
    name: "Governance & Analytics",
    description:
      "Quality controls and usage data, surfaced in one place so the system stays sharp at scale.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="section-y">
        <Container width="narrow">
          <MotionIn>
            <Pill tone="accent">Coming 2026</Pill>
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h1" as="h1" className="mt-6">
              LAB Systems,
              <br />
              as a <em className="italic">platform.</em>
            </Heading>
          </MotionIn>

          <div className="mt-10 flex flex-col gap-6 text-[1.1875rem] leading-[1.55] text-graphite">
            <MotionIn delay={0.1}>
              <p>
                LAB Systems started as a consulting practice that built brand
                frameworks and custom AI infrastructure for mid-market
                businesses. The platform is the productised version of that
                work. The same approach, packaged so a team can subscribe rather
                than commission a project.
              </p>
            </MotionIn>
            <MotionIn delay={0.15}>
              <p>
                It is built for marketing, sales, and customer success teams at
                companies that want the system without the bespoke engagement.
                The trade-off is fit. The platform is opinionated about how you
                configure your brand and how your teams work, in the same way
                the consulting practice is opinionated. If that opinion fits,
                the platform will save you the project.
              </p>
            </MotionIn>
            <MotionIn delay={0.2}>
              <p>
                Generic AI tools start with the model. The platform starts with
                your business. Brand voice, messaging architecture, and sales
                playbook are configured first, and every output runs through
                them. Each team gets a workspace built around its actual job.
                Governance lives at the centre, so quality holds as the team
                grows.
              </p>
            </MotionIn>
          </div>
        </Container>
      </section>

      <section className="section-y hairline-t bg-fog">
        <Container width="narrow">
          <MotionIn>
            <Heading variant="h2" as="h2">
              Four modules.
            </Heading>
          </MotionIn>
          <ol className="mt-12 flex flex-col">
            {modules.map((m, i) => (
              <MotionItem
                key={m.number}
                delay={i * 0.05}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 py-7 hairline-t"
              >
                <span className="font-mono text-[0.85rem] text-graphite tabular-nums pt-2">
                  {m.number}
                </span>
                <h3 className="font-serif text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.15] tracking-[-0.01em] text-ink">
                  {m.name}
                </h3>
                <span aria-hidden />
                <p className="text-[1.0625rem] leading-[1.55] text-graphite max-w-[58ch]">
                  {m.description}
                </p>
              </MotionItem>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-y bg-ink text-paper">
        <Container width="narrow">
          <MotionIn>
            <Pill tone="inverse">Early access</Pill>
          </MotionIn>
          <MotionIn delay={0.05}>
            <Heading variant="h2" as="h2" className="mt-6 text-paper">
              Leave your email,
              <br />
              <em className="italic">we will be in touch.</em>
            </Heading>
          </MotionIn>
          <MotionIn delay={0.1}>
            <p className="mt-8 text-[1.1875rem] leading-[1.55] text-paper/75 max-w-[58ch]">
              Early access opens to a small group first. Operators from the
              industries we work in get the first look, with feedback loops open
              and pricing held below the standard rate.
            </p>
          </MotionIn>
          <MotionIn delay={0.15}>
            <div className="mt-10">
              <EarlyAccessForm tone="inverse" />
            </div>
          </MotionIn>
        </Container>
      </section>
    </>
  );
}
