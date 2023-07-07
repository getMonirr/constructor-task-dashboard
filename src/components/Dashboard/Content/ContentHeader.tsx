import Image from "next/image";
import ContentHeaderItem from "./ContentHeaderItem";
import messenger from "@/assets/sidebar/messenger.svg";
import search from "@/assets/headers/search.svg";
import IconBtn from "@/components/shared/IconBtn";
import arrowRight from "@/assets/headers/rightArrow.svg";
import arrowLeft from "@/assets/headers/left.png";
import dashboard from "@/assets/profile/dashboard.svg";
import event from "@/assets/profile/event.svg";
import playlist_add_check from "@/assets/profile/playlist_add_check.svg";
import grow from "@/assets/sidebar/grow.svg";
import gant from "@/assets/content/gant.svg";
import menu_Icon from "@/assets/headers/menu_Icon.svg";

const ContentHeader = () => {
  return (
    <div className="flex items-center justify-between border-b-[1px] px-4 xl:gap-10 2xl:gap-20">
      <div className="  gap-[30px] items-center justify-center hidden lg:flex">
        <ContentHeaderItem name="List" image={playlist_add_check.src} />
        <ContentHeaderItem name="Dashboard" image={dashboard.src} />
        <ContentHeaderItem name="Calendar" image={event.src} />
        <ContentHeaderItem name="Gantt" image={gant.src} />
        <ContentHeaderItem name="Timeline" image={menu_Icon.src} />
        <ContentHeaderItem name="Activity" image={grow.src} />
      </div>
      <div className="hidden lg:block">
        <div className="relative">
          <Image
            src={search.src}
            alt="search"
            width={30}
            height={30}
            className="absolute left-4 top-[2px]"
          />
          <input
            type="text"
            placeholder="Search Tasks"
            className="input rounded-full w-full max-w-[200px] input-sm py-2 pl-[43px] 2xl:pl-16 px-[20px] placeholder:text-consGrayBlue80 placeholder:font-bold placeholder:text-xs"
          />
        </div>
      </div>
      <div className="flex items-center justify-evenly w-full gap-1 lg:hidden">
        <IconBtn image={arrowLeft.src} />
        <ContentHeaderItem name="Dashboard" image={messenger.src} />
        <IconBtn image={arrowRight.src} />
        <IconBtn image={search.src} />
      </div>
    </div>
  );
};

export default ContentHeader;
