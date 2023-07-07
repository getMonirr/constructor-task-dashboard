import IconBtn from "@/components/shared/IconBtn";
import dot from "@/assets/profile/threeDot.svg";
import user from "@/assets/profile/userIcon.svg";
import phone from "@/assets/profile/local_phone.svg";
import User from "./User";
import Image from "next/image";
import MenuBlock from "./MenuBlock";
import dashboard from "@/assets/profile/dashboard.svg";
import build from "@/assets/profile/build.svg";
import chrome_reader_mode from "@/assets/profile/chrome_reader_mode.svg";
import could from "@/assets/profile/cloud.svg";
import email from "@/assets/profile/email.svg";
import event from "@/assets/profile/event.svg";
import group from "@/assets/profile/group.svg";
import ic_whatsapp from "@/assets/profile/ic_whatsapp.svg";
import ic_telegram from "@/assets/profile/ic_telegram.svg";
import mail from "@/assets/profile/mail.svg";
import playlist_add_check from "@/assets/profile/playlist_add_check.svg";

const ProfileOverview = () => {
  return (
    <div className="text-center">
      <div>
        <div className="flex items-center justify-between mb-5">
          <IconBtn image={user.src} width={25} height={25} padding="p-0" />
          <IconBtn image={dot.src} width={25} height={25} padding="p-0" />
        </div>
        <User />
      </div>
      <div className="grid grid-cols-2  mt-[30px]">
        <MenuBlock
          name="Dashboard"
          round=" rounded-tl-2xl"
          image={dashboard.src}
        />
        <MenuBlock
          name="notes"
          round=" rounded-tr-2xl"
          image={playlist_add_check.src}
        />
        <MenuBlock name="tasks" image={playlist_add_check.src} />
        <MenuBlock name="files" image={could.src} />
        <MenuBlock name="emails" image={email.src} />
        <MenuBlock name="clients" image={group.src} />
        <MenuBlock name="calendars" round="rounded-bl-2xl" image={event.src} />
        <MenuBlock name="settings" round="rounded-br-2xl" image={build.src} />
      </div>
      <div className="rounded-full border-[1px] py-[15px] px-[25px] flex items-center mt-[30px]">
        <Image
          src={phone.src}
          alt="Icon"
          width={30}
          height={30}
          className="mx-auto"
        />
        <Image
          src={mail.src}
          alt="Icon"
          width={30}
          height={30}
          className="mx-auto"
        />
        <Image
          src={chrome_reader_mode.src}
          alt="Icon"
          width={30}
          height={30}
          className="mx-auto"
        />
        <Image
          src={ic_telegram.src}
          alt="Icon"
          width={30}
          height={30}
          className="mx-auto"
        />
        <Image
          src={ic_whatsapp.src}
          alt="Icon"
          width={30}
          height={30}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ProfileOverview;
