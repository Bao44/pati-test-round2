import { INGREDIENTS_GRID } from "@/lib/data";
import IngredientCard from "./components/IngredientCard";

export default function Ingredient() {
  return (
    <div className="mt-8.75 pb-16.5 bg-bg-cream max-sm:mt-10">
      {" "}
      <div className="mx-auto max-w-7xl px-5">
        {/* TITLE SECTION */}
        <div className="text-center mb-12 max-w-3xl mx-auto pt-18  max-sm:pt-10">
          <h2 className="text-2xl md:text-[32px] font-serif text-[#008F5D] mb-4">
            The 8-Ingredient System{" "}
            <span className="text-gray-900">
              That Restores What Hormones Once Maintained
            </span>
          </h2>
          <p className="text-black leading-relaxed max-w-3xl mx-auto text-lg  max-sm:text-[16px]">
            Sculptique is the only formula that addresses ALL 6 mechanisms of
            lymphatic dysfunction simultaneously—not with symbolic doses, but
            with therapeutic amounts based on clinical research.
            <br className="hidden md:block" />
            <span className="block text-gray-900">
              Not just moving fluid temporarily. Not just reducing inflammation.
              <span className="font-bold"> Complete restoration.</span>
            </span>
          </p>
        </div>

        {/* GRID SECTION */}
        <div
          className="
          grid grid-cols-1 md:grid-cols-4 gap-0.5 bg-black border-2 border-black rounded-xl overflow-hidden
        "
        >
          {INGREDIENTS_GRID.map((item) => (
            <IngredientCard key={item.id} data={item} />
          ))}
        </div>

        {/* IMAGE */}
        <div className="mt-10 flex justify-center">
          <img
            width={580}
            height={480}
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
