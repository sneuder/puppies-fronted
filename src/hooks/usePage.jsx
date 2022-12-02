import { useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { pagDogs } from "../redux/slices/dogsSlice";
import { useEffect } from "react";

const usePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dogs = useSelector((state) => state.dogs.allDogs);
  const dispatch = useDispatch();

  const handleChangePage = (event, value) => {
    dispatch(pagDogs(value));
    setSearchParams({
      page: value,
    });
  };

  const handleSizePage = () => {
    return Math.ceil(dogs.length / 10);
  };

  const handlePageNumber = () => {
    return Number(searchParams.get("page"));
  };

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    handleChangePage("", page);
  }, [dogs]);

  return {
    handleChangePage,
    handleSizePage,
    handlePageNumber,
  };
};

export default usePage;
