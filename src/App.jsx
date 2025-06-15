import { useState } from 'react'
import './App.css'
import { Grid } from '@mui/material'
import Header from './components/Header'
import PokemonCard from './components/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid container sx={{width:'100vw', height:'100%', backgroundColor:'white'}}>
      <Header/>
      <Grid id='pokemon_list' flex gap={2} container sx={{width:'100%', height:'1fr', boxSizing:'border-box', padding:'4em', justifyContent:'center', alignContent:'center', mt:'1em'}}>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
      </Grid>
    </Grid>
  )
}

export default App
