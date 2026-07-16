// Scripted demo data for the on-brand transform module.
//
// MVP note: these are curated example scenarios for a sample brand, played back
// client-side. There is no free-text input here yet. When a live "use your own
// copy" mode is added later, it would POST the user's text to a serverless
// route and stream the result into the same on-brand panel.

export const sampleBrand = {
  name: "Meridian Freight",
  voice:
    "Plain, specific, numbers over adjectives. Talks like an operator, never a brochure.",
};

export type DemoPreset = {
  id: string;
  team: "Marketing" | "Sales" | "Customer Success";
  scenario: string;
  generic: string;
  onBrand: string;
};

export const presets: DemoPreset[] = [
  {
    id: "marketing",
    team: "Marketing",
    scenario: "A LinkedIn post",
    generic:
      "🚀 We're excited to announce we're leveraging cutting-edge AI to revolutionise logistics! Our innovative, holistic solutions empower businesses to unlock synergies and drive transformative growth. Reach out to take your supply chain to the next level! #Innovation #AI #Logistics",
    onBrand:
      "We moved 1,200 pallets through our Midlands hub last week with zero missed slots. That isn't a pitch. It's a Tuesday. If your freight keeps sitting in someone's backlog, we should talk.",
  },
  {
    id: "sales",
    team: "Sales",
    scenario: "A cold email opener",
    generic:
      "Dear Valued Customer, I hope this email finds you well. I wanted to reach out to introduce our company and explore potential synergies between our organisations. We offer best-in-class, tailored solutions designed to meet your unique needs and add value across the board.",
    onBrand:
      "Hi Sarah. You're running 4 depots and still booking freight by phone. We fixed exactly that for two firms your size last quarter. 15 minutes on Thursday?",
  },
  {
    id: "cs",
    team: "Customer Success",
    scenario: "A support reply",
    generic:
      "Dear Customer, Thank you for reaching out. We sincerely apologise for any inconvenience this may have caused. Your request is very important to us and we are working diligently to resolve your issue. Please rest assured that we value your business.",
    onBrand:
      "Hi Tom. Your delivery is rebooked for tomorrow, 7 to 9am, and I've credited the missed slot. That shouldn't have happened. If it slips again, call me direct and ask for me by name.",
  },
];
