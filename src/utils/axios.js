import axios from 'axios';

const URL = import.meta.env.VITE_APIURL;
const TOKEN = import.meta.env.VITE_TOKEN;

const reqAxios = async (method, endPoint, body, queries) => {
  const { data } = await axios({
    method: method,
    url: `${URL}${endPoint}`,
    headers: { Authorization: `Bearer ${TOKEN}` },
    data: body,
    params: queries,
  });

  return data;
};

export default reqAxios;
