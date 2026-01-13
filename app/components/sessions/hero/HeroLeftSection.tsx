import React from "react";

function HeroLeftSection() {
  return (
    <>
      {/* WEB */}
      <div className="w-full max-w-147 max-lg:w-85 max-lg:px-8 max-sm:hidden">
        {/* Main image */}
        <div className="relative w-full">
          <img
            className="w-full h-auto rounded-md object-cover"
            src="https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674"
            alt=""
          />

          <div className="absolute top-2 right-2 md:top-4 md:right-4 w-20 md:w-30">
            <img
              className="w-full h-auto"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
              alt=""
            />
          </div>

          <button
            className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-1/2 md:-translate-x-1/2 
                           flex items-center gap-2 md:gap-3 
                           bg-[#ffffffd9] border border-solid rounded-full 
                           px-4 py-1.5 md:px-7 md:py-2 
                           text-xs md:text-[16px] text-gray-600 font-medium 
                           cursor-pointer whitespace-nowrap"
          >
            <img
              width={20}
              height={20}
              className="w-4 h-4 md:w-6 md:h-6"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
              alt=""
            />
            Nutritional Information
          </button>
        </div>

        {/* image other */}
        <>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img
              width={286}
              height={286}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"
            />
            <img
              width={286}
              height={286}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <img
              width={185}
              height={185}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"
            />
            <img
              width={185}
              height={185}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"
            />
            <img
              width={185}
              height={185}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img
              width={286}
              height={307}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"
            />
            <img
              width={286}
              height={307}
              className="rounded-md"
              src="https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"
            />
          </div>
        </>
      </div>
      {/* MOBILE */}
      <div className="w-full px-4 max-sm:block sm:hidden">
        <div className="">okk</div>
      </div>
    </>
  );
}

export default HeroLeftSection;
