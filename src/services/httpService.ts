import { AxiosResponse } from "axios";
import { getApi, putApi, postApi, deleteApi, patchApi } from "./httpMethods";
import { API_TYPE } from "@constants";

const httpService = (
  method: string,
  url: string,
  headerOptions?: { [key: string]: string },
  data?: any,
): Promise<AxiosResponse<any>> => {
  let apiMethod: Promise<AxiosResponse<any>>;

  switch (method) {
    case API_TYPE.GET:
      apiMethod = getApi(url, { ...headerOptions });
      break;
    case API_TYPE.POST:
      apiMethod = postApi(url, { ...headerOptions }, data);
      break;
    case API_TYPE.PUT:
      apiMethod = putApi(url, { ...headerOptions }, data);
      break;
    case API_TYPE.PATCH:
      apiMethod = patchApi(url, { ...headerOptions }, data);
      break;
    case API_TYPE.DELETE:
      apiMethod = deleteApi(url, { ...headerOptions });
      break;
    default:
      apiMethod = getApi(url, { ...headerOptions });
      break;
  }

  return apiMethod;
};

export default httpService;
