import Link from "next/link";
import { useEffect, useState } from "react";
import Item, { ItemProps } from "./Item";
import SideBar from "./SideBar";

interface SimplePageProps {
  text: string;
}

export default function SimplePage(props: SimplePageProps): JSX.Element {
  return (
    <div className={`h-screen flex justify-center items-center w-screen`}>
      <div className="w-96">
        <text className="text-xl"> {props.text} </text>
      </div>
    </div>
  );
}
