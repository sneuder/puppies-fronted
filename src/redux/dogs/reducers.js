const pagDogs = (state, action) => {
  if (action.payload) {
    state.pagDogs = action.payload.rows;
    state.numPags = action.payload.count;
    return;
  }

  state.pagDogs = [];
  state.numPags = 0;
};

const findDog = (state, action) => {
  state.foundDog = action.payload;
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
  findDog,
  findDogs,
  pagDogs,
};
