import Header from "@/components/layout/Header";
import CustomerReviews from "@/components/sections/feedback/CustomerReviews";
import ExpertAdvice from "@/components/sections/feedback/ExpertAdvice";
import GuaranteeFeatures from "@/components/sections/feedback/GuaranteeFeatures";
import HeroSection from "@/components/sections/hero/HeroSection";
import Ingredient from "@/components/sections/judge-outer/Ingredient";
import NothingHasWorked from "@/components/sections/judge-outer/NothingHasWorked";
import ProductJudgeOuter from "@/components/sections/judge-outer/ProductJudgeOuter";
import PressLogosWrapper from "@/components/sections/logos/PressLogosWrapper";
import FAQ from "@/components/sections/questions/FAQ";
import RootCause from "@/components/sections/root-cause/RootCause";
import StoriesCarousel from "@/components/sections/stories/StoriesCarousel";

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

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Guarantee Features */}
      <GuaranteeFeatures />

      {/* ExpertAdvice */}
      <ExpertAdvice />

      {/* Stories Carousel */}
      <StoriesCarousel />

      {/* Questions Section */}
      <FAQ />

      {/* RootCause */}
      <RootCause />
    </div>
  );
}
