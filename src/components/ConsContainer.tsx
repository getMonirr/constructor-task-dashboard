import React from "react";

const ConsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:max-w-[1600px] px-4 w-full  mx-auto bg-[#f7f8fa]">{children}</div>;
};

export default ConsContainer;
