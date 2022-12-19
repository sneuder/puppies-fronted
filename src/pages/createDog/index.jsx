import Form from '../../components/form/index';
import Navigate from '../../components/navigate';

import { Grid, Box, LinearProgress } from '@mui/material';
import { styleCreateDog } from './style';

import useLoad from '../../hooks/useLoad';
import useNavbar from '../../hooks/useNavbar';

const CreateDog = () => {
  const { dogCreation } = useLoad();
  const { toShowDesktop } = useNavbar();

  return (
    <Box sx={{ position: 'relative' }}>
      {dogCreation && <LinearProgress />}
      {toShowDesktop && <Navigate url={'/dogs'} />}
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={styleCreateDog}
      >
        <Form />
      </Grid>
    </Box>
  );
};

export default CreateDog;
