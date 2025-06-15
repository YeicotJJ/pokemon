import axios from 'axios';

const POKEMON_API_URL = import.meta.env.VITE_POKEMON_API || 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonsBase = async (limit = 10, offset = 0) => {
  const res = await axios.get(`${POKEMON_API_URL}?limit=${limit}&offset=${offset}`);
  return res.data.results; // [{ name, url }]
};

export const getPokemonDetails = async (url) => {
  const res = await axios.get(url);
  const data = res.data;

  return {
    name: data.name,
    id: data.id,
    image: data.sprites.other['official-artwork'].front_default,
    types: data.types.map((t) => t.type.name),
  };
};
