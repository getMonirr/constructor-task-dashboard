import IconBtn from "../shared/IconBtn";
import menu_icon from "@/assets/headers/menu_Icon.svg";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import User from "./User";
import person from "@/assets/headers/user.svg";

const Header = () => {
  return (
    <div className="bg-consPrimary flex justify-between items-center py-6 border-b-[1px] xl:pl-8">
      <div className="flex items-center">
        <IconBtn image={menu_icon.src} />
        <h3 className="ml-9 font-bold text-[18px]">Constructor</h3>
      </div>
      <div className="hidden lg:block">
        <MenuItems />
      </div>
      <div className="hidden xl:block">
        <SearchBar />
      </div>
      <div className="hidden lg:block">
        <User />
      </div>
      <div className="block lg:hidden">
        <IconBtn image={person.src} />
      </div>
    </div>
  );
};

export default Header;
