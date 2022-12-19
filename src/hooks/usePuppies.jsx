import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { pagDogs } from '../redux/dogs/dogsSlice';

import reqAxios from '../utils/axios';

const usePuppies = () => {
  const dogs = useSelector((state) => {
    const { pagDogs } = state.dogs;
    if (pagDogs.length === 0) return ['', '', '', '', '', '', '', '', '', ''];
    return pagDogs;
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const { page, search } = useSelector((state) => state.queries);
  const dispatch = useDispatch();

  const handlePuppies = () => {
    const params = {
      page: page || searchParams.get('page') || 1,
      search: search,
    };

    dispatch(pagDogs());

    reqAxios('get', '/dogs/allDogs', '', params).then((data) => {
      dispatch(pagDogs(data));
    });
  };

  useEffect(() => {
    handlePuppies();
  }, [search, page]);

  return {
    dogs,
  };
};

export default usePuppies;
