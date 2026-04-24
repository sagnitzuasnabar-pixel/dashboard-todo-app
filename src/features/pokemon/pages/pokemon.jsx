import React from "react";
import { PokemonItem } from "../components/pokemon-item/pokemon-item";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PokemonPage() {
  const { pokemons, loading, error, page, setPage, totalPages } = useGetPokemons();

  if (error) 
    return (
      <div>
        <h2>An error occurred</h2>
      </div>
    );

  if (loading) 
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  }

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  }

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h1 className="text-4xl font-bold">Lista de Pokemones</h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {pokemons.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      <div className="flex gap-4 items-center mt-4">
        <button onClick={handlePrevPage} className="rounded-full bg-sky-800 p-2 hover:bg-sky-700">
          <ChevronLeft size={16} />
        </button>

        <p>{page} / {totalPages}</p>

        <button onClick={handleNextPage} className="rounded-full bg-sky-800 p-2 hover:bg-sky-700">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}