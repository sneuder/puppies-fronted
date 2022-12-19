import Form from '../../components/form/index';

import { Grid, Fab, Box, LinearProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styleCreateDog } from './style';

import useLoad from '../../hooks/useLoad';

const CreateDog = () => {
  const { dogCreation } = useLoad();
  return (
    <Box sx={{ position: 'relative' }}>
      {dogCreation && <LinearProgress />}
      <Fab
        size={'medium'}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
        }}
      >
        <ArrowBackIcon />
      </Fab>
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
