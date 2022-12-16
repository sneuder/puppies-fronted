import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAttributes,
  deleteAttributes,
  updateProperties,
} from '../redux/dogs/dogsSlice';

import reqAxios from '../utils/axios';

const useFormDog = () => {
  const [attributes, setAttributes] = useState({});
  const [validations, setValidations] = useState({});

  const dispatch = useDispatch();
  const dogFormData = useSelector((state) => state.dogs.formDog);
  const selectedAttrs = useSelector((state) => {
    const { temperament, breed_group, countries } = state.dogs.formDog;
    return { temperament, breed_group, countries };
  });

  const handleDog = () => {
    reqAxios('post', '/dogs/newDog', dogFormData, '').then((data) => {});
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

  const setProperties = (e, attr, subAttr) => {
    dispatch(
      updateProperties({
        keyForm: attr,
        subKeyForm: subAttr,
        valueForm: e.target.value,
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
    setProperties,
    handleDog,
  };
};

export default useFormDog;
