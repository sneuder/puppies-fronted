import Navbar from '../../components/navbar';
import CardDogs from '../../components/cardDogs';
import Pag from '../../components/pag';

import usePuppies from '../../hooks/usePuppies';

import { Grid } from '@mui/material';

const Dogs = () => {
  const { dogs } = usePuppies();

  return (
    <Grid
      container
      pb={2}
    >
      <Navbar />
      <CardDogs dogs={dogs} />
      <Pag />
    </Grid>
  );
};

export default Dogs;
