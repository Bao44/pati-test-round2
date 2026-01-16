"use client";

import PinkStar from "@/components/ui/PinkStar";
import { RATING_STATS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Camera, Check, ChevronDown, Star, Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const NAME_FORMATS = ["John Smith", "John S.", "John", "J.S."];

export default function Overview() {
  const [isWriting, setIsWriting] = useState(false);
  const [rating, setRating] = useState(5);
  const formRef = useRef<HTMLDivElement>(null);
  const [isNameDropdownOpen, setIsNameDropdownOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("John Smith");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsNameDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNameSelect = (name: string) => {
    setSelectedName(name);
    setIsNameDropdownOpen(false);
  };

  const handleOpenForm = () => {
    setIsWriting(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <>
      <div className="max-sm:px-7">
        <div className="text-center mb-10 max-sm:mb-4 ">
          <img
            className="mx-auto"
            width={200}
            height={19}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
            alt=""
          />
          <h2 className="text-2xl md:text-[32px] font-serif text-gray-900 my-4 max-w-2xl mx-auto">
            Real Women, Real Results: 93,000+ Transformations
          </h2>
          <p className="text-black text-lg max-sm:text-base">
            All reviews verified from actual paying customers
          </p>
          <h1 className="mt-8 text-2xl">Customer Reviews</h1>
        </div>

        <div className="border-b border-sale-bg pb-6 mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-1 justify-center md:justify-start text-[#FF8B8B]">
                <PinkStar size={24} />
                <PinkStar size={24} />
                <PinkStar size={24} />
                <PinkStar size={24} />
                <PinkStar type="half" size={24} />

                <div className="text-md text-black ">
                  <span>{RATING_STATS.average}</span> out of 5
                </div>
              </div>

              <div className="text-[17px] text-gray-900 flex items-center justify-center md:justify-start gap-1">
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
              {!isWriting ? (
                <button
                  onClick={handleOpenForm}
                  className="w-auto min-w-40 max-sm:min-w-80 px-8 py-2 bg-[#FF8B8B] text-white font-black hover:bg-[#ff7676]/70 cursor-pointer"
                >
                  Write a review
                </button>
              ) : (
                <button
                  onClick={() => setIsWriting(false)}
                  className="w-auto min-w-40 max-sm:min-w-80 px-8.5 py-2 bg-[#FF8B8B] text-white font-black hover:bg-[#ff7676]/70 cursor-pointer"
                >
                  Cancel review
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          ref={formRef}
          className={cn(
            "grid transition-[grid-template-rows] duration-500 ease-in-out border-b border-sale-bg",
            isWriting
              ? "grid-rows-[1fr] pb-10 mb-10"
              : "grid-rows-[0fr] border-none"
          )}
        >
          <div className="overflow-hidden">
            <p className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
              Write your review
            </p>

            {/* Rating Select */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="text-lg text-gray-600">Rating</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    type="button"
                  >
                    <Star
                      size={28}
                      className={cn(
                        "transition-colors cursor-pointer",
                        star <= rating
                          ? "fill-[#FF8B8B] text-[#FF8B8B]"
                          : "fill-gray-200 text-gray-200"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-lg text-gray-600 cursor-pointer">
                    Review content
                  </p>
                  <span className="text-gray-400 text-sm">(5000)</span>
                </div>

                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#FF8B8B] focus:ring-1 focus:ring-[#FF8B8B]"
                  placeholder="Start writing here..."
                />
              </div>

              {/* Upload Photo */}
              <div className="space-y-2">
                <span className="block text-lg text-gray-700 text-center">
                  Picture/Video (optional)
                </span>

                <label className="w-35 mx-auto flex cursor-pointer items-center justify-center border border-gray-300 py-8 hover:bg-gray-200/30">
                  <Upload
                    size={70}
                    className=" text-gray-500"
                    strokeWidth={2}
                  />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg, image/gif, video/mp4, video/x-m4v"
                    multiple
                  />
                </label>
              </div>

              <div className="mx-auto max-w-xl space-y-6 text-center pt-5">
                <div className="space-y-2 relative">
                  <label className="block text-lg text-gray-700">
                    Display name (displayed publicly like{" "}
                    <div
                      ref={dropdownRef}
                      className="relative inline-block text-left"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setIsNameDropdownOpen(!isNameDropdownOpen)
                        }
                        className="inline-flex cursor-pointer items-center font-medium text-[#FF8B8B] hover:underline focus:outline-none"
                      >
                        {selectedName}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "ml-0.5 transition-transform duration-200",
                            isNameDropdownOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {/* Menu Dropdown */}
                      {isNameDropdownOpen && (
                        <div className="absolute left-0 top-full mt-1 w-40 origin-top-left border border-gray-200 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-in fade-in zoom-in-95 duration-100">
                          <div className="py-1">
                            {NAME_FORMATS.map((name) => (
                              <button
                                key={name}
                                onClick={() => handleNameSelect(name)}
                                className={cn(
                                  "group flex w-full items-center justify-between rounded-sm px-4 py-2 text-sm text-left hover:bg-red-50 hover:text-[#FF8B8B]",
                                  selectedName === name
                                    ? "font-bold text-[#FF8B8B] bg-red-50"
                                    : "text-gray-700"
                                )}
                              >
                                {name}
                                {selectedName === name && <Check size={14} />}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    )
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-300 py-2 px-4 text-sm focus:border-[#FF8B8B] focus:outline-none focus:ring-1 focus:ring-[#FF8B8B]"
                    placeholder="Display name"
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="space-y-2">
                  <label className="block text-lg text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 py-2 px-4 text-sm focus:border-[#FF8B8B] focus:outline-none focus:ring-1 focus:ring-[#FF8B8B]"
                    placeholder="Your email address"
                  />
                </div>

                {/* ĐIỀU KHOẢN */}
                <div>
                  <p className="text-[17px] max-sm:text-[15px] leading-relaxed text-gray-800">
                    How we use your data: We'll only contact you about the
                    review you left, and only if necessary. By submitting your
                    review, you agree to Judge.me's{" "}
                    <a href="#" className="text-blue-600 underline">
                      terms
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 underline">
                      privacy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 underline">
                      content
                    </a>{" "}
                    policies.
                  </p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mx-auto flex max-w-md gap-4 pt-2 max-sm:flex-col max-sm:gap-0 max-sm:max-w-43.75">
                  <button
                    onClick={() => setIsWriting(false)}
                    className="flex-1 cursor-pointer border-2 border-[#FF8B8B] bg-white py-1.5 text-lg font-bold text-[#FF8B8B] transition-colors hover:bg-red-50"
                  >
                    Cancel review
                  </button>
                  <button className="flex-1 cursor-pointer bg-[#FF8B8B] py-1.5 text-lg font-bold text-white shadow-sm transition-colors hover:bg-[#ff7676]">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
