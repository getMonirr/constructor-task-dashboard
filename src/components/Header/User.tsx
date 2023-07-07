import Image from "next/image";
import user from "@/assets/headers/user.svg";
import notification from "@/assets/headers/notification.svg";
import cross from "@/assets/headers/cross.svg";
import IconBtn from "../shared/IconBtn";

const User = () => {
  return (
    <div className="flex items-center gap-[30px]">
      <div className="flex items-center gap-4">
        <Image src={user.src} alt="menuIcon" width={20} height={20} />
        <h3 className="font-bold text-[13px] text-consGrayBlue60">
          Clayton Santos
        </h3>
      </div>
      <div className="flex items-center gap-[10px]">
        <IconBtn width={50} height={50} image={notification.src} />
        <IconBtn width={50} height={50} image={cross.src} />
      </div>
    </div>
  );
};

export default User;
