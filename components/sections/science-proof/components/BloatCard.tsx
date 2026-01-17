export default function BloatCard({
  url,
  desc,
}: {
  url: string;
  desc: string;
}) {
  return (
    <div className="flex w-full flex-row items-stretch md:h-full sm:flex-col">
      <div className="relative max-sm:w-1/2 shrink-0 md:w-full">
        <img
          src={url}
          alt=""
          className="h-full w-full object-cover rounded-t-lg md:h-auto max-sm:rounded-r-none md:rounded-t-lg"
        />
      </div>

      <div className="flex flex-1 items-start bg-[#f7f7f7] rounded-r-lg md:mt-2 md:w-full md:rounded-r-none md:rounded-b-lg md:justify-center">
        <p className="p-4 text-center text-[16px] font-medium text-black md:text-center md:text-[16px] ">
          {desc}
        </p>
      </div>
    </div>
  );
}
