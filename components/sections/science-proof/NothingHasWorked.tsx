"use client";

import NothingCard from "./components/NothingCard";
import { toast } from "react-toastify";

const FAILED_METHODS = [
  {
    title: "You cut out gluten, dairy, sugar. You ate clean for month.",
    desc: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    url: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
  },
  {
    title: "You tried viral lymphatic drops from TikTok.",
    desc: "They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
    url: "http://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
  },
  {
    title: "You got lymphatic massage or bought compression socks.",
    desc: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    url: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
  },
];

export default function NothingHasWorked() {
  return (
    <div className="mt-14 pb-18.75 bg-bg-cream max-sm:mt-2">
      <div className="mx-auto max-w-7xl px-5">
        {/* Title Section */}
        <h1 className="mb-10 text-center text-2xl md:text-4xl">
          Why Nothing Has <span className="text-primary">Worked</span>
        </h1>

        {/* GRID CARDS */}
        <div className="relative grid grid-cols-1 gap-4 md:gap-4 sm:grid-cols-3">
          {FAILED_METHODS.map((item, index) => (
            <NothingCard key={index} {...item} />
          ))}
        </div>

        {/*THE MISSING PIECE BOX */}
        <div className="mx-auto max-w-4xl">
          <img
            width={920}
            height={218}
            src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
            alt=""
            className="max-sm:hidden"
          />

          <img
            width={920}
            height={218}
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
            alt=""
            className="max-sm:block hidden w-full h-auto mt-6"
          />
        </div>

        {/* CTA SECTION */}
        <div className="mx-auto mt-5 max-w-md space-y-4 text-center">
          <button
            onClick={() => toast.success("Handle Clicked", { autoClose: 2000 })}
            className="w-full rounded-sm bg-black py-4 text-[19px] max-sm:text-[17px] font-semibold text-white cursor-pointer hover:bg-black/70 transition"
          >
            Try Lymphatic Drainage Risk-Free
          </button>

          <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-600">
            <img
              width={24}
              height={24}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
              alt="Guarantee"
            />
            <span className="font-semibold text-black text-[17px]">
              60 day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
