import axios, { AxiosRequestConfig } from "axios";

const getApi = function (url: string, headers: { [key: string]: string }) {
  const config: AxiosRequestConfig<any> = {};
  config.headers = headers;
  return axios.get(url, config);
};

const postApi = function (
  url: string,
  headers: { [key: string]: string },
  data: any | undefined,
) {
  const config: AxiosRequestConfig<any> = {};
  config.headers = headers;

  return axios.post(url, data, config);
};

const deleteApi = function (url: string, headers: { [key: string]: string }) {
  const config: AxiosRequestConfig<any> = {};
  config.headers = headers;

  return axios.delete(url, config);
};

const putApi = function (
  url: string,
  headers: { [key: string]: string },
  data: any | undefined,
) {
  const config: AxiosRequestConfig<any> = {};
  config.headers = headers;

  return axios.put(url, data, config);
};

const patchApi = function (
  url: string,
  headers: { [key: string]: string },
  data: any | undefined,
) {
  const config: AxiosRequestConfig<any> = {};
  config.headers = headers;

  return axios.patch(url, data, config);
};

export { getApi, deleteApi, postApi, putApi, patchApi };
