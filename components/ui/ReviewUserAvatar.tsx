import { cn } from "@/lib/utils";
import PinkCheck from "./PinkCheck";
import { User } from "lucide-react";

interface ReviewUserAvatarProps {
  size?: number;
  showCheck?: boolean;
  className?: string;
}

export default function ReviewUserAvatar({
  size = 25,
  showCheck = true,
  className,
}: ReviewUserAvatarProps) {
  const checkSize = Math.round(size * 0.6);

  return (
    <div
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <User
        size={size}
        className="absolute top-0 left-0 h-full w-full text-sale-light"
      />

      {showCheck && (
        <div className="absolute -bottom-3 -right-2 translate-x-[10%] translate-y-[10%]">
          <div className=" p-[1.5px]">
            <PinkCheck size={checkSize} />
          </div>
        </div>
      )}
    </div>
  );
}
