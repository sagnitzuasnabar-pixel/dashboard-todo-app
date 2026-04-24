import React from "react";
import { useNavigate } from "react-router";
import { DisplayType } from "../../utils/display-type";

export const PokemonItem = ({ pokemon }) => {
  const { id, name, sprites, stats, types } = pokemon;
  const image = sprites.front_default;
  const navigate = useNavigate();

  const hp  = stats[0].base_stat;
  const atk = stats[1].base_stat;
  const def = stats[2].base_stat;
  const spd = stats[5].base_stat;

  const handleNavigate = () => {
    navigate(`/pokemon/detail/${id}`);
  }

  return (
    <div
      className="min-h-80 w-3xs bg-sky-900 shadow-2xl flex flex-col justify-center items-center rounded-lg px-6 py-2 cursor-pointer hover:scale-105 transition-transform"
      onClick={handleNavigate}
    >
      <h2 className="font-bold text-xl capitalize text-center mb-1">{name}</h2>
      <img src={image} alt={name} className="w-full h-40 object-contain" />

      <div className="flex gap-2 justify-center my-2">
        {types.map((t) => (
          <DisplayType key={t.type.name} type={t.type.name} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm mt-2">
        <p><span className="opacity-50 uppercase text-xs">HP </span>{hp}</p>
        <p><span className="opacity-50 uppercase text-xs">ATK </span>{atk}</p>
        <p><span className="opacity-50 uppercase text-xs">DEF </span>{def}</p>
        <p><span className="opacity-50 uppercase text-xs">SPD </span>{spd}</p>
      </div>
    </div>
  );
};