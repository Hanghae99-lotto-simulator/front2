import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const requestBuyLotto = async (count) => {
  const response = await instance.post(`/api/lottoAutos/${count}`);

  return response.data;
};

export const getPageWinNumber = async (page) => {
  const response = await instance.get(`/api/winningNums/${page}`);

  return response.data;
};

// export const getPageWinCount = async (page) => {
//   const response = await instance.get(`/api/winningNums/${page}`);

//   return response.data;
// };
