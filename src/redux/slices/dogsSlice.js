import { createSlice } from "@reduxjs/toolkit";
import { setDogs } from "./reducers";
const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    allDogs: [],
  },
  reducers: {
    setDogs: setDogs,
  },
});

export const { setDogs } = dogsSlice.actions;
export default dogsSlice.reducer;
