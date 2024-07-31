import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";
import getHeader from "./getHeaders";

export const TrendingMediaService = {
  getTrendingAll: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TRENDING.getTrendingAll({}),
      getHeader(),
    );
  },
  getTrendingMovies: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TRENDING.getTrendingMovies({}),
      getHeader(),
    );
  },
  getTrendingPeople: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TRENDING.getTrendingPeople({}),
      getHeader(),
    );
  },
  getTrendingTV: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.TRENDING.getTrendingTV({}),
      getHeader(),
    );
  },
};
