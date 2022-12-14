import Navbar from '../../components/navbar';
import CardDogs from '../../components/cardDogs';
import Pag from '../../components/pag';

import usePuppies from '../../hooks/usePuppies';

import { Grid } from '@mui/material';
import useQueries from '../../hooks/useQueries';

const Dogs = () => {
  useQueries();
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
