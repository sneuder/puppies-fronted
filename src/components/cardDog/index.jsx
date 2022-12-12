import {
  Grid,
  Chip,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';

import { ImageDog } from './style';

const CardDog = ({ dog }) => {
  const { name, image, temps } = dog;
  if (!name) return <CircularProgress />;

  return (
    <Grid container>
      <Grid
        item
        md={7}
        xs={12}
      >
        <ImageDog
          src={image}
          alt={name}
        />
      </Grid>
      <Grid
        container
        item
        md={5}
        gap={2}
        p={2}
      >
        <Grid item>
          <Typography>{name}</Typography>
        </Grid>
        <Grid
          container
          item
          gap={1.5}
        >
          {temps.map(({ temperament }) => (
            <Chip label={temperament} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardDog;
