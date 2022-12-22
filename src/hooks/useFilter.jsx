import reqAxios from '../utils/axios';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { updateQuery } from '../redux/queries/queriesSlices';

const useFilter = () => {
  const [temps, setTemps] = useState([]);
  const dispatch = useDispatch();

  const handleTemps = () => {
    reqAxios('get', '/temps/allTemps').then((data) => {
      setTemps([...data]);
    });
  };

  const handleOrder = (e) => {
    let value = e.target.value;
    if (value === 'A-Z') value = 'asc';
    if (value === 'Z-A') value = 'desc';

    dispatch(
      updateQuery({
        keyQuery: 'order',
        valueQuery: value,
      })
    );
  };

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();

    dispatch(
      updateQuery({
        keyQuery: 'filter',
        valueQuery: value,
      })
    );
  };

  useEffect(() => {
    handleTemps();
  }, []);

  return {
    temps,
    handleOrder,
    handleFilter,
  };
};

export default useFilter;
