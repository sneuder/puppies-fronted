import { Grid, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { CreateDog, FilterAlpha, FilterTemp, SearchDogs } from '../elements';

import { styleBackground, ContainerOptions } from './style';

const NavbarDesktop = ({ showOptions }) => {
  const { toShowDesktop, toShowMobile } = showOptions;
  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      p={2}
      sx={styleBackground}
    >
      <SearchDogs />
      <Grid
        container
        item
        xs={3}
      ></Grid>
      <ContainerOptions
        toShow={toShowDesktop}
        container
        item
        gap={2}
        xs={5}
        justifyContent={'end'}
      >
        <FilterTemp />
        <FilterAlpha />
        <CreateDog />
      </ContainerOptions>
      <ContainerOptions
        toShow={toShowMobile}
        container
        item
        gap={2}
        xs={5}
        justifyContent={'end'}
      >
        <MenuIcon />
      </ContainerOptions>
    </Grid>
  );
};

export default NavbarDesktop;
