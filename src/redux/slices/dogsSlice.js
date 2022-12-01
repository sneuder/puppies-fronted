import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    allDogs: [],
  },
  reducers: reducers,
});

export const { setDogs } = dogsSlice.actions;
export default dogsSlice.reducer;
