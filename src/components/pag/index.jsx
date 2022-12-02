import { Pagination } from "@mui/material";
import usePage from "../../hooks/usePage";

const Pag = () => {
  const { handleChangePage, handleSizePage } = usePage();
  return <Pagination count={handleSizePage()} onChange={handleChangePage} />;
};

export default Pag;
