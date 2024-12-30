import { URLNowPlayingMovieProps } from "@definitions";
import { movieList } from "@services/tmdb/movieList";
import { cache } from "react";

export const getNowPlayingMovies = cache(
  async ({ language, page, region }: URLNowPlayingMovieProps) => {
    try {
      return await movieList.getNowPlaying({ language, page, region });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch now playing movies");
    }
  },
);

export const getPopularMovies = cache(
  async ({ language, page, region }: URLNowPlayingMovieProps) => {
    try {
      return await movieList.getPopular({ language, page, region });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch popular movies");
    }
  },
);

export const getTopRatedMovies = cache(
  async ({ language, page, region }: URLNowPlayingMovieProps) => {
    try {
      return await movieList.getTopRated({ language, page, region });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch top rated movies");
    }
  },
);

export const getUpcomingMovies = cache(
  async ({ language, page, region }: URLNowPlayingMovieProps) => {
    try {
      return await movieList.getUpcoming({ language, page, region });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch upcoming movies");
    }
  },
);
