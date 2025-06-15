import { Card, CardActionArea, CardContent, CardMedia, Typography, Skeleton, Chip, Stack } from '@mui/material';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function PokemonCard({ name, image, types, loading }) {
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={140} />
        ) : (
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
            sx={{ objectFit: 'contain', background: '#f0f0f0' }}
          />
        )}
        <CardContent>
          <Typography variant="h6">
            {capitalize(name)}
          </Typography>
          {loading ? (
            <Skeleton variant="text" width="60%" />
          ) : (
            <Stack direction="row" spacing={1}>
              {types.map((type) => (
                <Chip key={type} label={capitalize(type)} size="small" color="primary" />
              ))}
            </Stack>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;
