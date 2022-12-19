import { useSearchParams, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../redux/queries/queriesSlices';

const usePage = () => {
  const navigate = useNavigate();
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
      dispatch(updateQuery(params));
    }
  };

  const handleSizePage = () => {
    return Math.ceil(numPags / 10);
  };

  const handlePageNumber = () => {
    return Number(browserPage);
  };

  const handleNavigation = (url) => {
    navigate(url);
  };

  return {
    handleChangePage,
    handleSizePage,
    handlePageNumber,
    handleNavigation,
  };
};

export default usePage;
