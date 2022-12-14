import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

const queriesSlice = createSlice({
  name: 'queries',
  initialState: {
    page: null,
    search: null,
    filter: null,
    order: null,
  },
  reducers: reducers,
});

export const { updateQueries, updateQuery } = queriesSlice.actions;
export default queriesSlice.reducer;
