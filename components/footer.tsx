import Link from "next/link";
import { Container } from "./container";
import { Wordmark } from "./wordmark";

const footerLinks = [
  { href: "/approach", label: "Approach" },
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

        <div className="mt-14 pt-6 hairline-t flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-[0.85rem] text-graphite">
          <p>© {new Date().getFullYear()} LAB Systems Ltd. Registered in England.</p>
          <p>UK companies, 50 to 500 employees.</p>
        </div>
      </Container>
    </footer>
  );
}
