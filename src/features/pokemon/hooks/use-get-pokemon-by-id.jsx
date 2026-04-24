import { useEffect, useState } from "react";
import { getPokemonById } from "../services/get-pokemon-by-id";

export const useGetPokemonById = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemonById(id)
      .then(setPokemon)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { pokemon, loading, error };
};