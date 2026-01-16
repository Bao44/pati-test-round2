import { cn } from "@/lib/utils";

interface PinkCheckProps {
  size?: number;
  color?: string;
  checkColor?: string;
  className?: string;
}

export default function PinkCheck({
  size = 32,
  color = "#fa8a8a",
  checkColor = "#FFFFFF",
  className,
}: PinkCheckProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block shrink-0", className)}
    >
      <rect x="2" y="2" width="20" height="20" fill={color} />
      <path
        d="M8 12.5L10.5 15L16 9.5"
        stroke={checkColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
