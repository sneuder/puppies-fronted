import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findDog } from "../redux/slices/dogsSlice";

const usePuppy = () => {
  const { dogId } = useParams();
  const dog = useSelector((state) => state.dogs.foundDog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findDog(dogId));
  }, []);

  return dog;
};

export default usePuppy;
