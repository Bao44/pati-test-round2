import React from "react";
import { Star, Check, User } from "lucide-react";
import ReviewUserAvatar from "@/components/ui/ReviewUserAvatar";

export default function ReviewCard({ data }: any) {
  return (
    <div className="border-b border-sale-bg py-4">
      {/* Stars & Date Row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex text-[#FF8B8B]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < data.rating ? "#FF8B8B" : "none"}
              strokeWidth={0}
              className={i < data.rating ? "fill-[#FF8B8B]" : "fill-gray-200"}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{data.date}</span>
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-gray-100 py-1 px-1.5">
          <ReviewUserAvatar />
        </div>
        <span className="text-lg text-[#FF8B8B]">
          {data.author}
        </span>
        {data.verified && (
          <div className="flex items-center gap-1 px-1.5 bg-[#FF8B8B] text-white text-[13px]">
            Verified
          </div>
        )}
      </div>

      {/* Content */}
      <p className="text-gray-900 text-[16px] leading-relaxed">
        {data.content}
      </p>
    </div>
  );
}
