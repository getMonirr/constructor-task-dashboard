import Image from "next/image";

const Avatar = ({
  image,
  height = 50,
  width = 50,
  online = false,
}: {
  image: string;
  height?: number;
  width?: number;
  online?: boolean;
}) => {
  return (
    <div className={`avatar ${online ? "online" : ""}`}>
      <div className="w-full rounded-full">
        <Image src={image} alt="menuIcon" width={height} height={width} />
      </div>
    </div>
  );
};

export default Avatar;
