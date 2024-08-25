"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const NavigationMobile = () => {
  const router = usePathname();

  return (
    <div className="sticky px-4 py-2 bottom-5 md:hidden z-50 justify-center items-center flex">
      <div className="w-fit bg-white flex flex-row items-center justify-center"></div>
    </div>
  );
};

export default NavigationMobile;
