import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderItem {
  name: string;
  link?: string;
  size?: string;
}

interface HeaderProps {
  item: HeaderItem[];
}

export default function SideBar(props: HeaderProps) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 content-center gap-5 font-bold transition duration-700 ease-in opacity-${opacity} `}
    >
      {props.item.map((item, index) => (
        <text className={item.size ? item.size : "text-6xl"} key={index}>
          {item.link ? <Link href={item.link}>{item.name}</Link> : item.name}
        </text>
      ))}
    </div>
  );
}
