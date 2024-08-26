import React from "react";
import { cn } from "../../lib/utils";
import { Assets } from "./assets";

const Slider = ({ children, value }) => {
  return (
    <div className="flex flex-col basis-1/2">
      <p className={cn("pl-4 font-semibold italic uppercase text-start")}>{children}</p>
      <div className="relative rounded-full p-2 max-w-full bg-[#ededed]">
        <div className="relative w-full max-w-full p-2 bg-muted rounded-full overflow-hidden ">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full" style={{ width: `${value}%` }} />
        </div>
        <div className="absolute top-0 " style={{ left: `${value}%` }}>
          <Assets.IconSlider className="h-8 w-8 absolute -left-4" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
