import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const requestBuyLotto = async (count) => {
  const response = await instance.post(`/api/lotto-autos/${count}`);

  return response.data;
};

export const getPageWinNumber = async (page) => {
  const response = await instance.get(`/api/lotto-winsV3/${page}`);

  return response.data;
};

export const requestGamble = async (uniqueCode,num) => {
  // console.log(uniqueCode)
  // console.log(num)
  const response = await instance.get(`/api/lottos/info?num=${num}&uniqueCode=${uniqueCode}`);

  return response.data;
};
