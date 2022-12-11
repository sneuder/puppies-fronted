import { findDogs } from '../redux/slices/dogsSlice';
import { useDispatch } from 'react-redux';

const useSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(findDogs(value));
  };

  return {
    handleSearch,
  };
};

export default useSearch;
