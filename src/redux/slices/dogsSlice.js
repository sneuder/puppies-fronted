import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    pagDogs: [],
    foundDog: {},
    numPags: 0,
  },
  reducers: reducers,
});

export const { findDog, findDogs, pagDogs } = dogsSlice.actions;
export default dogsSlice.reducer;
