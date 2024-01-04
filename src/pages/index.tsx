import SideBar from "@/components/SideBar";
import { Inter } from "@next/font/google";
import Image from "next/image";
import self from "../assets/self.jpg";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "hello",
  },
};

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="h-screen flex ml-8">
      {/* <div className="ml-8 mt-60"> */}
      <SideBar
        item={[
          { name: "Anneliese Doyle Ceramics", size: "text-7xl" },
          { name: "Collections", link: "/collections/bowls" },
          { name: "About", link: "/about" },
          { name: "Shipping", link: "/shipping" },
          {
            name: "Instagram |",
            link: "https://www.instagram.com/anneliesedoyleceramics/",
          },
          {
            name: "tiktok",
            link: "https://www.tiktok.com/@anneliesedoyleceramics",
          },
        ]}
      />

      <Image
        src={self}
        alt={"self"}
        className={"w-fit h-[45rem] ml-56 mt-28 rounded-xl"}
        placeholder="blur"
      />
    </div>
  );
}
