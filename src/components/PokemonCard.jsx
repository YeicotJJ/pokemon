import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function PokemonCard({ name, image }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          sx={{ objectFit: 'contain', background: '#f2f2f2' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {capitalize(name)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;
