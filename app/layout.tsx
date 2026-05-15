import type { Metadata } from "next";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://labsystems.co"),
  title: {
    default: "LAB Systems. Strategy. AI. Scale.",
    template: "%s, LAB Systems",
  },
  description:
    "Brand frameworks and AI infrastructure for UK companies that want their marketing and sales teams to move faster without losing the voice.",
  openGraph: {
    title: "LAB Systems. Strategy. AI. Scale.",
    description:
      "Brand frameworks and AI infrastructure for UK companies that want their marketing and sales teams to move faster without losing the voice.",
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
