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

export const RATING_STATS = {
  average: 4.67,
  total: 110,
  distribution: [
    { star: 5, count: 84, percent: "80%" },
    { star: 4, count: 17, percent: "15%" },
    { star: 3, count: 8, percent: "4%" },
    { star: 2, count: 1, percent: "1%" },
    { star: 1, count: 0, percent: "0%" },
  ],
};

export const REVIEWS_DATA = [
  {
    id: 1,
    author: "Anonymous",
    verified: true,
    date: "12/08/2025",
    rating: 5,
    content:
      "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
  },
  {
    id: 2,
    author: "Anonymous",
    verified: true,
    date: "12/01/2025",
    rating: 5,
    content: "One month and I've already seen a difference!",
  },
  {
    id: 3,
    author: "Donabeth Houx",
    verified: true,
    date: "11/23/2025",
    rating: 5,
    content:
      "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!",
  },
  {
    id: 4,
    author: "Dawn Camacho",
    verified: true,
    date: "11/17/2025",
    rating: 4,
    content:
      "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
  },
  {
    id: 5,
    author: "Anonymous",
    verified: true,
    date: "11/17/2025",
    rating: 4,
    content: "I have noticed a difference on my swelling.",
  },
  {
    id: 6,
    author: "Anonymous",
    verified: true,
    date: "11/10/2025",
    rating: 5,
    content: "starting to see results after one bottle",
  },
  {
    id: 7,
    author: "Anonymous",
    verified: true,
    date: "11/10/2025",
    rating: 5,
    content: "starting to see results after one bottle",
  },
  {
    id: 8,
    author: "Anonymous",
    verified: true,
    date: "11/10/2025",
    rating: 5,
    content: "starting to see results after one bottle",
  },
  {
    id: 9,
    author: "Anonymous",
    verified: true,
    date: "11/10/2025",
    rating: 5,
    content: "starting to see results after one bottle",
  },
  {
    id: 10,
    author: "Anonymous",
    verified: true,
    date: "11/10/2025",
    rating: 5,
    content: "starting to see results after one bottle",
  },
  {
    id: 11,
    author: "Anonymous",
    verified: true,
    date: "11/10/2025",
    rating: 5,
    content: "starting to see results after one bottle",
  },
];

export const STORIES = [
  {
    id: 1,
    src: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
  },
  {
    id: 4,
    src: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
  },
  {
    id: 6,
    src: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
  },
  {
    id: 7,
    src: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
  },
  {
    id: 8,
    src: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
  },
  {
    id: 9,
    src: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
  },
  {
    id: 10,
    src: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
    image:
      "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
  },
];
