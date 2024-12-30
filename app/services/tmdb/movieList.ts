import { API_ROUTES } from "@constants";
import { URLNowPlayingMovieProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const movieList = {
  getNowPlaying: ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.nowPlaying({ language, page, region }),
    ),
  getPopular: ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.popular({ language, page, region }),
    ),
  getTopRated: ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.topRated({ language, page, region }),
    ),
  getUpcoming: ({ language, page, region }: URLNowPlayingMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIE_LISTS.upcoming({ language, page, region }),
    ),
};
