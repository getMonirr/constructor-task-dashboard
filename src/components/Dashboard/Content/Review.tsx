import React from "react";
import SectionHeading from "./SectionHeading";
import TaskCard from "./TaskCard";
import NewTask from "./NewTask";

const Review = () => {
  return (
    <div className="space-y-4">
      <SectionHeading name="Review" bgColor="bg-yellow-500" />
      <TaskCard taskTitle="Astronomy Binoculars A Great" />
      <TaskCard taskTitle="Astronomy Or Astrology" showTask />
      <NewTask/>
    </div>
  );
};

export default Review;
