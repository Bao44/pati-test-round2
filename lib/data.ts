import { BundleOption } from "@/types/types";

export const HERO_IMAGES = [
  "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216",
  "https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216",
];

export const ORIGINAL_IMAGES = [
  "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685",
];

export const PRODUCT_FEATURES = [
  {
    icon: "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
    text: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
    text: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
    text: "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
    text: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
    text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
    text: "Boosts energy, mental clarity and emotional balance",
  },
];

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

export const FAQS = [
  {
    question: "How is this different from lymphatic drops I saw on TikTok?",
    answer:
      "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling. \nSculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.",
  },
  {
    question: "Why didn't my diet changes work?",
    answer:
      "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.",
  },
  {
    question: "Is this safe? Any side effects?",
    answer:
      "Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.",
  },
  {
    question: "Can I take this with other supplements?",
    answer:
      "Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.",
  },
  {
    question: "How do I use it?",
    answer:
      "Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.",
  },
  {
    question: "Where is this manufactured?",
    answer:
      "Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.",
  },
  {
    question: "Why isn't this in stores?",
    answer:
      "Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.",
  },
  {
    question: "Is this vegan/gluten-free?",
    answer:
      "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients",
  },
];
