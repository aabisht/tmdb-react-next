import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";

export const ConfigurationService = {
  getAPIConfiguration: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getAPIConfiguration(),
    );
  },
  getCountries: () => {
    return httpService(API_TYPE.GET, API_ROUTES.CONFIGURATION.getCountries());
  },
  getJobs: () => {
    return httpService(API_TYPE.GET, API_ROUTES.CONFIGURATION.getJobs());
  },
  getLanguages: () => {
    return httpService(API_TYPE.GET, API_ROUTES.CONFIGURATION.getLanguages());
  },
  getPrimaryTranslations: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getPrimaryTranslations(),
    );
  },
  getTimezones: () => {
    return httpService(API_TYPE.GET, API_ROUTES.CONFIGURATION.getTimezones());
  },
};
