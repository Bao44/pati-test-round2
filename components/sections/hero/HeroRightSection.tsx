import React from "react";
import ProductCard from "./components/ProductCard";
import CliniciansChoiceBanner from "./components/CliniciansChoiceBanner";
import { BundleSelector } from "./components/BundleSelector";
import { PRODUCT_FEATURES } from "@/lib/data";

function HeroRightSection() {
  return (
    <div className="w-full max-w-150">
      {/* Rating */}
      <div className="flex items-center gap-4">
        <img
          width={100}
          height={18}
          className="max-sm:w-15 max-sm:h-2.75"
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
        />
        <p className="max-sm:text-[13px]">
          {" "}
          4.8/5 Excellent | Based on 2381 Reviews
        </p>
      </div>

      {/* Title */}
      <h1 className="text-[29px] mt-4 max-sm:text-[25px]">
        New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™
      </h1>

      {/* List Card */}
      <div className="mt-2 space-y-4">
        {PRODUCT_FEATURES.map((feature, index) => (
          <ProductCard key={index} url={feature.icon} text={feature.text} />
        ))}
      </div>

      {/* frontrow sticker */}
      <CliniciansChoiceBanner />

      {/* product selector */}
      <BundleSelector />
    </div>
  );
}

export default HeroRightSection;
