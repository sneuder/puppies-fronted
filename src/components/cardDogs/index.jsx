import {
  Box,
  Grid,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material';

import { styleCard, ImageDog, CardLink } from './style';

const CardDogs = ({ dog }) => {
  const { name, image, id, temps } = dog;

  if (!dog) {
    return (
      <Skeleton
        variant="rounded"
        width={210}
        height={60}
      />
    );
  }

  return (
    <Card sx={styleCard}>
      <CardLink to={`/dogs/${id}`}>
        <ImageDog
          src={image}
          alt={name}
        />
      </CardLink>
      <CardContent>
        <Grid
          container
          gap={1}
        >
          <Typography>{name}</Typography>
          <Grid
            container
            gap={1.5}
          >
            {temps.map(({ temperament }) => (
              <Chip label={temperament} />
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardDogs;
