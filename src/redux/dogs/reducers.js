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

const updateAttributes = (state, action) => {
  const { keyForm, valueForm } = action.payload;
  state.formDog[keyForm] = [...state.formDog[keyForm], valueForm];
};

const deleteAttributes = (state, action) => {
  const { attribute, tempToRemove } = action.payload;
  state.formDog[attribute] = state.formDog[attribute].filter(
    (attr) => attr !== tempToRemove
  );
};

const updateProperties = (state, action) => {
  const { keyForm, subKeyForm, valueForm } = action.payload;
  if (subKeyForm) {
    state.formDog[keyForm][subKeyForm] = Number(valueForm);
  }
  if (!subKeyForm) state.formDog[keyForm] = valueForm;
};

const createdDog = (state, action) => {
  console.log(action.payload);
  state.createdDog = action.payload;
};

export default {
  findDog,
  findDogs,
  pagDogs,
  updateAttributes,
  deleteAttributes,
  updateProperties,
  createdDog,
};
