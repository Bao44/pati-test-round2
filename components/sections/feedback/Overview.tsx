"use client";

import PinkStar from "@/components/ui/PinkStar";
import { RATING_STATS } from "@/lib/data";
import React, { useState } from "react";
import ReviewForm from "./components/ReviewForm";

export default function Overview() {
  const [isWriting, setIsWriting] = useState(false);

  return (
    <>
      <div>
        <div className="text-center mb-10 max-sm:mb-4 ">
          <img
            className="mx-auto"
            width={200}
            height={19}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
            alt=""
          />
          <h2 className="text-2xl md:text-[32px] text-gray-900 my-4 max-w-2xl mx-auto">
            Real Women, Real Results: 93,000+ Transformations
          </h2>
          <p className="text-black text-lg max-sm:text-base">
            All reviews verified from actual paying customers
          </p>
          <h1 className="mt-8 text-2xl">Customer Reviews</h1>
        </div>

        <div className="border-b border-sale-bg pb-6 mb-6 max-sm:px-7">
          <div className="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-1 justify-center md:justify-start text-[#FF8B8B]">
                <PinkStar size={24} />
                <PinkStar size={24} />
                <PinkStar size={24} />
                <PinkStar size={24} />
                <PinkStar type="half" size={24} />

                <div className="text-md text-gray-600 ">
                  <span>{RATING_STATS.average}</span> out of 5
                </div>
              </div>

              <div className="text-[17px] text-gray-600 flex items-center justify-center md:justify-start gap-1">
                Based on {RATING_STATS.total} reviews
                <img
                  src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full max-w-xs flex-1 space-y-2">
              {RATING_STATS.distribution.map((item) => (
                <div
                  key={item.star}
                  className="flex items-center gap-6 text-xs text-gray-400"
                >
                  <div className="flex gap-0.5 w-18.75 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <PinkStar
                        key={i}
                        size={16}
                        type={i < item.star ? "solid" : "outline"}
                      />
                    ))}
                  </div>

                  {/* THANH BAR */}
                  <div className="flex-1 h-3 bg-gray-100 overflow-hidden">
                    <div
                      className="h-full bg-[#FF8B8B]"
                      style={{ width: item.percent }}
                    />
                  </div>

                  {/* SỐ LƯỢNG */}
                  <div className="w-6 text-left text-gray-600 font-medium">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-auto flex justify-center">
              <button onClick={() => setIsWriting(!isWriting)}>
                {isWriting ? "Cancel review" : "Write a review"}
              </button>
            </div>
          </div>
        </div>

        <ReviewForm isOpen={isWriting} onClose={() => setIsWriting(false)} />
      </div>

      <div className="border-b border-sale-bg pb-7 mb-6 text-center flex flex-col items-center mt-2">
        <img
          width={80}
          height={80}
          src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
          alt=""
        />
        <h1 className="text-[#4c8eda] text-xs font-black">100.0</h1>
      </div>
    </>
  );
}
