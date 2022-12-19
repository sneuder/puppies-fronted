import { useSelector } from 'react-redux';

const useLoad = () => {
  const dogCreation = useSelector((state) => state.dogs.createdDog);
  return { dogCreation };
};

export default useLoad;
