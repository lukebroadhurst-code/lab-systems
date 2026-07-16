import { Hero } from "@/components/home/hero";
import { Demo } from "@/components/home/demo";
import { Problem } from "@/components/home/problem";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { DailyUse } from "@/components/home/daily-use";
import { Proof } from "@/components/home/proof";
import { Impact } from "@/components/home/impact";
import { ApproachTeaser } from "@/components/home/approach-teaser";
import { PlatformTeaser } from "@/components/home/platform-teaser";
import { WhoItsFor } from "@/components/home/who-its-for";
import { ClosingCta } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Demo />
      <Problem />
      <WhatWeBuild />
      <DailyUse />
      <Proof />
      <Impact />
      <ApproachTeaser />
      <PlatformTeaser />
      <WhoItsFor />
      <ClosingCta />
    </>
  );
}
