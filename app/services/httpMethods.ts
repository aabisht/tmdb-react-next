import axios, { AxiosResponse } from "axios";

const getApi = (
  url: string,
  headers: { [key: string]: string },
): Promise<AxiosResponse<any>> => {
  return axios.get(url, { headers });
};

const postApi = (
  url: string,
  data: { [key: string]: string },
  headers: { [key: string]: string },
): Promise<AxiosResponse<any, any>> => {
  return axios.post(url, data, { headers });
};

const deleteApi = (
  url: string,
  headers: { [key: string]: string },
): Promise<AxiosResponse<any>> => {
  return axios.delete(url, { headers });
};

export { getApi, postApi, deleteApi };
