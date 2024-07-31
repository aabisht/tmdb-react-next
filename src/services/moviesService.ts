import { API_ROUTES, API_TYPE } from "@constants";
import httpService from "./httpService";
import getHeader from "./getHeaders";

export const MoviesService = {
  getMovieDetail: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getDetails({ movieId }),
      getHeader(),
    );
  },

  getAccountStates: (movieId: number, sessionId: string) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getAccountStates({ movieId, sessionId }),
      getHeader(),
    );
  },

  getAlternativeTitles: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getAlternativeTitles({ movieId }),
      getHeader(),
    );
  },

  getCredits: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getCredits({ movieId }),
      getHeader(),
    );
  },

  getExternalIDs: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getExternalIDs({ movieId }),
      getHeader(),
    );
  },

  getKeywords: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getKeywords({ movieId }),
      getHeader(),
    );
  },

  getReleaseDates: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getReleaseDates({ movieId }),
      getHeader(),
    );
  },

  getReviews: (movieId: number, pageNumber?: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getReviews({ movieId, pageNumber }),
      getHeader(),
    );
  },

  getSimilar: (movieId: number, pageNumber?: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getSimilar({ movieId, pageNumber }),
      getHeader(),
    );
  },

  getVideos: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getVideos({ movieId }),
      getHeader(),
    );
  },

  getWatchProviders: (movieId: number) => {
    return httpService(
      API_TYPE.GET,
      API_ROUTES.MOVIES.getWatchProviders({ movieId }),
      getHeader(),
    );
  },

  postAddRating: (movieId: number, sessionId: string, rating: number) => {
    return httpService(
      API_TYPE.POST,
      API_ROUTES.MOVIES.postAddRating({ movieId, sessionId }),
      getHeader({ "Content-Type": "application/json;charset=utf-8" }),
      { value: rating },
    );
  },
};
