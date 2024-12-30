import { API_ROUTES } from "@constants";
import { createServiceRequest } from "../serviceRequest";

export const creditService = {
  getCreditDetails: async (credit_id: string) =>
    createServiceRequest(API_ROUTES.CREDIT.getCreditDetails(credit_id)),
};
