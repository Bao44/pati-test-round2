"use client";

import React, { useState, useRef, useMemo } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";
import { REVIEWS_DATA } from "@/lib/data";
import ReviewCard from "./components/ReviewCard";
import { cn } from "@/lib/utils";
import Overview from "./Overview";

const FILTER_OPTIONS = [
  "Most Recent",
  "Highest Rating",
  "Lowest Rating",
  "Only Pictures",
  "Pictures First",
  "Videos First",
  "Most Helpful",
];

const ITEMS_PER_PAGE = 5;

export default function CustomerReviews() {
  const [sortBy, setSortBy] = useState("Most Recent");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const listRef = useRef<HTMLDivElement>(null);

  const processedReviews = useMemo(() => {
    let sorted = [...REVIEWS_DATA];

    switch (sortBy) {
      case "Highest Rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "Lowest Rating":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "Most Recent":
      default:
        break;
    }
    return sorted;
  }, [sortBy]);

  const totalPages = Math.ceil(processedReviews.length / ITEMS_PER_PAGE);
  const currentReviews = processedReviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="py-16 max-sm:py-8 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <Overview />
        {/* DANH SÁCH & FILTER  */}
        <div ref={listRef} className="max-sm:px-3 max-lg:px-19">
          {/* FILTER DROPDOWN */}
          <div className="flex justify-start mb-2 relative z-10 border-b border-sale-bg pb-6">
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-sm font-medium text-sale-light hover:border-[#FF8B8B] transition-colors bg-white cursor-pointer"
              >
                {sortBy}
                <ChevronDown size={16} className={"transition-transform"} />
              </button>

              {/* Dropdown Menu */}
              {isFilterOpen && (
                <div className="absolute left-0 top-full mt-1 w-35 bg-white border border-gray-200 rounded shadow-lg py-1 animate-in fade-in zoom-in-95 duration-200">
                  {FILTER_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsFilterOpen(false);
                        setCurrentPage(1);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-50",
                        sortBy === option
                          ? "text-[#FF8B8B] font-bold"
                          : "text-gray-600"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* REVIEW LIST */}
          <div className="space-y-2 min-h-100">
            {currentReviews.map((review) => (
              <ReviewCard key={review.id} data={review} />
            ))}
            {/* Empty State nếu không có review */}
            {currentReviews.length === 0 && (
              <div className="text-center py-10 text-gray-400">
                No reviews match your filter.
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-3 flex justify-center items-center gap-1 text-sm font-medium text-sale-light select-none mb-7">
              {/* Nút Về đầu */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`p-2 hover:text-[#FF8B8B]/70 transition-colors cursor-pointer 
                  ${currentPage === 1 ? "hidden" : "block"}
                  `}
              >
                <ChevronFirst size={18} strokeWidth={4} />
              </button>

              {/* Nút Trước */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 hover:text-[#FF8B8B]/70 transition-colors cursor-pointer
                   ${currentPage === 1 ? "hidden" : "block"}
                  `}
              >
                <ChevronLeft size={18} strokeWidth={4} />
              </button>

              {/* Số trang */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                if (totalPages > 5 && Math.abs(pageNum - currentPage) > 2)
                  return null;

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={cn(
                      "w-9 h-9 flex items-center justify-center text-[17px]",
                      currentPage === pageNum
                        ? "text-gray-500 font-bold text-2xl"
                        : "border-transparent hover:text-[#FF8B8B]/70  text-[#FF8B8B] cursor-pointer"
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Nút Sau */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 hover:text-[#FF8B8B]/70 transition-colors cursor-pointer
                  ${currentPage === totalPages ? "hidden" : "block"}
                  `}
              >
                <ChevronRight size={18} strokeWidth={4} />
              </button>

              {/* Nút Về cuối */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`p-2 hover:text-[#FF8B8B]/70 transition-colors cursor-pointer
                  ${currentPage === totalPages ? "hidden" : "block"}
                  `}
              >
                <ChevronLast size={18} strokeWidth={4} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
