import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    pagDogs: [],
    foundDog: {},
    numPags: 0,
    formDog: {
      temperament: [],
      breed_group: [],
      countries: [],
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
} = dogsSlice.actions;

export default dogsSlice.reducer;
