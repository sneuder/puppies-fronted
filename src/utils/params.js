const getParams = (searchParams, removedParam) => {
  const params = {};

  for (const key of searchParams.keys()) {
    if (removedParam === key) continue;
    params[key] = searchParams.get(key);
  }

  return params;
};

export default getParams;
