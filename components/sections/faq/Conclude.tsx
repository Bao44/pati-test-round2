export default function Conclude() {
  return (
    <div className="mx-auto max-w-7xl px-5 max-sm:px-10 max-lg:px-20 max-xl:px-22 flex items-center justify-between mt-33 max-sm:mt-20 max-sm:flex-col max-sm:gap-0 gap-8">
      {/* CỘT TRÁI */}
      <div className="sm:w-2xl max-sm:text-center">
        <h2 className="text-[32px] leading-tight max-sm:text-[24px]">
          We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
          Rid Of Bloating…And Feel Like Themselves Again
        </h2>

        <p className="text-lg py-2">Here's where we're at right now:</p>

        <img
          width={511}
          height={379}
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
          alt=""
          className="w-full my-4 sm:hidden"
        />

        <img
          width={665}
          height={180}
          src="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
          alt=""
          className="max-sm:hidden"
        />

        <img
          width={492}
          height={260}
          src="https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
          alt=""
          className="max-sm:block hidden mx-auto"
        />
      </div>

      {/* CỘT PHẢI */}
      <div>
        <img
          width={511}
          height={379}
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
          alt=""
          className="hidden sm:block"
        />
      </div>
    </div>
  );
}
