import { API_TYPE } from "app/constants/api";
import { deleteApi, getApi, postApi } from "./httpMethods";
import { AxiosResponse } from "axios";

export const httpService = (
  url: string,
  accessToken: string,
  method: string = API_TYPE.GET,
  data: { [key: string]: string } = {},
  headerOptions: { [key: string]: string } = {},
): Promise<AxiosResponse<any>> => {
  let apiMethod: Promise<AxiosResponse<any>>;

  headerOptions = {
    ...headerOptions,
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  switch (method) {
    case API_TYPE.POST:
      apiMethod = postApi(url, data, { ...headerOptions });
      break;
    case API_TYPE.DELETE:
      apiMethod = deleteApi(url, { ...headerOptions });
      break;
    default:
      apiMethod = getApi(url, data, { ...headerOptions });
      break;
  }

  return apiMethod;
};
