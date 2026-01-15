"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AccordionItemProps } from "@/types/types";

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "w-full overflow-hidden border transition-all duration-500 ease-in-out rounded-4xl cursor-pointer",
        isOpen
          ? "border-[#008F5D] bg-white"
          : "border-[#d2d2d2] bg-white hover:border-gray-400"
      )}
    >
      {/* HEADER */}
      <button className="flex w-full items-center justify-between pt-3 px-4 pb-2 text-left transition-colors cursor-pointer">
        <span
          className={"text-[16px] font-medium transition-colors duration-300"}
        >
          {title}
        </span>

        {/* ICON */}
        <div
          className={
            "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500"
          }
        >
          <div
            className={cn(
              "transform transition-transform duration-500 ease-in-out",
              isOpen ? "rotate-45" : "rotate-0"
            )}
          >
            <img
              width={24}
              height={24}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
              alt="toggle icon"
              className="object-contain"
            />
          </div>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div
            className={
              "px-4 pb-3 text-gray-700 leading-relaxed border-transparent transition-opacity duration-700 delay-100"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
