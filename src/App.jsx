import { useEffect, useState } from 'react'
import './App.css'
import { Button, CircularProgress, Grid } from '@mui/material'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import { getPokemonsBase, getPokemonDetails } from './api/pokemonApi'

function App() {
  
  //Declara la variable para guardar los datos de los pokemons
  const [pokemons, setPokemons] = useState([]);
  //Declara el desface de los datos
  const [offset, setOffset] = useState(0);
  //Declara el límite de pokemons por llamada
  const limit = 10;

    //Llama los datos apenas carga la página
    useEffect(() => {
    const loadBase = async () => {
      const baseList = await getPokemonsBase(limit, offset);
      setPokemons(baseList.map(p => ({
        name: p.name,
        url: p.url,
        loading: true,
        image: null,
        types: []
      })));

      baseList.forEach(async (p, i) => {
        const details = await getPokemonDetails(p.url);
        setPokemons(prev =>
          prev.map((poke, idx) =>
            idx === i ? { ...details, loading: false } : poke
          )
        );
      });
    };

    loadBase();
  }, [offset]);
  
  //Si los datos de los pokemons no están se coloca un circulo de carga
  if(!pokemons){
    return(
    <Grid container sx={{width:'100vw', height:'100vh', backgroundColor:'white', justifyContent:'center', alignContent:'center'}}>
      <CircularProgress size="3rem" color='error'/>
    </Grid>
    );
  }

  return (
    <Grid container justifyContent={'space-around'} sx={{width:'100vw', height:'1fr', backgroundColor:'white', padding:'3em'}}>
    
      {/* Título */}
      <Header/>
      
      {/* Botones para avanzar y retroceder pokemons */}
      <Grid container sx={{width:'100%', justifyContent:'center', alignContent:'center', mt:'2em'}}>
        <Button variant='contained' color='error' onClick={() => setOffset(Math.max(0, offset - limit))} disabled={offset === 0}>
          Anterior
        </Button>
        <Button variant='contained' color='error' onClick={() => setOffset(offset + limit)} style={{ marginLeft: 10 }}>
          Siguiente
        </Button>
      </Grid>
      
      {/* Lista en donde pasamos los datos desordenados para que los ordene */}
      <PokemonList pokemons={pokemons}/>
      
    </Grid>
  )
}

export default App
