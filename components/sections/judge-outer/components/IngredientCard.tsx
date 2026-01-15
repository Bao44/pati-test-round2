"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { IngredientProps } from "@/types/types";

export default function IngredientCard({ data }: IngredientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center p-6 max-sm:px-3 max-sm:py-4 text-center transition-all duration-200 bg-white hover:bg-gray-50 h-full"
      )}
    >
      {/* 1. Header */}
      <div className="flex flex-col items-center w-full">
        {/* Benefit */}
        <div className="mb-4 max-sm:mb-0 flex items-center justify-center gap-2 text-primary">
          <img
            width={16}
            height={16}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
            alt=""
          />
          <span className="tracking-wide md:text-[16px]">{data.benefit}</span>
        </div>

        <div className="flex flex-col max-sm:flex-row items-center w-full">
          {/* Image */}
          <div className="mb-4 max-sm:mb-0 h-15 w-22 sm:h-20 sm:w-28 relative">
            <img
              src={data.image}
              alt={data.name}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Name & Toggle Icon */}
          <div className="flex w-full items-center justify-between gap-2">
            <div>
              <h3 className="text-[15px] sm:text-[17px] text-black font-bold text-left">
                {data.name} <span>({data.dosage})</span>
              </h3>
            </div>

            {/* mũi tên */}
            <img
              width={24}
              height={12}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Description  */}
      <div
        className={cn(
          "grid w-full transition-[grid-template-rows] duration-700 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-3 text-[15px] leading-5 text-black text-left">
            {data.desc}
            <p>{data.study}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
