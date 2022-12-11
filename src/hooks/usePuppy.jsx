import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { findDog } from '../redux/slices/dogsSlice';
import reqAxios from '../utils/axios';

const usePuppy = () => {
  const { dogId } = useParams();
  const dog = useSelector((state) => state.dogs.foundDog);
  const dispatch = useDispatch();

  const handlePuppy = async () => {
    reqAxios('get', `/dogs/${dogId}`).then((data) => {
      dispatch(findDog(data));
    });
  };

  useEffect(() => {
    handlePuppy();
  }, []);

  return dog;
};

export default usePuppy;
