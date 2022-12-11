import CardDogs from '../../components/cardDogs';
import usePuppies from '../../hooks/usePuppies';
import useImageList from '../../hooks/useImageList';

import Pag from '../../components/pag';

import { Grid, ImageList, ImageListItem } from '@mui/material';

const Dogs = () => {
  const { dogs } = usePuppies();
  const { listCols } = useImageList();

  return (
    <Grid
      container
      pb={2}
    >
      <ImageList
        variant="masonry"
        cols={listCols}
        gap={16}
        sx={{ padding: '16px' }}
      >
        {dogs.map((dog) => (
          <ImageListItem>
            <CardDogs
              key={dog.id}
              dog={dog}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pag />
    </Grid>
  );
};

export default Dogs;
