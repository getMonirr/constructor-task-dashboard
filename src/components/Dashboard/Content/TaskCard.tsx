import Image from "next/image";
import task_image from "@/assets/content/Image.png";
import person from "@/assets/sidebar/Avatar-Image.svg";
import TaskOverview from "./TaskOverview";

const TaskCard = ({
  showImage = false,
  showTask = false,
  taskTitle,
}: {
  showImage?: boolean;
  showTask?: boolean;
  taskTitle: string;
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow rounded-md">
      {showImage && (
        <figure>
          <Image
            src={task_image.src}
            alt="task image"
            width={232}
            height={170}
            className="w-full"
          />
        </figure>
      )}
      <div className="card-body">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-consGrayBlue80 capitalize">
            Space Tasks 2
          </p>
          <Image src={person.src} alt="person" width={20} height={20} />
        </div>
        <h3 className="text-[12px] font-bold text-consGrayBlue60 capitalize mt-1">
          {taskTitle}
        </h3>
        {showTask && <TaskOverview />}
      </div>
    </div>
  );
};

export default TaskCard;
