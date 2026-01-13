import React from "react";
import ProductCard from "./components/ProductCard";
import CliniciansChoiceBanner from "./components/CliniciansChoiceBanner";
import { BundleSelector } from "./components/BundleSelector";

function HeroRightSection() {
  return (
    <div className="w-full max-w-150">
      {/* Rating */}
      <div className="flex items-center gap-4">
        <img
          width={100}
          height={18}
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
        />
        <p> 4.8/5 Excellent | Based on 2381 Reviews</p>
      </div>

      {/* Title */}
      <h1 className="text-[29px] mt-4">
        New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™
      </h1>

      {/* List Card */}
      <div className="mt-2 space-y-4">
        {ProductCard(
          "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
          "Join over 93 Thousand who say - it WORKS!"
        )}
        {ProductCard(
          "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
          "Restores your body’s natural 24-hour lymphatic cycle"
        )}
        {ProductCard(
          "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
          "Helps reduce fluid retention and the appearance of puffiness and bloating"
        )}
        {ProductCard(
          "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
          "Helps fall asleep faster, stay asleep longer and wake up energized"
        )}
        {ProductCard(
          "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
          "Eliminates joint stiffness, pain, morning creakiness and feel more grounded"
        )}
        {ProductCard(
          "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
          "Boosts energy, mental clarity and emotional balance"
        )}
      </div>

      {/* frontrow sticker */}
      <CliniciansChoiceBanner />

      {/* product selector */}
      <BundleSelector />
    </div>
  );
}

export default HeroRightSection;
