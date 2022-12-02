import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    allDogs: ["", "", "", "", "", "", "", ""],
    pagDogs: [],
    foundDog: {},
  },
  reducers: reducers,
});

export const { setDogs, findDog, pagDogs } = dogsSlice.actions;
export default dogsSlice.reducer;
