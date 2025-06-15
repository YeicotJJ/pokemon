import axios from 'axios';

// Intenta usar la variable de entorno, o usa la URL por defecto
const POKEMON_API_URL = import.meta.env.VITE_POKEMON_API || 'https://pokeapi.co/api/v2/pokemon';

//Obtiene los pokemon con un límite y un desfase
export const getPokemons = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.get(`${POKEMON_API_URL}?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
};
