import userImage from "@/assets/profile/Avatar Image.png";
import Image from "next/image";

const User = () => {
  return (
    <div>
      <div className="avatar relative mb-8">
        <div className=" rounded-full ring-[2px] ring-[#3361FF] ring-offset-base-100 ring-offset-8">
          <Image src={userImage.src} alt="Icon" width={100} height={100} />
        </div>
        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center absolute -right-6 top-[40%]">
          <span className="mt-1 inline-block">2</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-consGrayBlue60 font-bold text-base mb-2 text-center">
          Hello Alfred Bryant
        </h3>
        <p className="text-consGrayBlue80 font-bold text-[14px]">
          adrain.nader@yahoo.com
        </p>
      </div>
    </div>
  );
};

export default User;
