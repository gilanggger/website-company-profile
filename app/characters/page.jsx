import React from "react";
import { charactersData } from "../../data/characters";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";

const CharactersPage = () => {
  return (
    <>
      {charactersData.map((data) => (
        <div
          key={data.id}
          className={cn(
            "flex flex-col justify-center items-center",
            data.id === 1 ? "bg-[#FBEFEF]" : "",
            data.id === 2 ? "bg-[#FAF3E1]" : "",
            data.id === 3 ? "bg-[#E5FAE1]" : "",
            data.id === 4 ? "bg-[#FAF0FB]" : "",
            data.id === 5 ? "bg-[#E4FAF8]" : "",
            data.id === 6 ? "bg-[#F0F4FF]" : "",
            data.id === 7 ? "bg-[#FEF4EB]" : "",
            data.id === 8 ? "bg-[#EBF9E8]" : "",
            data.id === 9 ? "bg-[#FBEFEF]" : "",
            data.id === 10 ? "bg-[#EAF9E8]" : ""
          )}>
          <div className={cn("flex flex-row justify-center items-center  max-w-6xl")}>
            <div className={cn(data.id % 2 === 0 ? "order-2" : "order-1", "border w-[300px] h-[300px]")}>
              <Image src={data.image} alt={data.name} width={500} height={500} />
            </div>
            <div className={cn("flex flex-col tracking-wide", data.id % 2 === 0 ? "order-1 text-right" : "order-2 text-left")}>
              <h2 className={cn(luckiest_guy.className, "text-6xl font-bold py-4")}>{data.name}</h2>
              <p>{data.description}</p>
              <div className={cn("flex flex-row", data.id % 2 === 0 ? "justify-end" : "justify-start")}>
                <p>Strong: {data.strong}</p>
                <p>Logic: {data.logic}</p>
                <p>Creative: {data.creative}</p>
                <p>Luck: {data.luck}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CharactersPage;
