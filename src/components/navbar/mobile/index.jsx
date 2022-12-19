import { Card, Dialog, Grid } from '@mui/material';
import { FilterTemp, FilterAlpha, CreateDog } from '../elements';

const Mobile = ({ openDialog, handleDialog }) => {
  return (
    <Dialog
      onClose={handleDialog}
      open={openDialog}
    >
      <Card>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          gap={2}
          p={2}
        >
          <FilterTemp />
          <FilterAlpha />
          <CreateDog />
        </Grid>
      </Card>
    </Dialog>
  );
};

export default Mobile;
