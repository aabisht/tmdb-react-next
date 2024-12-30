import { API_ROUTES } from "@constants";
import { createServiceRequest } from "../serviceRequest";

export const configurationService = {
  getRequestToken: async () =>
    createServiceRequest(API_ROUTES.CONFIGURATION.getAPIConfiguration()),
  getCountries: async (language?: string) =>
    createServiceRequest(API_ROUTES.CONFIGURATION.getCountries(language)),
  getJobs: async () => createServiceRequest(API_ROUTES.CONFIGURATION.getJobs()),
  getLanguages: async () =>
    createServiceRequest(API_ROUTES.CONFIGURATION.getLanguages()),
  getPrimaryTranslations: async () =>
    createServiceRequest(API_ROUTES.CONFIGURATION.getPrimaryTranslations()),
  getTimezones: async () =>
    createServiceRequest(API_ROUTES.CONFIGURATION.getTimezones()),
};
