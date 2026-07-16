import Link from "next/link";
import { Container } from "./container";
import { Wordmark } from "./wordmark";

const footerLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Work" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Book a call" },
];

export function Footer() {
  return (
    <footer className="mt-auto hairline-t bg-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div className="flex flex-col gap-5">
            <Wordmark size="lg" />
            <p className="font-serif italic text-[1.05rem] text-graphite">
              Strategy. AI. Scale.
            </p>

            <div className="relative h-[7px] w-[150px]" aria-hidden>
              <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-line" />
              <span className="absolute left-[22px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-graphite bg-paper" />
              <span className="absolute left-[78px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-graphite bg-paper" />
              <span className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-accent" />
            </div>
            <a
              href="mailto:hello@labsystems.co"
              className="text-[0.95rem] text-ink underline decoration-line underline-offset-4 hover:decoration-ink transition-colors w-fit"
            >
              hello@labsystems.co
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-graphite hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-6 hairline-t text-[0.85rem] text-graphite">
          <p>© 2026 LAB Systems</p>
        </div>
      </Container>
    </footer>
  );
}
