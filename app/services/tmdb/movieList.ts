import { API_ROUTES } from "@constants";
import { URLNowPlayingMovieProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const movieList = {
  getNowPlaying: async ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.nowPlaying({ language, page, region }),
    ),
  getPopular: async ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.popular({ language, page, region }),
    ),
  getTopRated: async ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.topRated({ language, page, region }),
    ),
  getUpcoming: async ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.upcoming({ language, page, region }),
    ),
};
