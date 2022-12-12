import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setDogs } from '../redux/slices/dogsSlice';

import reqAxios from '../utils/axios';

const usePupies = () => {
  const dogs = useSelector((state) => {
    const { pagDogs } = state.dogs;

    if (pagDogs.length === 0) return ['', '', '', '', '', '', '', '', '', ''];
    return pagDogs;
  });

  const dispatch = useDispatch();

  const handlePuppies = () => {
    reqAxios('get', '/dogs/allDogs').then((data) => {
      dispatch(setDogs(data));
    });
  };

  useEffect(() => {
    handlePuppies();
  }, []);

  return {
    dogs,
  };
};

export default usePupies;
