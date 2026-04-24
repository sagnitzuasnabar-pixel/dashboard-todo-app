import { useEffect, useState } from "react";
import { getPokemons } from "../services/get-pokemons";
import { getPokemonById } from "../services/get-pokemon-by-id";

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    getPokemons(page)
      .then(async (data) => {
        setTotalPages(Math.ceil(data.count / 20));
        const details = await Promise.all(
          data.results.map((p) => {
            const id = p.url.split("/").filter(Boolean).pop();
            return getPokemonById(id);
          })
        );
        setPokemons(details);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return { pokemons, loading, error, page, setPage, totalPages };
};