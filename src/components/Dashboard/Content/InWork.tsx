import React from "react";
import SectionHeading from "./SectionHeading";
import TaskCard from "./TaskCard";
import NewTask from "./NewTask";

const InWork = () => {
  return (
    <div className="space-y-4">
      <SectionHeading name="In Work" bgColor="bg-blue-500" />
      <TaskCard taskTitle="Types Of Paper In Catalog" />
      <TaskCard taskTitle="Global Resorts Network" showImage showTask />
      <TaskCard taskTitle="Copper Canyon" showTask />
      <NewTask/>
    </div>
  );
};

export default InWork;
