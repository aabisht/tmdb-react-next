import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";

export const GenresService = {
  getMovieList: () => {
    return httpService(API_TYPE.GET, API_ROUTES.GENRES.getMovieList({}));
  },
  getTVList: () => {
    return httpService(API_TYPE.GET, API_ROUTES.GENRES.getTVList({}));
  },
};
