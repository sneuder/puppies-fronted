import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    immutableDogs: [],
    allDogs: [],
    pagDogs: [],
    foundDog: {},
  },
  reducers: reducers,
});

export const { setDogs, findDog, findDogs, pagDogs } = dogsSlice.actions;
export default dogsSlice.reducer;
