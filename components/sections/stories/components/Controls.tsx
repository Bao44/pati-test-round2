import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Controls({
  scroll,
  progress,
  canScrollLeft,
  canScrollRight,
}: any) {
  return (
    <>
      {/* CONTROLS*/}
      <div className="flex items-center gap-6 max-w-7xl mx-auto">
        <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#008F5D] transition-all duration-300 ease-out"
            style={{ width: "20%", left: `${progress * 0.8}%` }}
          />
        </div>
        <div className="flex gap-4 shrink-0">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={
              "w-9 h-9 rounded-full flex items-center justify-center bg-white border-transparent text-[#008F5D] cursor-pointer"
            }
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={
              "w-9 h-9 rounded-full flex items-center justify-center bg-white border-transparent text-[#008F5D] cursor-pointer"
            }
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
