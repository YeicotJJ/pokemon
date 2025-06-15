import { Grid } from '@mui/material'
import PokemonCard from './PokemonCard'

function PokemonList({pokemons=[]}) {

  return (
    <Grid id='pokemon_list' flex gap={2} container sx={{width:'100%', height:'1fr', boxSizing:'border-box', justifyContent:'center', alignContent:'center', color:'black', mt:'3em',mb:'2em'}}>
        
        {/* Recorre todos los pokemones */}
        {pokemons.map(p => (
          <Grid item key={p.id}>
            <PokemonCard name={p.name} image={p.image} types={p.types} />
          </Grid>
        ))}

    </Grid>
  )
}

export default PokemonList