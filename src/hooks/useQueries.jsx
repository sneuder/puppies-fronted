import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateQueries } from '../redux/queries/queriesSlices';

const useQueries = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queries = useSelector((state) => state.queries);
  const dispatch = useDispatch();

  const handleQueries = () => {
    const params = {};

    Object.keys(queries).forEach((query) => {
      const browserQuery = searchParams.get(query);
      params[query] = browserQuery;
      if (query === 'page' && !browserQuery) params[query] = 1;
    });

    setSearchParams({
      page: Number(params.page),
    });

    dispatch(updateQueries(params));
  };

  const onChangeQueries = () => {
    const params = {};
    Object.keys(queries).forEach((query) => {
      if (queries[query]) params[query] = queries[query];
    });

    setSearchParams(params);
  };

  useEffect(() => {
    handleQueries();
  }, []);

  useEffect(() => {
    onChangeQueries();
  }, [queries]);
};

export default useQueries;
