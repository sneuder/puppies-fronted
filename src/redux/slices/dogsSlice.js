import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    allDogs: ["", "", "", "", "", "", "", ""],
    foundDog: {},
  },
  reducers: reducers,
});

export const { setDogs, findDog } = dogsSlice.actions;
export default dogsSlice.reducer;
