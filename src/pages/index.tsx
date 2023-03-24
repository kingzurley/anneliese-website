import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import React, { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-4 ml-8">
      <div>
        <div className="flex flex-col font-bold duration-700">
          <div className="text-8xl flex flex-row space-x-5 duration-700">
            <h1 className=" hover:text-yellow-600 duration-700 ">Anneliese</h1>
            <h1 className=" hover:text-teal-500 duration-700">Doyle</h1>
            <h1 className=" hover:text-red-400 duration-700">Ceramics</h1>
          </div>
          <div className="text-7xl">
            <h1
              className="hover:text-fuchsia-300 duration-700 mt-8 "
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <Link href="/collections">Collections </Link>
            </h1>
            <h1 className=" hover:text-cyan-400 duration-700 ">Samples</h1>
          </div>
        </div>
      </div>

      {show && (
        <div className="box-border h-64 w-64 p-4 border-4 right-0">
          Content in here
        </div>
      )}
      <div className="flex flex-col absolute bottom-0 left-0 mb-4 ml-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-16 h-16 text-pink-700"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
        <h1 className="text-7xl font-bold">About</h1>
        <h1 className="text-7xl font-bold">Shipping</h1>
      </div>
    </div>
  );
}
