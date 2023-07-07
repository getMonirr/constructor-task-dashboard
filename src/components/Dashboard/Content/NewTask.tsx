import plus from "@/assets/content/add.svg";
import Image from "next/image";

const NewTask = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image alt="image" src={plus.src} width={30} height={30} />
      <h3 className="text-xs font-bold text-consGrayBlue60 uppercase">
        New Task
      </h3>
    </div>
  );
};

export default NewTask;
