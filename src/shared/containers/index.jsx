import { Grid } from '@mui/material';

export const GeneralContainer = ({ children, gapProp }) => {
  return (
    <Grid
      item
      container
      spacing={gapProp || 2}
    >
      {children}
    </Grid>
  );
};

export const SubContainerFull = ({ children }) => {
  return (
    <Grid
      item
      direction={'column'}
      alignItems={'stretch'}
      xs={12}
    >
      {children}
    </Grid>
  );
};

export const SubContainerMulti = ({ children, space }) => {
  return (
    <Grid
      item
      alignItems={'stretch'}
      xs={space}
    >
      {children}
    </Grid>
  );
};
