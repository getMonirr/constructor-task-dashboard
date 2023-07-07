import Image from "next/image";
import dot from "@/assets/profile/threeDot.svg";
import plus from "@/assets/content/add.svg";

const SectionHeading = ({
  bgColor = "bg-green-500",
  name,
}: {
  bgColor?: string;
  name: string;
}) => {
  return (
    <div className="py-5 px-6 bg-white rounded-md flex items-center  justify-between relative mb-[30px]">
      <div
        className={`h-[30px] w-[3px] absolute left-0 rounded-full ${bgColor}`}
      ></div>
      <div className="flex items-center gap-3">
        <h5 className="text-xs font-black text-consGrayBlue50 uppercase w-full">
          {name}
        </h5>
        <p className="border-[2px] rounded-full p-[6px] px-[12px] text-[10px] font-black text-consGrayBlue60">
          5
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={dot.src}
          alt="search"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src={plus.src}
          alt="search"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
