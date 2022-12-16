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
      bredFor: '',
      breed_group: [],
      temperament: [],
      countries: [],
      lifeSpan: {
        from: '',
        to: '',
      },
      weight: {
        from: '',
        to: '',
      },
    },
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
} = dogsSlice.actions;

export default dogsSlice.reducer;
