export const getPokemons = async (page) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
  );

  if (!response.ok) {
    throw new Error("Failed getting pokemons");
  }

  return response.json();
};