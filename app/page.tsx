import Header from "./components/layout/Header";
import HeroLeftSection from "./components/sessions/hero/HeroLeftSection";
import HeroRightSection from "./components/sessions/hero/HeroRightSection";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex justify-between py-8 gap-6 max-sm:flex-col">
        <HeroLeftSection />
        <HeroRightSection />
      </div>

      {/* Main Content */}
    </div>
  );
}
