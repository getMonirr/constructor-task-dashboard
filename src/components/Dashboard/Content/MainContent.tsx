
import Done from "./Done";
import InWork from "./InWork";
import Review from "./Review";
import Todo from "./Todo";
import DevelopmentArea from "./DevelopmentArea";

const MainContent = () => {
  return (
    <div className=" p-4 lg:px-4 xl:px-[50px] pt-12 pb-[42px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] relative">
      <Todo />
      <InWork />
      <Review />
      <Done />
      <DevelopmentArea />
    </div>
  );
};

export default MainContent;
