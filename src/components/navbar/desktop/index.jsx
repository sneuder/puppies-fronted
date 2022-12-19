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
  const { toShowDesktop, toShowMobile, handleDialog } = showOptions;

  return (
    <Grid
      container
      p={2}
      spacing={2}
    >
      {/* {toShowMobile && <MenuMobile event={handleDialog} />} */}
      <Grid
        container
        item
        md={4}
      >
        <SearchDogs />
      </Grid>
      <ContainerOptions
        toShow={toShowDesktop}
        item
        container
        md={8}
        spacing={2}
        justifyContent={'flex-end'}
      >
        {/* <Grid item>
          <FilterTemp />
        </Grid>
        <Grid item>
          <FilterAlpha />
        </Grid>
        <Grid item>
          <CreateDog />
        </Grid> */}
      </ContainerOptions>
    </Grid>
  );
};

export default NavbarDesktop;
