import reqAxios from '../utils/axios';
import { useState, useEffect } from 'react';

const useFilter = () => {
  const [temps, setTemps] = useState([]);

  const handleTemps = () => {
    reqAxios('get', '/temps/allTemps').then((data) => {
      setTemps([...data]);
    });
  };

  useEffect(() => {
    handleTemps();
  }, []);

  return {
    temps,
  };
};

export default useFilter;
