import reqAxios from '../utils/axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useTemps = () => {
  const [temps, setTemps] = useState([]);
  const selectedTemp = useSelector((state) => state.queries.filter);

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
    selectedTemp,
  };
};

export default useTemps;
