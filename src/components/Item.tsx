import Image from "next/image";
import image1 from "../assets/IMG_5340.jpg";

interface ItemProps {
  name: string;
  price: string;
  dimensions?: string;
}

export default function Item(props: ItemProps) {
  return (
    <div className="box-borderh h-96 w-96 relative drop-shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
      <Image src={image1} alt={"test"} className="rounded-lg h-96 w-96" />
      <text className="absolute inset-x-0 bottom-0 text-2xl ml-2 ">
        {props.name}
      </text>
      <text className="absolute bottom-0 right-0 text-xl mr-2 ">
        {props.price}
      </text>
    </div>
  );
}
