import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import getParams from '../utils/params';

import { useDispatch, useSelector } from 'react-redux';
import { updateQueries } from '../redux/queries/queriesSlices';

const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const handleSearch = ({ search }) => {
    const params = {
      page: 1,
      search: search,
    };

    dispatch(updateQueries(params));
  };

  return {
    handleSubmit,
    handleSearch,
    register,
  };
};

export default useSearch;
