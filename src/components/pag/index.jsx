import { Pagination, Grid } from '@mui/material';
import usePage from '../../hooks/usePage';

const Pag = () => {
  const { handleChangePage, handleSizePage, handlePageNumber } = usePage();

  if (handleSizePage() > 1) {
    return (
      <Grid
        container
        justifyContent={'center'}
      >
        <Pagination
          count={handleSizePage()}
          defaultPage={handlePageNumber()}
          onChange={handleChangePage}
        />
      </Grid>
    );
  }
};

export default Pag;
