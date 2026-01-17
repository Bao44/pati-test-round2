import React from "react";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl flex justify-between py-8 px-5 max-sm:px-3.5 gap-20 max-sm:gap-5 max-sm:flex-col max-xl:px-12.5">
      <HeroLeftSection />
      <HeroRightSection />
    </div>
  );
}
