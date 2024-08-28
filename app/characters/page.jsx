"use client";

import React from "react";
import { charactersData } from "../../data/characters";
import Character from "../../components/character";

const CharactersPage = () => {
  return (
    <>
      {charactersData.map((data) => (
        <Character key={data.id} {...data} />
      ))}
    </>
  );
};

export default CharactersPage;
