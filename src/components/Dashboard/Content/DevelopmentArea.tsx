import add from "@/assets/content/add.svg";
import messenger from "@/assets/sidebar/messenger.svg";
import arrow from "@/assets/headers/rightArrow.svg";
import button from "@/assets/content/play.svg";
import attachment from "@/assets/task/attachment.svg";
import insert_comment from "@/assets/task/insert_comment.svg";
import subdirectory_arrow_right from "@/assets/task/subdirectory_arrow_right.svg";
import person from "@/assets/task/person.svg";
import flag from "@/assets/task/flag.svg";
import cross from "@/assets/headers/cross.svg";
import cloud from "@/assets/profile/cloud.svg";
import Image from "next/image";

const DevelopmentArea = () => {
  return (
    <div className="absolute bg-white right-[50px] bottom-9 xl:w-[400px]  2xl:w-[450px]  rounded-md shadow-md hidden lg:block">
      <div className="p-[30px] pb-0">
        {/* title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-4">
            <div className="h-2 w-2 bg-[#33BFFF] rounded-full"></div>
            <h3>Development Apps</h3>
            <Image
              src={attachment.src}
              alt="icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>
          <Image
            src={cross.src}
            alt="icon"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
        {/* list */}
        <div className="grid grid-cols-2 gap-y-4 pl-4 mt-5">
          <div className={`text-center flex items-center gap-1`}>
            <Image
              src={subdirectory_arrow_right.src}
              alt="Icon"
              width={30}
              height={30}
            />
            <p className="text-consGrayBlue60 font-bold text-[10px] capitalize">
              4 Subtasks
            </p>
          </div>
          <div className={`text-center flex items-center gap-1`}>
            <Image src={flag.src} alt="Icon" width={30} height={30} />
            <p className="text-consGrayBlue60 font-bold text-[10px] capitalize">
              Priority Enabled
            </p>
          </div>
          <div className={`text-center flex items-center gap-1`}>
            <Image src={cloud.src} alt="Icon" width={30} height={30} />
            <p className="text-consGrayBlue60 font-bold text-[10px] capitalize">
              3 Files
            </p>
          </div>
          <div className={`text-center flex items-center gap-1`}>
            <Image src={insert_comment.src} alt="Icon" width={30} height={30} />
            <p className="text-consGrayBlue60 font-bold text-[10px] capitalize">
              7 Comments
            </p>
          </div>
          <div className={`text-center flex items-center gap-1`}>
            <Image src={person.src} alt="Icon" width={30} height={30} />
            <p className="text-consGrayBlue60 font-bold text-[10px] capitalize">
              Tyler Norman
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="px-[30px]">
        <div className="pl-4 pb-6 flex items-center justify-between">
          <div>
            <h3 className="font-black text-xs text-consGrayBlue70 uppercase mb-1">
              Start Date
            </h3>
            <p className="font-black text-xs text-consGrayBlue50">
              Sep 3, 9:00 pm
            </p>
          </div>
          <Image src={arrow.src} alt="icon" width={30} height={30} />
          <div>
            <h3 className="font-black text-xs text-consGrayBlue70 uppercase mb-1">
              end Date
            </h3>
            <p className="font-black text-xs text-consGrayBlue50">
              Sep 3, 9:00 pm
            </p>
          </div>
          <div className="flex items-center relative gap-4">
            <Image
              src={button.src}
              alt="icon"
              width={30}
              height={30}
              className="w-full bg-green-500 p-3 rounded-full cursor-pointer"
            />
            <p className="font-black text-xs text-consGrayBlue50">0:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentArea;
