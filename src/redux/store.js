import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from './dogs/dogsSlice';
import queriesSlices from './queries/queriesSlices';

export default configureStore({
  reducer: {
    dogs: dogsReducer,
    queries: queriesSlices,
  },
});
