"use client";

import { useState } from "react";
import { Truck, BookOpen, Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductFooter from "./ProductFooter";
import { BUNDLE_OPTIONS } from "@/lib/data";
import { toast } from "react-toastify";

const PerkIcon = ({ type }: { type: "truck" | "book" | "gift" }) => {
  const className = "h-5 w-5 text-[#4FA786] shrink-0";
  if (type === "truck") return <Truck className={className} />;
  if (type === "book") return <BookOpen className={className} />;
  if (type === "gift") return <Gift className={className} />;
  return null;
};

export function BundleSelector() {
  const [selectedId, setSelectedId] = useState<string>("2-get-1");

  const selectedBundle = BUNDLE_OPTIONS.find((b) => b.id === selectedId);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDate = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(deliveryDate);

  return (
    <>
      <div className="w-full mt-3 bg-bg-cream rounded-xl">
        <div className="space-y-6 px-3 pt-3 pb-6">
          <div className="relative flex flex-col gap-3">
            {BUNDLE_OPTIONS.map((bundle: any) => {
              const isSelected = selectedId === bundle.id;

              return (
                <div
                  key={bundle.id}
                  onClick={() => setSelectedId(bundle.id)}
                  className={
                    "cursor-pointer rounded-xl border transition-all duration-200 border-[#008F5D] bg-white"
                  }
                >
                  {/* Badge "New Year's Sale" */}
                  {bundle.isPopular && (
                    <div className="absolute -right-2 top-26 z-10">
                      <div className="relative">
                        <div
                          className={cn(
                            "bg-[#E31E24] text-white font-bold",
                            "flex items-center justify-center gap-1",
                            "text-[10px] leading-tight",

                            "w-20 h-10",
                            "rounded-[50%]",

                            "shadow-md border border-[#E31E24]"
                          )}
                        >
                          <div className="text-center">
                            New Year's <br /> Sale
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="p-4 sm:px-5 sm:py-3">
                    <div className="flex items-center justify-between gap-3">
                      {/* Radio Circle & Title */}
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white transition-colors",
                            isSelected && "border-[#008F5D] bg-[#008F5D]"
                          )}
                        >
                          {isSelected && (
                            <div className="h-2.5 w-2.5 rounded-full bg-white" />
                          )}
                        </div>

                        <div>
                          <p className="text-md font-semibold text-gray-900 leading-tight">
                            {bundle.title}
                          </p>
                          <p className="text-xs text-gray-800">
                            {bundle.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        <div className="text-lg font-semibold text-gray-900">
                          ${bundle.price}
                        </div>
                        <div className="text-sm text-gray-400 line-through font-medium">
                          ${bundle.originalPrice}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Perks Section (Green Box) */}
                  <div
                    className={cn(
                      "flex flex-col gap-1px bg-white border-t rounded-b-xl overflow-hidden",
                      isSelected ? "border-[#008F5D]/20" : "border-gray-100"
                    )}
                  >
                    {bundle.perks.map((perk: any, idx: number) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 px-2 py-1 text-white border-white border-t ${
                          isSelected ? "bg-[#008F5D]" : "bg-[#4FA786]"
                        } first:mt-0`}
                      >
                        <div className="rounded-full border border-white bg-white p-1">
                          <PerkIcon type={perk.icon as any} />
                        </div>
                        <span className="text-xs font-semibold tracking-wide">
                          {perk.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Delivery Info Footer */}
      <div className="flex items-center justify-start gap-2 text-[16px] pt-4 pb-3">
        <Truck size={24} />
        <span className="max-sm:text-[13px]">
          Delivered on{" "}
          <span className="bg-[#008F5D] border border-[#008F5D] text-white px-2 py-1 rounded-sm max-sm:py-0">
            {formattedDate}
          </span>{" "}
          with Express Shipping
        </span>
      </div>
      {/* ADD TO CART */}
      <button onClick={() => toast.success("Added to cart!", {autoClose: 2000})} className="bg-black w-full text-white text-[18px] font-black rounded-lg p-3 hover:bg-black/80 cursor-pointer">
        ADD TO CART
      </button>
      {/* Description add cart */}
      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            className="max-sm:w-4 max-sm:h-4"
            viewBox="0 0 23 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M8 16H3v5" />
          </svg>
          <span className="text-[16px] max-sm:text-[12px] text-black">{selectedBundle?.desc}</span>
        </div>

        {/* Separator */}
        <div className="h-5 w-px bg-gray-700"></div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            className="max-sm:w-4 max-sm:h-4"
            viewBox="0 0 23 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[16px] max-sm:text-[12px] text-black">Stop or Cancel Anytime</span>
        </div>
      </div>
      {/* Product Footer */}
      <ProductFooter />
    </>
  );
}
