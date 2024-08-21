"use client";

import { cn } from "../lib/utils";
import React from "react";
import LogoBrand from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center w-full top-0 bg-black">
      <div className={cn("")}>
        <ul className="flex flex-row gap-x-4 items-center ">
          <li className="cursor-pointer py-2 px-4">About Us</li>
          <li className="cursor-pointer py-2 px-4">The Story of</li>
          <li className="cursor-pointer py-2 px-4" onClick={() => router.push("/characters")}>
            Characters
          </li>
          <li className="h-fit px-4" onClick={() => router.push("/")}>
            <Image src={LogoBrand} className="scale-50 cursor-pointer" />
          </li>
          <li className="cursor-pointer py-2 px-4">Our Product</li>
          <li className="cursor-pointer py-2 px-4">Company</li>
          <li className="cursor-pointer py-2 px-4">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
