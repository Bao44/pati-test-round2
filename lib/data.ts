import { BundleOption } from "@/types/types";

export const BUNDLE_OPTIONS: BundleOption[] = [
  {
    id: "1-bottle",
    title: "1 Bottle",
    subtitle: "1 bottle total | Save $27.99",
    price: 31.96,
    originalPrice: 59.95,
    perks: [{ icon: "truck", text: "Free USA Shipping" }],
    desc: "Refills Ship Monthly",
  },
  {
    id: "2-get-1",
    title: "Buy 2 Get 1 Free",
    subtitle: "3 bottles total | Save $115.93",
    price: 63.92,
    originalPrice: 179.85,
    isPopular: true,
    perks: [
      { icon: "truck", text: "Free USA Shipping" },
      { icon: "book", text: "Free Anti-Bloating Protocol E-book" },
    ],
    desc: "Refills Ship Bi-Monthly",
  },
  {
    id: "3-get-2",
    title: "Buy 3 Get 2 Free",
    subtitle: "5 bottles total | Save $203.87",
    price: 95.88,
    originalPrice: 299.75,
    perks: [
      { icon: "truck", text: "Free USA Shipping" },
      { icon: "book", text: "Free Anti-Bloating Protocol E-book" },
      { icon: "gift", text: "$20 Gift Card" },
    ],
    desc: "Refills Ship Every 12 Week",
  },
];

export const INGREDIENTS = [
  {
    name: "Echinacea purpurea Extract",
    desc: "Known for its anti-inflammatory properties, it may support skin health.",
  },
  {
    name: "Dandelion Extract",
    desc: "Traditionally used as a diuretic, it may help reduce water retention.",
  },
  {
    name: "Burdock Powder",
    desc: "Contains antioxidants that may promote skin clarity.",
  },
  {
    name: "Cleavers Extract",
    desc: "Believed to support lymphatic drainage and detoxification.",
  },
  {
    name: "Rutin",
    desc: "A flavonoid that may strengthen blood vessels and improve circulation.",
  },
  {
    name: "Bromelain Powder",
    desc: "An enzyme from pineapple that may reduce inflammation and support tissue repair.",
  },
  {
    name: "Lemon Powder",
    desc: "Rich in vitamin C, it may aid in collagen production and skin rejuvenation.",
  },
  {
    name: "Kelp Extract",
    desc: "A source of iodine and minerals that may support skin metabolism.",
  },
];

export const LOGOS = [
  {
    id: 1,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 2,
    src: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  },
  {
    id: 3,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 4,
    src: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
  },
  {
    id: 5,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 6,
    src: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  },
  {
    id: 7,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 8,
    src: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
  },
  {
    id: 9,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 10,
    src: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  },
  {
    id: 11,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 12,
    src: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
  },
  {
    id: 13,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 14,
    src: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  },
  {
    id: 15,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 16,
    src: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
  },
  {
    id: 17,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 18,
    src: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  },
  {
    id: 19,
    src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  },
  {
    id: 20,
    src: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
  },
];

export const INGREDIENTS_GRID = [
  {
    id: 1,
    benefit: "Reactivate Lymphatic Pumps",
    name: "Cleavers Extract",
    dosage: "100mg",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909  ",
    desc: 'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',
    study: "[Study: Enhanced NK cell activity in immunosuppressed models]",
  },
  {
    id: 2,
    benefit: "Flush Excess Fluid",
    name: "Dandelion Extract",
    dosage: "250mg",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
    desc: "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).",
    study: "[Study: First human pilot study on diuretic effects]",
  },
  {
    id: 3,
    benefit: "Break Down Protein Clogs",
    name: "Bromelain Powder",
    dosage: "100mg",
    image: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
    desc: 'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',
    study: "[Study: As effective as prescription NSAIDs for inflammation]",
  },
  {
    id: 4,
    benefit: "Strengthen Vessel Walls",
    name: "Rutin",
    dosage: "100mg",
    image: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
    desc: "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.",
    study: "[Study: Systematic review of 1,643 participants]",
  },
  {
    id: 5,
    benefit: "Reduce Inflammation",
    name: "Burdock Root Powder",
    dosage: "200mg",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
    desc: " Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.",
    study: "[Study: 42-day trial in osteoarthritis patients]",
  },
  {
    id: 6,
    benefit: "Boost Immune Clearance",
    name: "Echinacea Purpurea Extract",
    dosage: "500mg",
    image: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
    desc: "Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.",
    study: "[Study: Increased NK cell cytotoxic activity]",
  },
  {
    id: 7,
    benefit: "Support Metabolism",
    name: "Kelp Extract",
    dosage: "30mg",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
    desc: "Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.",
    study: "[Study: Dose-dependent increase in TSH levels]",
  },
  {
    id: 8,
    benefit: "Antioxidant Protection",
    name: "Lemon Powder",
    dosage: "50mg",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
    desc: "Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.",
    study: "[Study: Triple-masked trial in 90 participants]",
  },
];
