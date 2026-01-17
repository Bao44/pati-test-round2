"use client";

import { HERO_IMAGES, ORIGINAL_IMAGES } from "@/lib/data";
import { X } from "lucide-react";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { toast } from "react-toastify";

export default function HeroLeftSection() {
  const N = ORIGINAL_IMAGES.length;

  const extendedImages = useMemo(() => {
    return [ORIGINAL_IMAGES[N - 1], ...ORIGINAL_IMAGES, ORIGINAL_IMAGES[0]];
  }, [N]);

  const thumbnailList = useMemo(() => {
    return [...ORIGINAL_IMAGES, ...ORIGINAL_IMAGES, ...ORIGINAL_IMAGES];
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  let realIndex = currentIndex - 1;
  if (currentIndex === 0) realIndex = N - 1;
  if (currentIndex === extendedImages.length - 1) realIndex = 0;

  const handleNext = () => {
    if (currentIndex >= extendedImages.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleThumbnailClick = (clickedIdxInFullList: number) => {
    if (isTransitioning) return;
    const originalIndex = clickedIdxInFullList % N;
    setIsTransitioning(true);
    setCurrentIndex(originalIndex + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) setCurrentIndex(extendedImages.length - 2);
    if (currentIndex === extendedImages.length - 1) setCurrentIndex(1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const THUMB_WIDTH = 88;
  const targetThumbIndex = currentIndex + (N - 1);
  const thumbTranslateX = `calc(50% - 40px - ${
    targetThumbIndex * THUMB_WIDTH
  }px)`;

  // Khóa cuộn trang web khi Modal mở
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      {/* WEB */}
      <div className="hidden sm:block w-full max-w-147 max-lg:w-85">
        <div className="relative w-full">
          <img
            className="w-full h-auto rounded-md object-cover"
            src={HERO_IMAGES[0]}
            alt=""
          />

          <div className="absolute top-2 right-2 max-lg:top-4 max-lg:-right-4 w-20 md:w-30">
            <img
              className="max-lg:w-20 max-lg:h-20 w-full h-auto"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
              alt=""
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute flex justify-center items-center bg-[#ffffffd9] text-gray-500 border border-solid rounded-full gap-2
            bottom-8 left-1/2 -translate-x-1/2
            px-6 py-2
            max-xl:w-63.5
            max-lg:w-full max-lg:py-0 max-lg:bottom-4 max-lg:leading-5
            cursor-pointer
            "
          >
            <img
              width={20}
              height={20}
              className="w-4 h-4 md:w-6 md:h-6 shrink-0"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
              alt=""
            />
            <span>Nutritional Information</span>
          </button>
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            width={286}
            height={286}
            className="rounded-md"
            src={HERO_IMAGES[1]}
          />
          <img
            width={286}
            height={286}
            className="rounded-md"
            src={HERO_IMAGES[2]}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <img
            width={185}
            height={185}
            className="rounded-md"
            src={HERO_IMAGES[3]}
          />
          <img
            width={185}
            height={185}
            className="rounded-md"
            src={HERO_IMAGES[4]}
          />
          <img
            width={185}
            height={185}
            className="rounded-md"
            src={HERO_IMAGES[5]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            width={286}
            height={307}
            className="rounded-md"
            src={HERO_IMAGES[6]}
          />
          <img
            width={286}
            height={307}
            className="rounded-md"
            src={HERO_IMAGES[7]}
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="block sm:hidden w-full select-none">
        <div
          className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden group touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex w-full h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? "transform 500ms ease-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((img, index) => (
              <div key={index} className="w-full h-full shrink-0">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>

          {realIndex === 0 && (
            <div>
              <div className="absolute top-2 right-2 w-20 z-10 pointer-events-none">
                <img
                  className="w-full h-auto"
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                  alt="Sale"
                />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#ffffffd9] backdrop-blur-sm border border-gray-900 rounded-full 
            px-6 py-2 text-md text-gray-600
            w-63.75
            "
              >
                <img
                  width={24}
                  height={24}
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                  alt=""
                />
                Nutritional Information
              </button>
            </div>
          )}

          <img
            onClick={handlePrev}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
            alt=""
            className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8"
          />

          <img
            onClick={handleNext}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"
            alt=""
            className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8"
          />
        </div>

        <div
          className="w-full mt-3 overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-2 will-change-transform"
            style={{
              transform: `translateX(${thumbTranslateX})`,
              transition: isTransitioning ? "transform 500ms ease-out" : "none",
            }}
          >
            {thumbnailList.map((img, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={
                    "relative shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all duration-300"
                  }
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black/70 flex items-center justify-center p-4">
          {/* Hộp nội dung */}
          <div className="bg-white rounded-xl w-full max-w-115 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
            {/* Title & Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="text-[27px] max-sm:text-xl text-gray-900 text-center w-full">
                Nutritional Information
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full border border-red-500 cursor-pointer"
              >
                <X size={15} className="text-red-500" />
              </button>
            </div>

            {/* Image */}
            <div className="px-5">
              <img
                src="https://trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
                alt="Supplement Facts"
                className="w-full h-auto"
              />
            </div>

            {/* CTA & Badges */}
            <div className="p-5">
              <button
                onClick={() =>
                  toast.success("Handle Clicked", { autoClose: 2000 })
                }
                className="w-full bg-black text-white text-[18px] py-5 rounded-lg max-sm:px-3"
              >
                Try Lymphatic Drainage Risk-Free
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-1 mt-4 text-[11px] max-sm:grid-cols-1 sm:text-xs text-gray-700">
                <div className="flex items-center gap-1.5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Made & produced in the USA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>100% Natural Ingredients</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>60-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Click ra ngoài để đóng modal */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </>
  );
}
