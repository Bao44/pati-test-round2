"use client";

import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import Conclude from "./Conclude";

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([1]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-18 max-sm:py-14 bg-white">
      <div className="mx-auto max-w-4xl px-8 max-sm:px-4">
        {/* HEADER */}
        <h2 className="mb-4 max-sm:mb-2 text-center font-serif text-gray-900 text-[33px] max-sm:text-2xl max-sm:px-4">
          Frequently Asked Questions
        </h2>

        <div className="rounded-xl bg-linear-to-b from-white to-bg-cream p-2 md:p-8">
          {FAQS.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                onClick={() => toggleFAQ(index)}
                key={index}
                className="border-b border-white"
              >
                {/* QUESTION BUTTON */}
                <button className="flex w-full items-center justify-between py-5 px-6 max-sm:py-4 max-sm:px-2 cursor-pointer">
                  <span className="text-gray-900 text-[18px] text-start">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-black">
                    {isOpen ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </span>
                </button>

                {/* ANSWER CONTENT */}
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out cursor-pointer",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-[17px] leading-5.5 text-black px-6 max-sm:px-2 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-6 flex flex-col items-center">
          <button className="w-full md:w-auto bg-black text-white text-[18px] py-4 px-23 max-sm:px-2 max-sm:text-[16px] rounded hover:bg-black/70 cursor-pointer">
            Try Lymphatic Drainage Risk-Free
          </button>

          <div className="mt-4 flex items-center gap-2 text-md text-gray-800">
            <img
              width={20}
              height={20}
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
              alt=""
            />
            <span>60-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
      <Conclude />
    </section>
  );
}
