export default function NothingCard({
  title,
  desc,
  url,
}: {
  title: string;
  desc: string;
  url: string;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-[#f7f7f7] pb-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <img src={url} alt={title} className="h-full w-full object-cover rounded-t-md" />
        <div className="absolute inset-0 bg-red-900/5 mix-blend-multiply" />
      </div>

      <div className="flex flex-1 flex-col px-6 pt-6 max-sm:px-4">
        {/* Title */}
        <h3 className="mb-6 text-center text-[22px] leading-tight text-gray-900 max-sm:text-xl">
          {title}
        </h3>

        <div className="bg-sale-bg p-3 text-center h-full">
          {/* Header màu đỏ */}
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="font-semibold text-md tracking-wide">
              Why it failed
            </span>
            <img
              src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
              width={20}
              height={20}
              className="shrink-0"
              alt="x"
            />
          </div>

          {/* Description */}
          <p className="text-[17px] leading-5.5 text-black font-bold">{desc}</p>
        </div>
      </div>
    </div>
  );
}
