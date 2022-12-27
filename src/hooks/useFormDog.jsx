import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAttributes,
  deleteAttributes,
  updateProperties,
  createdDog,
} from '../redux/dogs/dogsSlice';

import reqAxios from '../utils/axios';

const useFormDog = () => {
  const [attributes, setAttributes] = useState({});
  const [validations, setValidations] = useState({});

  const dispatch = useDispatch();
  const dogFormData = useSelector((state) => state.dogs.formDog);
  const selectedAttrs = useSelector((state) => {
    const { temps, breeds, countries } = state.dogs.formDog.attributes;
    return { temps, breeds, countries };
  });

  const handleDog = () => {
    const validation = {};

    const regexString = /^[a-zA-Z\s]+$/;
    const regexNum = /^\d+$/;

    const propToCheck = ['name', 'bred_for', 'breeds'];
    const measureToCheck = ['lifeSpan', 'weight'];
    const attrToCheck = ['countries', 'temps'];

    propToCheck.forEach((toCheck) => {
      if (regexString.test(dogFormData[toCheck])) return;
      if (dogFormData[toCheck] === '') {
        return (validation[toCheck] = 'Complete this field');
      }
      validation[toCheck] = 'Numbers and symbols not allowed';
    });

    measureToCheck.forEach((toCheck) => {
      const from = dogFormData[toCheck].from;
      const to = dogFormData[toCheck].to;

      if (regexNum.test(from) && regexNum.test(to)) {
        if (from <= to) return;
        return (validation[toCheck] = 'From is higher than To');
      }

      if (from === '' || to === '')
        return (validation[toCheck] = 'Complete this field');

      validation[toCheck] = 'Symbols and characters not allowed';
    });

    attrToCheck.forEach((toCheck) => {
      if (dogFormData.attributes[toCheck].length === 0) return;
      if (
        dogFormData.attributes[toCheck].some((item) => regexString.test(item))
      )
        return;
      validation[toCheck] = 'Numbers and symbols not allowed';
    });

    if (Object.keys(validation).length !== 0)
      return setValidations({ ...validation });
    setValidations({ ...{} });

    dispatch(createdDog(true));
    reqAxios('post', '/dogs/newDog', dogFormData, '').then((data) => {
      dispatch(createdDog(false));
    });
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
    if (!selectedAttrs[attr].includes(e.target.value)) {
      dispatch(
        updateAttributes({
          keyForm: attr,
          valueForm: e.target.value,
        })
      );
    }
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

  const postAttrs = (data, attrName) => {
    const attrEndpoints = {
      temp: '/temps/newTemp',
      breed: '/breeds/newBreed',
      country: '/countries/newCountry',
    };

    reqAxios('post', attrEndpoints[attrName], data);
  };

  useEffect(() => {
    getAttr('temps', '/temps/allTemps');
    getAttr('breeds', '/breeds/allBreeds');
    getAttr('countries', '/countries/allCountries');
  }, []);

  return {
    validations,
    attributes,
    selectedAttrs,
    setAttr,
    deleteAttr,
    setProperties,
    postAttrs,
    handleDog,
  };
};

export default useFormDog;
