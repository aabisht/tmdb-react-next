import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";
import getHeader from "./getHeaders";

export const ConfigurationService = {
  getAPIConfiguration: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getAPIConfiguration(),
      getHeader(),
    );
  },
  getCountries: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getCountries(),
      getHeader(),
    );
  },
  getJobs: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getJobs(),
      getHeader(),
    );
  },
  getLanguages: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getLanguages(),
      getHeader(),
    );
  },
  getPrimaryTranslations: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getPrimaryTranslations(),
      getHeader(),
    );
  },
  getTimezones: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.CONFIGURATION.getTimezones(),
      getHeader(),
    );
  },
};
