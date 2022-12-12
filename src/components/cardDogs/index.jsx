import {
  Grid,
  Chip,
  Card,
  CardContent,
  Typography,
  Skeleton,
  ImageList,
  ImageListItem,
} from '@mui/material';

import useImageList from '../../hooks/useImageList';

import { styleCard, ImageDog, CardLink } from './style';

const CardDogs = ({ dogs }) => {
  const { listCols } = useImageList();

  return (
    <ImageList
      variant="masonry"
      cols={listCols}
      gap={16}
      sx={{ padding: '16px', width: '100%' }}
    >
      {dogs.map((dog) => (
        <ImageListItem>
          {dog != '' ? <Dogs dog={dog} /> : <DogsLoading />}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

function Dogs({ dog }) {
  const { id, image, name, temps } = dog;
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
}

function DogsLoading() {
  return (
    <Skeleton
      variant="rounded"
      height={200}
    />
  );
}

export default CardDogs;
