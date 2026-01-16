"use client";

import React, { useRef, useState } from "react";
import Controls from "./components/Controls";
import ScrollVideo from "./components/ScrollVideo";

export default function StoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const dragStartX = useRef(0);

  const [playingId, setPlayingId] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  // LOGIC PLAY/PAUSE
  const togglePlay = (id: number, e: React.MouseEvent) => {
    const moveDistance = Math.abs(e.pageX - dragStartX.current);

    if (moveDistance > 5) {
      return;
    }

    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    dragStartX.current = e.pageX;

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      const currentProgress =
        totalScrollable > 0 ? (scrollLeft / totalScrollable) * 100 : 0;
      setProgress(currentProgress);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < totalScrollable - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement;
      if (firstCard) {
        const itemWidth = firstCard.offsetWidth + 16;
        container.scrollBy({
          left: direction === "left" ? -itemWidth : itemWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="bg-bg-cream py-14 max-sm:py-10 select-none">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <img
            width={300}
            height={44}
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="text-center mb-5">
          <h2 className="font-serif text-2xl md:text-[33px] text-gray-900 mt-4">
            See The Stories of Sculptique™ Women Firsthand
          </h2>
        </div>

        {/* CONTAINER SCROLL */}
        <ScrollVideo
          scrollRef={scrollRef}
          videoRefs={videoRefs}
          playingId={playingId}
          togglePlay={togglePlay}
          isDragging={isDragging}
          handleMouseDown={handleMouseDown}
          handleMouseLeave={handleMouseLeave}
          handleMouseUp={handleMouseUp}
          handleMouseMove={handleMouseMove}
          handleScroll={handleScroll}
        />

        {/* CONTROLS */}
        <Controls
          scroll={scroll}
          progress={progress}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
        />

        <div className="mt-10 flex flex-col items-center">
          <button className="w-full md:w-auto bg-black text-white text-[18px] max-sm:text-[17px] py-4 px-20 max-sm:px-5 max-sm:py-3 rounded shadow-lg hover:bg-gray-800 transition-transform hover:scale-105">
            Try Lymphatic Drainage Risk-Free
          </button>

          <div className="mt-4 flex items-center gap-2 text-md text-gray-800 font-medium">
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
    </section>
  );
}
