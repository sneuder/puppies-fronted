import CardHome from '../../components/cardHome';
import { Grid } from '@mui/material';
import { styleHome } from './style';

const Home = () => {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      sx={styleHome}
    >
      <CardHome />
    </Grid>
  );
};

export default Home;
