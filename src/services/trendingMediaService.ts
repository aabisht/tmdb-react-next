import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";

export const TrendingMediaService = {
  getTrendingAll: () => {
    return httpService(API_TYPE.GET, API_ROUTES.TRENDING.getTrendingAll({}));
  },
  getTrendingMovies: () => {
    return httpService(API_TYPE.GET, API_ROUTES.TRENDING.getTrendingMovies({}));
  },
  getTrendingPeople: () => {
    return httpService(API_TYPE.GET, API_ROUTES.TRENDING.getTrendingPeople({}));
  },
  getTrendingTV: () => {
    return httpService(API_TYPE.GET, API_ROUTES.TRENDING.getTrendingTV({}));
  },
};
