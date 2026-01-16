import React from "react";
import { Truck, ShieldCheck, Leaf, CalendarCheck } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    src: "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
    title: "Free Shipping from USA",
    desc: "On all orders",
  },
  {
    id: 2,
    src: "https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
    title: "Naturally Supports Your Body",
    desc: "Promotes healthy immune cell functions",
  },
  {
    id: 3,
    src: "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
    title: "100% Natural Ingredients",
    desc: "8 active, natural ingredients",
  },
  {
    id: 4,
    src: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
    title: "Try it Risk Free for 60 Days",
    desc: "60-day money-back guarantee",
  },
];

export default function GuaranteeFeatures() {
  return (
    <div className="bg-bg-cream py-8 md:py-6 border-t border-[#EAE8E0]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 gap-10 max-sm:gap-5 md:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-[#008F5D]">
                <img
                  src={feature.src}
                  alt={feature.title}
                  className="w-10 h-10"
                />
              </div>

              {/* TEXT CONTENT */}
              <p className="mb-2 text-[17px] font-medium text-gray-900">
                {feature.title}
              </p>

              <p className="text-[16px] leading-relaxed text-gray-900 max-w-57.5 mx-auto">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
