import CardDog from '../../components/cardDog';
import usePuppy from '../../hooks/usePuppy';

import { Grid } from '@mui/material';
import { styleDogContainer } from './style';

const Dog = () => {
  const dog = usePuppy();
  return (
    <Grid
      height={'100vh'}
      container
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CardDog dog={dog} />
    </Grid>
  );
};

export default Dog;
