import NewTask from "./NewTask";
import SectionHeading from "./SectionHeading";
import TaskCard from "./TaskCard";

const Todo = () => {
  return (
    <div className="space-y-4">
      <SectionHeading name="To do" bgColor=" bg-consPurple" />
      <TaskCard taskTitle="Make Money Online Through" showImage showTask />
      <TaskCard taskTitle="Make Money Online Through" />
      <TaskCard taskTitle="Make Money Online Through" />
      <TaskCard taskTitle="Make Money Online Through" />
      <NewTask />
    </div>
  );
};

export default Todo;
