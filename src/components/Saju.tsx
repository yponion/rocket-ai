import { cn } from "@/lib/utils";
import Image from "next/image";
import { sajuData } from "@/constants/saju";
import { SajuCellData } from "@/types/saju";

export default function Saju() {
  return (
    <div className="absolute top-[66.31%] w-full px-[3.2%] pb-[3.2%]">
      <div className="bg-[#F5F3EC] border-[3px] border-[#1B2F49] relative flex flex-col gap-[26px] items-center shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="absolute top-2 w-full h-[1px] bg-[#2B557E]" />
        <div className="absolute bottom-2 w-full h-[1px] bg-[#2B557E]" />
        <div className="absolute left-2 h-full w-[1px] bg-[#2B557E]" />
        <div className="absolute right-2 h-full w-[1px] bg-[#2B557E]" />
        <Image
          src="/images/saju-deco-left.png"
          alt="saju-table-deco-left"
          width={56}
          height={38}
          className="absolute top-[45px] left-[9px]"
        />
        <Image
          src="/images/saju-deco-right.png"
          alt="saju-table-deco-right"
          width={56}
          height={38}
          className="absolute top-[26px] right-[9px]"
        />
        <div className="mt-10 flex flex-col gap-3 items-center justify-center">
          <h1 className="text-[4.27vw] xs:text-[19px] text-[#424242]">김로켓님의 사주</h1>
          <div className="text-[5.33vw] xs:text-2xl text-[#424242] font-bold">1980년 8월27일 08:10</div>
        </div>
        <div className="mb-8 px-5 w-full">
          <SajuTable />
        </div>
      </div>
    </div>
  );
}

const SajuTable = () => {
  return (
    <div className="text-black">
      {sajuData.map((row, rowIndex) => (
        <div
          className={cn(
            "w-full grid grid-cols-5 border-b border-black",
            rowIndex === 2 && "border-b-[0.5px] border-[#9B9B9B]"
          )}
        >
          {row.map((cell, colIndex) => (
            <SajuCell key={`${rowIndex}-${colIndex}`} cellData={cell} rowIndex={rowIndex} colIndex={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

const SajuCell = ({ cellData, rowIndex, colIndex }: { cellData: SajuCellData; rowIndex: number; colIndex: number }) => {
  return (
    <div
      className={cn(
        "border-r-[0.5px] border-[#8A8A8A] first:border-r last:border-r first:border-black last:border-black flex items-center justify-center bg-white  first:bg-transparent",
        rowIndex === 0 && "bg-transparent",
        rowIndex === -1 && "border-none"
      )}
    >
      {parseData(cellData, colIndex === 0)}
    </div>
  );
};

const parseData = (data: SajuCellData, isFirst: boolean) => {
  if (data === undefined) return <p className="text-[2.6vw] font-bold xs:text-xs">{`(없음)`}</p>;
  if (typeof data === "string")
    return <p className="text-[5.58vw] xs:text-[25px] font-zen-antique pt-[5px] pb-[9px]">{data}</p>;
  if ("chinese" in data) {
    const isLong = data.chinese.length >= 4;
    return (
      <div className="py-[7px] text-center">
        <p
          className={cn(
            "font-zen-antique",
            isLong
              ? "text-[2.6vw] xs:text-[11.67px]"
              : isFirst
              ? "text-[3.2vw] xs:text-[14.33px]"
              : "text-[3.9vw] xs:text-[17.47px]"
          )}
        >
          {data.chinese}
        </p>
        <p
          className={cn(
            "text-[2.6vw] font-bold xs:text-[9.36px]",
            isFirst && "text-[2.09vw] font-bold xs:text-[9.36px]"
          )}
        >
          ({data.mean})
        </p>
      </div>
    );
  }
  if ("chinese1" in data) {
    const { chinese1, chinese2, mean, bg, fg, border } = data;
    return (
      <div
        className={cn(
          "relative rounded-[3.35vw] w-[14.79vw] h-[14.79vw] xs:w-[66.26px] xs:h-[66.26px] my-[6px] flex items-center justify-center",
          bg,
          fg,
          border,
          border && "border"
        )}
      >
        <small className="absolute top-[1.07vw] text-[2.03vw] xs:text-[9.1px]">{mean}</small>
        <p className="text-[6.7vw] font-zen-antique xs:text-[30.06px]">{chinese1}</p>
        <small className="absolute bottom-[0.5vw] text-[2.23vw] font-zen-maru-gothic xs:text-[10.01px]">
          {chinese2}
        </small>
      </div>
    );
  }
  if (Array.isArray(data))
    return (
      <div className="">
        {data.map((item, index) => (
          <SajuCell key={index} cellData={item} rowIndex={-1} colIndex={-1} />
        ))}
      </div>
    );
  return null;
};
