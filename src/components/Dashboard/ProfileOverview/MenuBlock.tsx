import Image from "next/image";

const MenuBlock = ({
  image,
  round,
  name,
}: {
  image: string;
  round?: string;
  name: string;
}) => {
  return (
    <div className={`text-center p-[18px] border-[1px] ${round}`}>
      <Image
        src={image}
        alt="Icon"
        width={30}
        height={30}
        className="mx-auto"
      />
      <p className="text-consGrayBlue80 font-bold text-xs mt-4 capitalize">
        {name}
      </p>
    </div>
  );
};

export default MenuBlock;
