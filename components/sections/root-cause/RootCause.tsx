export default function RootCause() {
  return (
    <section className="bg-bg-cream py-12 lg:py-14 px-10 max-md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center gap-20">
          {/* LEFT TEXT CONTENT*/}
          <div className="w-full lg:w-1/2 space-y-4">
            <img
              width={350}
              height={21}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
              alt="Trustpilot Reviews"
              className="h-auto w-70 sm:w-87.5 max-sm:hidden"
            />

            <img
              width={350}
              height={21}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694"
              alt="Trustpilot Reviews"
              className="h-auto w-70 sm:w-87.5 max-sm:mx-auto hidden max-sm:block"
            />

            {/* Headline */}
            <h2 className="text-[32px] max-sm:text-[26px] text-gray-900">
              Stop Masking Symptoms. Start Restoring Root Cause.
            </h2>

            {/* Body Text */}
            <div className="space-y-2 text-lg text-gray-900 leading-6">
              <p>
                You deserve to feel like yourself again. To wake up without
                puffiness. To see your ankles. To look in the mirror and
                recognize the vibrant woman staring back. To have energy for the
                people you love.
              </p>
              <p>
                You deserve a solution that actually works. Not temporary
                relief. Not symptom masking. Complete lymphatic restoration.
              </p>
            </div>

            <div className="w-full lg:w-1/2 justify-center lg:justify-end max-sm:block hidden">
              <img
                src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
                alt="Before and After Results"
                width={588}
                height={589}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* CTA Button & Guarantee */}
            <div className="pt-2 w-full">
              <button className="w-full sm:w-auto bg-black text-white text-[18px] max-sm:text-[17px] py-4 px-20 max-sm:px-2 max-sm:py-2 rounded shadow-lg hover:bg-black/70 cursor-pointer">
                Try Lymphatic Drainage Risk-Free
              </button>

              <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-base text-gray-700 xl:mx-30">
                <img
                  width={23}
                  height={23}
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
                  alt=""
                  className="shrink-0"
                />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE CONTENT */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-sm:hidden">
            <img
              src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              alt="Before and After Results"
              width={588}
              height={589}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
