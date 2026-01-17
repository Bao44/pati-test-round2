
interface ProductCardProps {
  url: string;
  text: string;
}

export default function ProductCard({ url, text }: ProductCardProps) {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={url}
        alt=""
        width={52}
        height={52}
        className="max-xl:w-9 max-lg:h-9 max-sm:w-7 max-sm:h-7 object-contain"
      />
      <p className="text-sm font-medium text-gray-700">{text}</p>
    </div>
  );
}
