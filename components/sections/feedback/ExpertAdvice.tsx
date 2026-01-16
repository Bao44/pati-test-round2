export default function ExpertAdvice() {
  return (
    <div className="bg-white max-sm:bg-gray-100 py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-5">
        {/* CARD CONTAINER */}
        <div className="flex flex-col sm:flex-row overflow-hidden rounded-xl bg-gray-100 max-sm:bg-white">
          {/* LEFT TEXT CONTENT */}
          <div className="flex flex-1 flex-col justify-center p-8 lg:w-1/2 lg:pr-8">
            {/* Date */}
            <p className="mb-2 text-md text-gray-500">July 4th, 2025</p>

            {/* Headline */}
            <h3 className="mb-6 text-gray-900 text-[33px] leading-tight">
              Expert Advice from Dr. Emily Chen of a Premier New York Skin
              Clinic
            </h3>

            {/* Quote / Body Text */}
            <div className="space-y-4 text-[19px] leading-6 text-gray-900">
              <p>
                “Your nutrition plays a powerful role in your appearance. If
                your body is missing key vitamins and nutrients, it can’t
                process fat and upkeep healthy connective tissue, which is why
                unprocessed fat flows up and starts pushing up against your
                skin, forming bumps you know as cellulite.
              </p>
              <p>
                SmoothSkin by Sculptique™ contains ingredients that are
                scientifically proven to enhance microcirculation, boost
                lymphatic drainage, and reduce inflammation, which restores your
                tissue and breaks down the fat cells in your skin.”
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button className="max-w-full rounded-sm bg-black px-24 max-sm:px-5 py-4 text-[18px] max-sm:text-sm text-white md:w-auto w-full cursor-pointer hover:bg-black/80 transition ">
                Try Lymphatic Drainage Risk-Free
              </button>
            </div>

            {/* Guarantee Footer */}
            <div className="mt-4 flex items-center justify-center md:justify-center gap-2 text-md text-gray-900">
              <img
                width={24}
                height={24}
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
                alt="Guarantee"
              />
              <span>60-Day Money-Back Guarantee</span>
            </div>
          </div>

          <div className="relative sm:w-1/2 w-full max-sm:h-122.25 sm:h-auto max-sm:order-first">
            <img
              width={620}
              height={552}
              src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
              alt="Dr. Emily Chen"
              className="absolute h-full inset-0 object-cover object-top rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
