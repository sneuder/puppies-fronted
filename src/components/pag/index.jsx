import { Pagination } from "@mui/material";
import usePage from "../../hooks/usePage";

const Pag = () => {
  const { handleChangePage, handleSizePage, handlePageNumber } = usePage();
  return (
    <Pagination
      count={handleSizePage()}
      defaultPage={handlePageNumber()}
      onChange={handleChangePage}
    />
  );
};

export default Pag;
