
import access_alarms from "@/assets/task/access_alarms.svg";
import list from "@/assets/task/list.svg";
import attachment from "@/assets/task/attachment.svg";
import Image from "next/image";

const TaskOverview = () => {
  return (
    <div className="flex items-center justify-between">
      <div className={`text-center flex items-center gap-1`}>
        <Image src={list.src} alt="Icon" width={30} height={30} />
        <span className="text-consGrayBlue60 font-bold text-[10px] capitalize">
          4
        </span>
      </div>
      <div className={`text-center flex items-center gap-1`}>
        <Image src={attachment.src} alt="Icon" width={30} height={30} />
        <span className="text-consGrayBlue60 font-bold text-[10px] capitalize">
          2
        </span>
      </div>
      <div className={`text-center flex items-center gap-1`}>
        <Image src={access_alarms.src} alt="Icon" width={30} height={30} />
        <p className="text-consGrayBlue60 font-bold text-[10px] capitalize">
          6 Days Left
        </p>
      </div>
    </div>
  );
};

export default TaskOverview;
