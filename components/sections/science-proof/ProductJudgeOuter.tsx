import BloatCard from "./components/BloatCard";
import Stats from "./components/Stats";

const BLOAT_SYMPTOMS = [
  {
    url: "https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
    desc: "Your stomach is flat in the morning, but by evening you look six months pregnant.",
  },
  {
    url: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
    desc: 'Your ankles disappear into "kankles" by the end of the day.',
  },
  {
    url: "https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
    desc: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
  },
  {
    url: "https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
    desc: "You feel foggy and exhausted even after a full night's sleep.",
  },
  {
    url: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
    desc: "You wake up stiff and achy, like your body aged overnight.",
  },
];

export default function ProductJudgeOuter() {
  return (
    <div className="pt-18 mx-auto max-w-7xl px-5 max-sm:px-3.5 max-sm:pt-10 mb-18 max-sm:mb-8 max-xl:px-12.5">
      {" "}
      {/* TITLE */}
      <div className="text-center max-w-3xl mx-auto max-lg:px-5 max-md:px-0 mb-8 max-sm:text-xs">
        <h1 className="text-[32px] leading-tight max-sm:text-[25px]">
          Why Your{" "}
          <span className="text-primary">
            Bloating, Brain Fog & Swollen Legs
          </span>{" "}
          Are Actually Connected
        </h1>
        <p className="text-lg mt-4 max-sm:text-[16px]">
          If you're experiencing more than one of these symptoms, your body is
          trying to tell you something:
        </p>
      </div>
      {/* WHY BLOAT CARD*/}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {BLOAT_SYMPTOMS.map((item, index) => (
          <BloatCard key={index} {...item} />
        ))}
      </div>
      {/* image */}
      <div className="">
        <img
          width={920}
          height={195}
          src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
          alt=""
          className="mx-auto w-full max-w-230 h-auto max-sm:hidden"
        />

        <img
          width={360}
          height={145}
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"
          alt=""
          className="mx-auto w-full max-w-230 h-auto max-sm:block hidden mt-6"
        />

        <img
          width={48}
          height={65}
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt=""
          className="mx-auto mt-6 max-sm:w-8.5 max-sm:h-11.5"
        />

        <h1 className="text-[32px] text-center mt-4 mb-3 px-2 max-sm:text-2xl">
          The Connection{" "}
          <span className="text-primary">You've Been Missing</span>
        </h1>

        <img
          width={920}
          height={551}
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
          alt=""
          className="mx-auto w-full max-w-230 h-auto max-sm:hidden"
        />

        <img
          width={360}
          height={373}
          src=" https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
          alt=""
          className="mx-auto w-full max-w-230 h-auto max-sm:block hidden mt-6"
        />

        <img
          width={48}
          height={65}
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt=""
          className="mx-auto mt-6 max-sm:w-8.5 max-sm:h-11.5"
        />

        <h1 className="text-[32px] text-center mt-4 mb-3 px-2 max-sm:text-2xl">
          Your <span className="text-primary">Hidden</span> Drainage System
        </h1>
      </div>
      {/* stats */}
      <Stats />
    </div>
  );
}
