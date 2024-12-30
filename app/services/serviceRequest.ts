import { API_TYPE } from "@constants";
import { getAPIReadAccessToken } from "@utils/apiHelper";
import { httpService } from "./httpService";

export const createServiceRequest = (
  url: string,
  method: string = API_TYPE.GET,
  data?: { [key: string]: string },
  headers?: { [key: string]: string },
) => {
  return httpService(
    url,
    getAPIReadAccessToken(),
    method,
    data,
    method !== API_TYPE.GET
      ? {
          "content-type": "application/json",
          ...headers,
        }
      : headers,
  );
};
