const updateQueries = (state, action) => {
  Object.keys(action.payload).forEach((payload) => {
    state[payload] = action.payload[payload];
  });
};

const updateQuery = (state, action) => {
  const { keyQuery, valueQuery } = action.payload;
  state[keyQuery] = valueQuery;
};

export default { updateQuery, updateQueries };
