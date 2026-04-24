export const getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    throw new Error("Failed getting pokemon");
  }

  return response.json();
};