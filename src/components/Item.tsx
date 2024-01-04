import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import ChevronLeft from "../icons/chevron-left.svg";
import ChevronRight from "../icons/chevron-right.svg";

export interface ItemProps {
  name: string;
  price: string;
  image: StaticImageData;
  link?: string;
  dimensions?: string;
}

export default function Item(props: ItemProps) {
  const [showChevrons, setShowChevrons] = useState(false);
  // const [image, setImage] = useState(image1);

  return (
    <div
      className={`box-borderh h-[500px] w-[400px] bg-stone-200 drop-shadow-xl hover:scale-[1.02] transition duration-700 ease-in-out rounded-lg`}
      onMouseOver={() => setShowChevrons(true)}
      onMouseLeave={() => setShowChevrons(false)}
    >
      {showChevrons && (
        <div className="">
          <Image
            className="fixed right-1 top-52"
            src={ChevronRight}
            alt={"chevron-right"}
            // onClick={() => setImage(image1)}
          />
          <Image
            className="fixed left-1 top-52"
            src={ChevronLeft}
            alt={"chevron-left"}
            // onClick={() => setImage(image2)}
          />
        </div>
      )}

      <Image
        src={props.image}
        alt={"test"}
        className="rounded-t-lg"
        placeholder="blur"
        // priority
      ></Image>

      <div className="text-2xl p-3 flex justify-between">
        <div className="flex flex-col">
          <text>{props.name}</text>
          <text>{props.price}</text>
          <text className="text-sm">140x150</text>
        </div>
        <div className="">
          <button className="rounded-full bg-slate-500 w-24">
            <text className="text-sm">Add to cart</text>
          </button>
        </div>
      </div>
    </div>
  );
}
