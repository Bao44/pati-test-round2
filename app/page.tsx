import Header from "./components/layout/Header";
import HeroLeftSection from "./components/sessions/hero/HeroLeftSection";
import HeroRightSection from "./components/sessions/hero/HeroRightSection";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex justify-between py-8 px-12.5 max-sm:px-3.5 gap-20 max-sm:flex-col">
        <HeroLeftSection />
        <HeroRightSection />
      </div>

      {/* Main Content */}
    </div>
  );
}
