import React from "react";
import { charactersData } from "../../data/characters";
import Image from "next/image";

const CharactersPage = () => {
  const dataGenap = charactersData.filter((data) => data.id % 2 === 0);
  const dataGanjil = charactersData.filter((data) => data.id % 2 !== 0);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Togar */}
      <div className="flex flex-col max-w-6xl border border-red-500">
        {dataGanjil.map((data) => (
          <div key={data.id} className="flex flex-row">
            <Image src={data.image} width={500} height={500} alt={data.name} />
            <div className="flex flex-col">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <div className="flex flex-row">
                <p>Strong: {data.strong}</p>
                <p>Logic: {data.logic}</p>
                <p>Creative: {data.creative}</p>
                <p>Luck: {data.luck}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
