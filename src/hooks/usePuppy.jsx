import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { findDog } from '../redux/slices/dogsSlice';
import axios from 'axios';

import { TOKEN } from '../constants/index';

const usePuppy = () => {
  const { dogId } = useParams();
  const dog = useSelector((state) => state.dogs.foundDog);
  const dispatch = useDispatch();

  const handlePuppy = async () => {
    const { data } = await axios({
      method: 'GET',
      url: `https://puppies-service.onrender.com/api/v1/dogs/${dogId}`,
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    dispatch(findDog(data));
  };

  useEffect(() => {
    handlePuppy();
  }, []);

  return dog;
};

export default usePuppy;
