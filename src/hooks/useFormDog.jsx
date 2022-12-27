import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAttributes,
  deleteAttributes,
  updateProperties,
  createdDog,
} from '../redux/dogs/dogsSlice';

import reqAxios from '../utils/axios';
import validateForm from '../utils/validations';
import Dog from '../models/Dog';

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
    validateForm(validation, dogFormData);

    if (Object.keys(validation).length !== 0)
      return setValidations({ ...validation });
    setValidations({ ...{} });

    dispatch(createdDog(true));
    reqAxios('post', '/dogs/newDog', new Dog(dogFormData), '').then((data) => {
      console.log(data);
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

  const deleteAttr = (attrToRemove, attr) => {
    dispatch(
      deleteAttributes({
        attrToRemove: attrToRemove,
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
