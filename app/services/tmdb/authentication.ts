import { API_ROUTES, API_TYPE } from "@constants";
import { createServiceRequest } from "../serviceRequest";

export const authenticationService = {
  getRequestToken: async () =>
    createServiceRequest(API_ROUTES.AUTHENTICATION.getRequestToken()),
  createSession: async (data: { [key: string]: string }) =>
    createServiceRequest(
      API_ROUTES.AUTHENTICATION.createSession(),
      API_TYPE.POST,
      data,
    ),
  createSessionWithLogin: async (data: { [key: string]: string }) =>
    createServiceRequest(
      API_ROUTES.AUTHENTICATION.createSessionWithLogin(),
      API_TYPE.POST,
      data,
    ),
  deleteSession: async (data: { [key: string]: string }) =>
    createServiceRequest(
      API_ROUTES.AUTHENTICATION.deleteSession(),
      API_TYPE.DELETE,
      data,
    ),
};
