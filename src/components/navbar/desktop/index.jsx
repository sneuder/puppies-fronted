import { Grid, TextField, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { CreateDog, FilterAlpha, FilterTemp } from '../elements';
import { styleBackground } from './style';

const NavbarDesktop = () => {
  return (
    <Grid
      container
      justifyContent={'space-between'}
      p={2}
      spacing={1}
      sx={styleBackground}
    >
      <Grid
        container
        item
        xs={3}
      >
        <TextField />
      </Grid>
      <Grid
        container
        item
        gap={2}
        xs={5}
        justifyContent={'end'}
      >
        <FilterTemp />
        <FilterAlpha />
        <CreateDog />
        {/* <MenuIcon /> */}
      </Grid>
    </Grid>
  );
};

export default NavbarDesktop;
