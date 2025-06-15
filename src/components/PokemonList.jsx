import { Grid } from '@mui/material'
import PokemonCard from './PokemonCard'

function PokemonList({pokemons=[]}) {

  return (
    <Grid id='pokemon_list' flex gap={2} container sx={{width:'100%', height:'1fr', boxSizing:'border-box', padding:'4em', justifyContent:'center', alignContent:'center', mt:'1em', color:'black'}}>
        
        {/* Recorre todos los pokemones */}
        {pokemons.map(p => (
          <Grid item key={p.name}>
            <PokemonCard name={p.name} image={p.image} />
          </Grid>
        ))}

    </Grid>
  )
}

export default PokemonList