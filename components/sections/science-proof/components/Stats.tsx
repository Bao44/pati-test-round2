export default function Stats() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="mt-10 grid grid-cols-1 items-center gap-25 max-sm:gap-6 md:grid-cols-2 text-[19px] max-sm:text-[17px] leading-relaxed">
        {/* TEXT CONTENT */}
        <div className="w-full">
          <p>
            Your lymphatic system is your body's internal cleaning crew—a
            network of vessels that processes{" "}
            <b>
              3-4 liters of cellular waste and excess fluid every single day.
            </b>
          </p>
          <p>When it's working properly, you don't even know it exists.</p>

          <ul className="text-[#0c7c00] font-semibold text-lg">
            <li className="flex items-center gap-4">
              <img
                width={20}
                height={20}
                src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                alt=""
                className="shrink-0"
              />
              Waste gets drained away
            </li>
            <li className="flex items-center gap-4">
              <img
                width={20}
                height={20}
                src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                alt=""
                className="shrink-0"
              />
              Fluid stays balanced.
            </li>
            <li className="flex items-center gap-4">
              <img
                width={20}
                height={20}
                src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                alt=""
                className="shrink-0"
              />
              Your body feels light and energized.
            </li>
          </ul>

          <div className="bg-sale-bg rounded-lg my-6 px-4 py-3">
            <p>
              But after age 35, declining estrogen hijacks this system's ability
              to function.
            </p>
          </div>

          <ul className="text-sale-dark font-semibold text-lg">
            {[
              "Vessel pumping weakens.",
              "One-way valves fail.",
              "Protein clogs form.",
              "Vessel walls become leaky.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <img
                  width={20}
                  height={20}
                  src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                  alt=""
                  className="shrink-0"
                />
                {text}
              </li>
            ))}
          </ul>

          <p className="mt-4">
            Instead of processing and removing waste, it backs up in your
            tissues.
          </p>
        </div>

        {/* IMAGE CONTENT */}
        <div className="w-full flex justify-center max-md:order-first">
          <img
            width={510}
            height={428}
            src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
            alt="Lymphatic System Chart"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mt-16 max-sm:mt-8 grid grid-cols-1 items-center gap-25 max-sm:gap-6 md:grid-cols-2 text-[19px] max-sm:text-[17px] leading-relaxed">
        {/* IMAGE CONTENT */}
        <div className="w-full flex justify-center lg:justify-start">
          <img
            width={570}
            height={380}
            src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
            alt="Skin Diagram"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full leading-6">
          <b className="block mb-1">
            And it accumulates. Day after day. Week after week.
          </b>
          <p>
            That gallon of fluid your body should be draining every 24 hours?
            It's pooling in your stomach, your legs, your face—anywhere gravity
            and tissue structure allow it to settle.
          </p>

          <div className="bg-sale-bg rounded-xl my-5 p-4">
            <p className="mb-2">
              The metabolic waste your cells produce overnight? It's still
              sitting there at noon. At dinner. While you're trying to fall
              asleep.
            </p>
            <ul className="text-sale-dark text-lg mt-2">
              {[
                "That's why you're bloated.",
                "That's why your ankles swell.",
                "That's why you see cellulite.",
                "That's why you feel exhausted and foggy.",
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <img
                    width={23}
                    height={23}
                    src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                    alt=""
                    className="shrink-0"
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <b className="block mb-1">
            Your cells are literally sitting in their own waste—and your body
            can't flush it out.
          </b>
          <p>
            The longer this goes on, the worse it gets. More congestion. More
            inflammation. More pressure on an already compromised system.
          </p>
        </div>
      </div>
    </>
  );
}
