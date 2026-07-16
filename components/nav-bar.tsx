"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";
import { Container } from "./container";
import { Button } from "./button";
import { cn } from "@/lib/cn";

const links = [
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Work" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Wordmark size="md" />

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.95rem] text-graphite hover:text-ink transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" size="md">
            Book a call
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-ink"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 right-0 top-0 h-px bg-ink transition-transform duration-300",
                menuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 right-0 bottom-0 h-px bg-ink transition-transform duration-300",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-paper">
          <Container className="py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[1.05rem] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Button href="/contact" size="md" className="mt-2 w-fit">
              Book a call
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
