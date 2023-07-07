import Image from "next/image";

const IconBtn = ({
  image,
  height = 30,
  width = 30,
  padding = "p-[10px]",
}: {
  image: string;
  height?: number;
  width?: number;
  padding?: string;
}) => {
  return (
    <button
      className={`btn btn-square btn-ghost bg-white rounded-full hover:bg-white ${padding}`}
    >
      <Image src={image} alt="Icon" width={height} height={width} />
    </button>
  );
};

export default IconBtn;
