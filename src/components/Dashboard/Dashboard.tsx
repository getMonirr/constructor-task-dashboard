import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import Content from "./Content/Content";

const Dashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-100px)]">
      <div className="w-[100px] border-[1px] border-t-0 xl:block hidden">
        <Sidebar />
      </div>
      <div className="w-[300px] py-10 ml-[60px] pr-[50px] hidden xl:block">
        <ProfileOverview />
      </div>
      <div className="flex-1 border-[1px] rounded-2xl my-7">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
