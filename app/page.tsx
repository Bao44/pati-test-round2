import Header from "./components/layout/Header";
import HeroLeftSection from "./components/sessions/hero/HeroLeftSection";
import HeroRightSection from "./components/sessions/hero/HeroRightSection";
import NothingHasWorked from "./components/sessions/judge-outer/NothingHasWorked";
import ProductJudgeOuter from "./components/sessions/judge-outer/ProductJudgeOuter";
import PressLogosWrapper from "./components/sessions/logos/PressLogosWrapper";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl flex justify-between py-8 px-5 max-sm:px-3.5 gap-20 max-sm:flex-col max-xl:px-12.5">
        <HeroLeftSection />
        <HeroRightSection />
      </div>

      {/* Logos Wrapper */}
      <PressLogosWrapper />

      {/* Product Judge Outer */}
      <ProductJudgeOuter />

      {/* Nothing Has Worked */}
      <NothingHasWorked />
    </div>
  );
}
