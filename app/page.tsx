import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/hero/HeroSection";
import Ingredient from "@/components/sections/judge-outer/Ingredient";
import NothingHasWorked from "@/components/sections/judge-outer/NothingHasWorked";
import ProductJudgeOuter from "@/components/sections/judge-outer/ProductJudgeOuter";
import PressLogosWrapper from "@/components/sections/logos/PressLogosWrapper";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Logos Wrapper */}
      <PressLogosWrapper />

      {/* Product Judge Outer */}
      <ProductJudgeOuter />

      {/* Nothing Has Worked */}
      <NothingHasWorked />

      {/* Ingredient  */}
      <Ingredient />
    </div>
  );
}
