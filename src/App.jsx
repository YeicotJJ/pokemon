import { useEffect, useState } from 'react'
import './App.css'
import { Button, Grid } from '@mui/material'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import { getPokemons } from './api/pokemonApi'

function App() {
  
  //Declara la variable para guardar los datos de los pokemons
  const [pokemons, setPokemons] = useState([]);
  //Declara el desface de los datos
  const [offset, setOffset] = useState(0);
  //Declara el límite de pokemons por llamada
  const limit = 10;

    //Llama los datos apenas carga la página
    useEffect(() => {
    const fetchData = async () => {
        const data = await getPokemons(limit, offset);
        setPokemons(data.results);
    };
    fetchData();
    }, [offset]);
  
  //Si los datos de los pokemons no están se coloca un circulo de carga
  if(!pokemons){
    return(
    <Grid container sx={{width:'100vw', height:'100vh', backgroundColor:'white'}}>
      <CircularProgress size="3rem" color='red'/>
    </Grid>
    );
  }

  return (
    <Grid container sx={{width:'100vw', height:'100vh', backgroundColor:'white'}}>
      {/* Título */}
      <Header/>
      
      {/* Lista en donde pasamos los datos desordenados para que los ordene */}
      <PokemonList pokemons={pokemons}/>
      
      {/* Botones para avanzar y retroceder pokemons */}
      <Grid container>
        <Button onClick={() => setOffset(Math.max(0, offset - limit))} disabled={offset === 0}>
          ⬅️ Anterior
        </Button>
        <Button onClick={() => setOffset(offset + limit)} style={{ marginLeft: 10 }}>
          Siguiente ➡️
        </Button>
      </Grid>
    </Grid>
  )
}

export default App
