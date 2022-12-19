import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../redux/queries/queriesSlices';

const usePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const browserPage = searchParams.get('page') || 1;

  const numPags = useSelector((state) => state.dogs.numPags);
  const dispatch = useDispatch();

  const handleChangePage = (event, value) => {
    if (browserPage !== value) {
      const params = {
        keyQuery: 'page',
        valueQuery: value,
      };

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      dispatch(updateQuery(params));
    }
  };

  const handleSizePage = () => {
    return Math.ceil(numPags / 10);
  };

  const handlePageNumber = () => {
    return Number(browserPage);
  };

  return {
    handleChangePage,
    handleSizePage,
    handlePageNumber,
  };
};

export default usePage;
