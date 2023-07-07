import Image from "next/image";

const ContentHeaderItem = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <div
      className={`text-center p-[18px] flex items-center justify-evenly gap-1 border-b-[2px] border-b-transparent hover:border-b-[2px] hover:border-b-blue-500 group`}
    >
      <Image src={image} alt="Icon" width={30} height={30} />
      <p className="text-consGrayBlue70 font-bold text-xs capitalize group-hover:text-blue-500">
        {name}
      </p>
    </div>
  );
};

export default ContentHeaderItem;
