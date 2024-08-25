"use client";

import React, { useEffect, useState } from "react";
import { charactersData } from "../../data/characters";
import { cn } from "../../lib/utils";
import { Placeholder } from "placeholder";
import { luckiest_guy } from "../fonts";

export const charactersDataTrial = [
  {
    id: 1,
    name: "Togar",
    strong: 80,
    logic: 40,
    creative: 20,
    luck: 80,
  },
  {
    id: 2,
    name: "Slamet",
    strong: 40,
    logic: 80,
    creative: 20,
    luck: 80,
  },
];

const CharacterTrial = ({ name, image, strong }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < strong) {
        setValue((prevValue) => prevValue + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [value, strong]);

  return (
    <>
      <div>{name}</div>
      <img src={image} alt={name} />
      <div className="relative w-full max-w-[400px] h-6 bg-muted rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full" style={{ width: `${value}%` }} />
        <div
          className="absolute inset-y-0 left-0 w-6 h-6 bg-[#047edb] rounded-full shadow-md transform -translate-x-1/2 transition-transform duration-500"
          style={{ left: `${value}%` }}>
          <div className="absolute">
            <svg
              className="w-full h-full text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const Character = ({ id, name, description, image, strong, logic, creative, luck, children }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < strong) {
        setValue((prevValue) => prevValue + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [value, strong]);

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
      <div className="container ">
        <div className={cn("flex flex-row justify-center max-w-6xl gap-x-6 py-12")}>
          <div className={cn(id % 2 === 0 ? "order-2" : "order-1", " basis-4/12 flex justify-center items-center")}>
            <Placeholder height={500} width={350} color="#d2def4" background="#333" />
          </div>
          <div className={cn("flex flex-col  tracking-wide basis-8/12", id % 2 === 0 ? "order-1 text-right" : "order-2 text-left")}>
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
              {children}
            </h2>
            <p className="tracking-widest leading-loose">{description}</p>
            <div className={cn("flex flex-col", id % 2 === 0 ? "justify-end" : "justify-start")}>
              <div className="">
                <div className="relative w-full max-w-[400px] h-6 bg-muted rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-b from-[#fef085] to-[#ffa914] h-full" style={{ width: `${value}%` }} />
                  <div
                    className="absolute inset-y-0 left-0 w-6 h-6 bg-[#047edb] rounded-full shadow-md transform -translate-x-1/2 transition-transform duration-500"
                    style={{ left: `${value}%` }}>
                    <div className="absolute">
                      <svg
                        className="w-full h-full text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                  </div>
                </div>
                {strong}
              </div>
              <p>Logic: {logic}</p>
              <p>Creative: {creative}</p>
              <p>Luck: {luck}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharactersPage = () => {
  return (
    <>
      {charactersDataTrial.map((character) => (
        <CharacterTrial key={character.id} name={character.name} image={character.image} strong={character.strong} />
      ))}
      {charactersData.map((data) => (
        <Character key={data.id} strong={data.strong} logic={data.logic} creative={data.creative} luck={data.luck}>
          <div>{data.name}</div>
          <div className="text-xs">{data.description}</div>
        </Character>
      ))}
    </>
  );
};

export default CharactersPage;
