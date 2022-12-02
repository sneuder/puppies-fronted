const setDogs = (state, action) => {
  state.allDogs = action.payload;
};

const findDog = (state, action) => {
  const dog = state.allDogs.find((dog) => dog.id == action.payload);
  state.foundDog = { ...dog };
};

const pagDogs = (state, action) => {
  const end = action.payload * 10 + 1;
  const start = (action.payload - 1) * 10;

  const dogs = state.allDogs.slice(start, end);
  state.pagDogs = dogs;
};

export default {
  setDogs,
  findDog,
  pagDogs,
};
