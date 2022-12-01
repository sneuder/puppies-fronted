const setDogs = (state, action) => {
  state.allDogs = action.payload;
};

export default {
  setDogs,
};
