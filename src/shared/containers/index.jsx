import { Grid } from '@mui/material';

export const ContainerFull = ({ input, error }) => {
  return (
    <Grid
      item
      container
      alignItems={'stretch'}
    >
      <Grid
        item
        xs={12}
      >
        {input}
      </Grid>
      <Grid
        item
        xs={12}
      >
        {error}
      </Grid>
    </Grid>
  );
};

export const ContainerDoubleInput = ({ title, input1, input2, error }) => {
  return (
    <Grid
      item
      container
    >
      <Grid item>{title}</Grid>
      <Grid
        container
        item
        spacing={2}
      >
        <Grid
          item
          xs={6}
        >
          {input1}
        </Grid>
        <Grid
          item
          xs={6}
        >
          {input2}
        </Grid>
      </Grid>
    </Grid>
  );
};

export const ContainerSelectForm = ({ select, button }) => {
  return (
    <Grid
      item
      container
      spacing={2}
    >
      <Grid
        item
        xs={10}
      >
        {select}
      </Grid>
      <Grid
        item
        xs={2}
      >
        {button}
      </Grid>
    </Grid>
  );
};

export const ContainerSelectMulti = ({ select, button, elements }) => {
  return (
    <Grid
      container
      item
      spacing={2}
    >
      <Grid
        item
        xs={10}
      >
        {select}
      </Grid>
      <Grid
        item
        xs={2}
      >
        {button}
      </Grid>
      <Grid
        item
        xs={12}
      >
        {elements}
      </Grid>
    </Grid>
  );
};
