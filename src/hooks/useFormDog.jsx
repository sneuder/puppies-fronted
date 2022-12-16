import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateAttributes, deleteAttributes } from '../redux/dogs/dogsSlice';

import reqAxios from '../utils/axios';

const useFormDog = () => {
  const { register, handleSubmit } = useForm();

  const [attributes, setAttributes] = useState({});

  const dispatch = useDispatch();
  const selectedAttrs = useSelector((state) => {
    const { temperament, breed_group, countries } = state.dogs.formDog;
    return { temperament, breed_group, countries };
  });

  const handleDog = (data) => {
    console.log(data);
    console.log('bitch');
  };

  const getAttr = (attr, url) => {
    reqAxios('get', url).then((data) => {
      setAttributes((prevState) => ({
        ...prevState,
        [attr]: data,
      }));
    });
  };

  const setAttr = (e, attr) => {
    dispatch(
      updateAttributes({
        keyForm: attr,
        valueForm: e.target.value,
      })
    );
  };

  const deleteAttr = (temp, attr) => {
    dispatch(
      deleteAttributes({
        tempToRemove: temp,
        attribute: attr,
      })
    );
  };

  useEffect(() => {
    getAttr('temperaments', '/temps/allTemps');
    getAttr('breeds', '/breeds/allBreeds');
    getAttr('countries', '/countries/allCountries');
  }, []);

  return {
    attributes,
    selectedAttrs,
    setAttr,
    deleteAttr,
    dogForm: {
      register,
      handleSubmit,
      handleDog,
    },
  };
};

export default useFormDog;
