import { AppBar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar sx={{padding:'0.5em', backgroundColor:'darkred', justifyContent:'center', alignContent:'center'}}>
        <Typography variant='h5' textAlign='center'>Lista Pokémon</Typography>
    </AppBar>
  )
}

export default Header