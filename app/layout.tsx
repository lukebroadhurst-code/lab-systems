import type { Metadata } from "next";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://labsystems.co"),
  title: {
    default:
      "LAB Systems | Revenue systems and AI infrastructure for the UK mid-market",
    template: "%s, LAB Systems",
  },
  description:
    "Outbound engines, sales and brand frameworks, and custom AI tooling for UK companies, from seed-funded startups to 500-person teams. Built with your team in 11 to 14 weeks, then handed over.",
  openGraph: {
    title:
      "LAB Systems | Revenue systems and AI infrastructure for the UK mid-market",
    description:
      "Outbound engines, sales and brand frameworks, and custom AI tooling for UK companies, from seed-funded startups to 500-person teams. Built with your team in 11 to 14 weeks, then handed over.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
