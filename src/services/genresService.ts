import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";
import getHeader from "./getHeaders";

export const GenresService = {
  getMovieList: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.GENRES.getMovieList({}),
      getHeader(),
    );
  },
  getTVList: () => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.GENRES.getTVList({}),
      getHeader(),
    );
  },
};
