import React from "react";
import compass from "@/assets/sidebar/compass.svg";
import grow from "@/assets/sidebar/grow.svg";
import world from "@/assets/sidebar/world.svg";
import messenger from "@/assets/sidebar/messenger.svg";
import star from "@/assets/sidebar/star.svg";
import block from "@/assets/sidebar/block.svg";
import plus from "@/assets/sidebar/plus.svg";
import IconBtn from "@/components/shared/IconBtn";
import Avatar from "@/components/shared/Avatar";
import avatar_image from "@/assets/sidebar/Avatar-Image.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-200px)] gap-16 py-10">
      <div className="flex flex-col gap-4">
        <IconBtn image={compass.src} />
        <IconBtn image={star.src} />
        <IconBtn image={messenger.src} />
        <IconBtn image={grow.src} />
        <IconBtn image={world.src} />
        <IconBtn image={block.src} />
      </div>
      <div className="flex flex-col gap-4">
        <Avatar online image={avatar_image.src} />
        <Avatar image={avatar_image.src} />
        <Avatar image={avatar_image.src} />
        <Avatar image={avatar_image.src} />
        <IconBtn image={plus.src} />
      </div>
    </div>
  );
};

export default Sidebar;
