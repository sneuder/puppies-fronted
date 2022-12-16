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
    const validation = {};

    const regexString = /^[a-zA-Z\s]+$/;
    const regexNum = /\d/g;

    const propToCheck = ['name', 'bredFor', 'breed_group'];
    const measureToCheck = ['lifeSpan', 'weight'];
    const attrToCheck = ['countries', 'temperament'];

    propToCheck.forEach((toCheck) => {
      if (regexString.test(dogFormData[toCheck])) return;
      if (dogFormData[toCheck] === '') {
        return (validation[toCheck] = 'Complete this field');
      }
      validation[toCheck] = 'Numbers and symbols not allowed';
    });

    measureToCheck.forEach((toCheck) => {
      if (
        regexNum.test(dogFormData[toCheck].to) &&
        regexNum.test(dogFormData[toCheck].from)
      ) {
        if (dogFormData[toCheck].from <= dogFormData[toCheck].to) return;
        return (validation[toCheck] = 'From is higher than To');
      }

      if (dogFormData[toCheck].to === '' || dogFormData[toCheck].from === '')
        return (validation[toCheck] = 'Complete this field');

      validation[toCheck] = 'Symbols and characters not allowed';
    });

    attrToCheck.forEach((toCheck) => {
      if (dogFormData[toCheck].length === 0) return;
      if (dogFormData[toCheck].some((item) => regexString.test(item))) return;
      validation[toCheck] = 'Numbers and symbols not allowed';
    });

    setValidations({ ...{} });
    if (validation)
      return setValidations((prevState) => ({ ...prevState, ...validation }));

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

  useEffect(() => {
    getAttr('temperaments', '/temps/allTemps');
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
    handleDog,
  };
};

export default useFormDog;
