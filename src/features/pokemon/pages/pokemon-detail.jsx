import React from "react";
import { useParams, useNavigate } from "react-router";
import { useGetPokemonById } from "../hooks/use-get-pokemon-by-id";
import { DisplayType } from "../utils/display-type";
import { MoveLeft } from "lucide-react";

export function PokemonDetailPage() {
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading, error } = useGetPokemonById(pokemonId);
  
  if (loading) 
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  if (error) 
    return (
      <div>
        <h2>An error occurred</h2>
      </div>
    );

  const { name, id, sprites, types, stats, abilities, height, weight } = pokemon;
  const image = sprites.front_default;

  const hp       = stats[0].base_stat;
  const attack   = stats[1].base_stat;
  const defense  = stats[2].base_stat;
  const spAtk    = stats[3].base_stat;
  const spDef    = stats[4].base_stat;
  const speed    = stats[5].base_stat;

  const handleNavigate = () => {
    navigate("/pokemon");
  }

  return (
    <div className="relative flex flex-col items-center min-h-screen p-6 gap-6">
      <MoveLeft
        className="absolute top-4 left-4 cursor-pointer hover:opacity-70"
        onClick={handleNavigate}
      />

      <div className="flex flex-col md:flex-row items-center gap-8 mt-8 bg-sky-900 rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
        <img src={image} alt={name} className="w-48 h-48 object-contain" />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold capitalize">{name}</h1>
          <p className="opacity-50 text-lg">#{id}</p>

          <div className="flex gap-3">
            {types.map((t) => (
              <div key={t.type.name} className="flex items-center gap-1 bg-sky-800 px-3 py-1 rounded-full">
                <DisplayType type={t.type.name} />
                <span className="capitalize text-sm">{t.type.name}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 text-sm mt-2">
            <div className="bg-sky-800 px-4 py-2 rounded-lg">
              <p className="opacity-50 text-xs">Height</p>
              <p className="font-bold">{height / 10}m</p>
            </div>
            <div className="bg-sky-800 px-4 py-2 rounded-lg">
              <p className="opacity-50 text-xs">Weight</p>
              <p className="font-bold">{weight / 10}kg</p>
            </div>
          </div>

          <div className="bg-sky-800 px-4 py-2 rounded-lg text-sm">
            <p className="opacity-50 text-xs mb-1">Abilities</p>
            <p className="capitalize">
              {abilities.map((a) => a.ability.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-sky-900 rounded-2xl p-6 w-full max-w-2xl shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Stats</h2>

        <div className="flex items-center gap-3 mb-2">
          <p className="w-20 text-sm opacity-70">HP</p>
          <div className="flex-1 bg-sky-950 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: `${(hp / 255) * 100}%` }} />
          </div>
          <p className="w-8 text-sm text-right">{hp}</p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <p className="w-20 text-sm opacity-70">Attack</p>
          <div className="flex-1 bg-sky-950 rounded-full h-2">
            <div className="bg-red-400 h-2 rounded-full" style={{ width: `${(attack / 255) * 100}%` }} />
          </div>
          <p className="w-8 text-sm text-right">{attack}</p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <p className="w-20 text-sm opacity-70">Defense</p>
          <div className="flex-1 bg-sky-950 rounded-full h-2">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${(defense / 255) * 100}%` }} />
          </div>
          <p className="w-8 text-sm text-right">{defense}</p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <p className="w-20 text-sm opacity-70">Sp. Atk</p>
          <div className="flex-1 bg-sky-950 rounded-full h-2">
            <div className="bg-pink-400 h-2 rounded-full" style={{ width: `${(spAtk / 255) * 100}%` }} />
          </div>
          <p className="w-8 text-sm text-right">{spAtk}</p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <p className="w-20 text-sm opacity-70">Sp. Def</p>
          <div className="flex-1 bg-sky-950 rounded-full h-2">
            <div className="bg-cyan-400 h-2 rounded-full" style={{ width: `${(spDef / 255) * 100}%` }} />
          </div>
          <p className="w-8 text-sm text-right">{spDef}</p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <p className="w-20 text-sm opacity-70">Speed</p>
          <div className="flex-1 bg-sky-950 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${(speed / 255) * 100}%` }} />
          </div>
          <p className="w-8 text-sm text-right">{speed}</p>
        </div>

      </div>
    </div>
  );
}