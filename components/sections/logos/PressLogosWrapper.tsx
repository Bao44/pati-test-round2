import { LOGOS } from "@/lib/data";

export default function PressLogosWrapper() {
  return (
    <div className="w-full bg-bg-cream py-4 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-center text-2xl max-sm:text-lg max-lg:text-xl text-gray-900 mb-6 max-sm:mb-4 font-medium">
          As Seen In
        </h2>

        {/* Scroll Container */}
        <div className="relative w-full ">
          <div className="flex w-max items-center">
            <div className="flex animate-infinite-scroll items-center gap-12 pr-12 md:gap-24 md:pr-24">
              {LOGOS.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt="Press logo"
                  className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>

            <div
              className="flex animate-infinite-scroll items-center gap-12 pr-12 md:gap-24 md:pr-24"
              aria-hidden="true"
            >
              {LOGOS.map((logo) => (
                <img
                  key={`${logo.id}-duplicate`}
                  src={logo.src}
                  alt="Press logo"
                  className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
