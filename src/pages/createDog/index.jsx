import Form from '../../components/form/index';
import { Grid } from '@mui/material';
import { styleCreateDog } from './style';

const CreateDog = () => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={styleCreateDog}
    >
      <Form />
    </Grid>
  );
};

export default CreateDog;
