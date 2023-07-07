import Link from "next/link";
import React from "react";

const MenuItems = () => {
  const menus = [
    "Dashboard",
    "about us",
    "news",
    "user policy",
    "contacts",
    "...",
  ];
  return (
    <div className="flex gap-[30px]">
      {menus.map((item) => (
        <Link
          className="text-[13px] font-bold text-consGrayBlue70 capitalize"
          key={item}
          href=""
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
