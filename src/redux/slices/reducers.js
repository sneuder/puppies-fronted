const setDogs = (state, action) => {
  state.allDogs = action.payload;
  state.immutableDogs = action.payload;
};

const findDog = (state, action) => {
  state.foundDog = action.payload;
};

const pagDogs = (state, action) => {
  const end = action.payload * 10 + 1;
  const start = (action.payload - 1) * 10;

  const dogs = state.allDogs.slice(start, end);
  state.pagDogs = dogs;
};

const findDogs = (state, action) => {
  const filteredDogs = state.immutableDogs.filter((dog) => {
    const dogName = dog.name.toLowerCase();
    const filterInput = action.payload.toLowerCase();
    if (dogName.includes(filterInput)) return dog;
  });

  state.allDogs = filteredDogs;
};

export default {
  setDogs,
  findDog,
  findDogs,
  pagDogs,
};
