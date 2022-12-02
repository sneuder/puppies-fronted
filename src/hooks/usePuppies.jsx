import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setDogs, pagDogs } from "../redux/slices/dogsSlice";

import axios from "axios";
import { TOKEN } from "../constants/index";

const usePupies = () => {
  const dogs = useSelector((state) => state.dogs.pagDogs);
  const dispatch = useDispatch();

  const handlePuppies = async () => {
    const res = await axios({
      method: "GET",
      url: "https://puppies-service.onrender.com/api/v1/dogs/allDogs",
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    dispatch(setDogs(res.data));
  };

  useEffect(() => {
    handlePuppies();
  }, []);

  return {
    dogs,
  };
};

export default usePupies;
