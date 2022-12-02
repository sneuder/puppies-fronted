import { useRef } from "react";
import { findDogs } from "../redux/slices/dogsSlice";
import { useDispatch } from "react-redux";

const useSearch = () => {
  const inputSearchRef = useRef();
  const dispatch = useDispatch();

  const handleSearch = () => {
    const value = inputSearchRef.current.value;
    dispatch(findDogs(value));
  };

  return {
    handleSearch,
    inputSearchRef,
  };
};

export default useSearch;
