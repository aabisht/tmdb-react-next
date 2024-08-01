import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";
import getHeader from "./getHeaders";

export const TVService = {
  getTVDetails: (seriesId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TV_SERIES.getDetails({ seriesId }),
      getHeader(),
    );
  },

  getCredits: (seriesId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TV_SERIES.getCredits({ seriesId }),
      getHeader(),
    );
  },

  getRecommendations: (seriesId: number, pageNumber?: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TV_SERIES.getRecommendations({ seriesId, pageNumber }),
      getHeader(),
    );
  },
};
