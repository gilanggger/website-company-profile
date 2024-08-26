"use client";

import { Placeholder } from "placeholder";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { luckiest_guy } from "../app/fonts";
import { Assets } from "./ui/assets";

const Character = ({ id, name, description, image, strong, logic, creative, luck }) => {
  const [valStrong, setValStrong] = useState(0);
  const [valCreative, setValCreative] = useState(0);
  const [valLuck, setValLuck] = useState(0);
  const [valLogic, setValLogic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valStrong < strong) {
        setValStrong(valStrong + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valStrong]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valCreative < creative) {
        setValCreative(valCreative + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valCreative]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valLuck < luck) {
        setValLuck(valLuck + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valLuck]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valLogic < logic) {
        setValLogic(valLogic + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [valLogic]);

  return (
    <div
      key={id}
      className={cn(
        "flex flex-col justify-center items-center",
        id === 1 ? "bg-[#FBEFEF]" : "",
        id === 2 ? "bg-[#FAF3E1]" : "",
        id === 3 ? "bg-[#E5FAE1]" : "",
        id === 4 ? "bg-[#FAF0FB]" : "",
        id === 5 ? "bg-[#E4FAF8]" : "",
        id === 6 ? "bg-[#F0F4FF]" : "",
        id === 7 ? "bg-[#FEF4EB]" : "",
        id === 8 ? "bg-[#EBF9E8]" : "",
        id === 9 ? "bg-[#FBEFEF]" : "",
        id === 10 ? "bg-[#EAF9E8]" : ""
      )}>
      <div className="container px-8 md:px-0">
        <div className={cn("flex flex-col md:flex-row justify-center max-w-6xl gap-x-6 py-12")}>
          <div className={cn(id % 2 === 0 ? "md:order-2" : "md:order-1", " basis-4/12 flex flex-col justify-center items-center")}>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl bg-gradient-to-b md:hidden from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              {name}
            </h2>
            <Placeholder height={500} width={350} color="#d2def4" background="#333" />
          </div>
          <div className={cn("flex flex-col  tracking-wide basis-8/12", id % 2 === 0 ? "md:order-1 md:text-right" : "md:order-2 md:text-left")}>
            <h2
              className={cn(
                luckiest_guy.className,
                "md:text-6xl lg:text-7xl bg-gradient-to-b hidden md:block from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap mt-20",
                id === 1 ? "drop-shadow-[0px_5px_0px_rgba(118,40,40,1)]" : "",
                id === 2 ? "drop-shadow-[0px_5px_0px_rgba(134,53,13,1)]" : "",
                id === 3 ? "drop-shadow-[0px_5px_0px_rgba(1,68,76,1)]" : "",
                id === 4 ? "drop-shadow-[0px_5px_0px_rgba(151,9,143,1)]" : "",
                id === 5 ? "drop-shadow-[0px_5px_0px_rgba(11,78,132,1)]" : "",
                id === 6 ? "drop-shadow-[0px_5px_0px_rgba(69,45,157,1)]" : "",
                id === 7 ? "drop-shadow-[0px_5px_0px_rgba(152,38,3,1)]" : "",
                id === 8 ? "drop-shadow-[0px_5px_0px_rgba(20,66,6,1)]" : "",
                id === 9 ? "drop-shadow-[0px_5px_0px_rgba(126,20,20,1)]" : "",
                id === 10 ? "drop-shadow-[0px_5px_0px_rgba(20,66,6,1)]" : ""
              )}>
              {name}
            </h2>
            <p className="tracking-widest leading-loose">{description}</p>
            <div className={cn("flex flex-col gap-6", id % 2 === 0 ? "justify-end" : "justify-start")}>
              <div className="flex flex-row justify-between items-center md:gap-x-24 gap-x-10">
                {/* //TODOS: Create components */}
                {/* Strong */}
                <div className="flex flex-col basis-1/2">
                  <p className={cn("pl-4 font-semibold italic uppercase text-start")}>Strong</p>
                  <div className="relative rounded-full p-2 max-w-full bg-[#ededed]">
                    <div className="relative w-full max-w-full p-2 bg-muted rounded-full overflow-hidden ">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full"
                        style={{ width: `${valStrong}%` }}
                      />
                    </div>
                    <div className="absolute top-0 " style={{ left: `${valStrong}%` }}>
                      <Assets.IconSlider className="h-8 w-8 absolute -left-4" />
                    </div>
                  </div>
                </div>
                {/* Creative */}
                <div className="flex flex-col basis-1/2">
                  <p className={cn("pl-4 font-semibold italic uppercase text-start")}>Creative</p>
                  <div className="relative rounded-full p-2 max-w-full bg-[#ededed]">
                    <div className="relative w-full max-w-full p-2 bg-muted rounded-full overflow-hidden ">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full"
                        style={{ width: `${valCreative}%` }}
                      />
                    </div>
                    <div className="absolute top-0 " style={{ left: `${valCreative}%` }}>
                      <Assets.IconSlider className="h-8 w-8 absolute -left-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center md:gap-x-24 gap-x-10">
                {/* Logic */}
                <div className="flex flex-col basis-1/2">
                  <p className={cn("pl-4 font-semibold italic uppercase text-start")}>Logic</p>
                  <div className="relative rounded-full p-2 max-w-full bg-[#ededed]">
                    <div className="relative w-full max-w-full p-2 bg-muted rounded-full overflow-hidden ">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full"
                        style={{ width: `${valLogic}%` }}
                      />
                    </div>
                    <div className="absolute top-0 " style={{ left: `${valLogic}%` }}>
                      <Assets.IconSlider className="h-8 w-8 absolute -left-4" />
                    </div>
                  </div>
                </div>
                {/* Luck */}
                <div className="flex flex-col basis-1/2">
                  <p className={cn("pl-4 font-semibold italic uppercase text-start")}>Luck</p>
                  <div className="relative rounded-full p-2 max-w-full bg-[#ededed]">
                    <div className="relative w-full max-w-full p-2 bg-muted rounded-full overflow-hidden ">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full"
                        style={{ width: `${valLuck}%` }}
                      />
                    </div>
                    <div className="absolute top-0 " style={{ left: `${valLuck}%` }}>
                      <Assets.IconSlider className="h-8 w-8 absolute -left-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
