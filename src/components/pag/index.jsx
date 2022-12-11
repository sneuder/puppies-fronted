import { Pagination, Grid } from '@mui/material';
import usePage from '../../hooks/usePage';

const Pag = () => {
  const { handleChangePage, handleSizePage, handlePageNumber } = usePage();

  if (handleSizePage() === 1) return;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Pagination
        count={handleSizePage()}
        defaultPage={handlePageNumber()}
        onChange={handleChangePage}
      />
    </Grid>
  );
};

export default Pag;
