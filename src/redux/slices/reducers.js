const setDogs = (state, action) => {
  state.allDogs = action.payload;
};

const findDog = (state, action) => {
  const dog = state.allDogs.find((dog) => dog.id == action.payload);
  state.foundDog = { ...dog };
};

export default {
  setDogs,
  findDog,
};
