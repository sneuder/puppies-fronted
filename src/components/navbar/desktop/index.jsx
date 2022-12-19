import { Grid, Box } from '@mui/material';

import {
  CreateDog,
  FilterAlpha,
  FilterTemp,
  MenuMobile,
  SearchDogs,
} from '../elements';

import { styleBackground, ContainerOptions } from './style';

const NavbarDesktop = ({ showOptions }) => {
  const { toShowDesktop, toShowMobile } = showOptions;
  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      p={2}
      gap={2}
      sx={styleBackground}
    >
      <Grid
        container
        item
        xs={10}
        md={4}
      >
        <SearchDogs />
      </Grid>
      <ContainerOptions
        toShow={toShowDesktop}
        container
        item
        gap={2}
        md={7}
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
        xs={1}
        justifyContent={'end'}
      >
        <MenuMobile />
      </ContainerOptions>
    </Grid>
  );
};

export default NavbarDesktop;
