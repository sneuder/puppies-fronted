import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    pagDogs: [],
    foundDog: {},
    numPags: 0,
    formDog: {
      name: '',
      bred_for: '',
      attributes: {
        temps: [],
        countries: [],
        breeds: '',
      },
      lifeSpan: {
        from: '',
        to: '',
      },
      weight: {
        from: '',
        to: '',
      },
    },
    createdDog: false,
  },
  reducers: reducers,
});

export const {
  findDog,
  findDogs,
  pagDogs,
  updateAttributes,
  deleteAttributes,
  updateProperties,
  createdDog,
} = dogsSlice.actions;

export default dogsSlice.reducer;
