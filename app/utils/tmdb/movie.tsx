import {
  URLDetailsMovieProps,
  URLAccountStatesMovieProps,
  URLAlternativeTitlesMovieProps,
  URLChangesMovieProps,
  URLListsMovieProps,
} from "@definitions";
import { movieService } from "@services/tmdb/movie";
import { cache } from "react";

export const getMovieDetails = cache(
  async ({ movie_id, language }: URLDetailsMovieProps) => {
    try {
      return await movieService.getDetails({ movie_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie details");
    }
  },
);

export const getAccountStates = cache(
  async ({ movie_id, session_id }: URLAccountStatesMovieProps) => {
    try {
      return await movieService.getAccountStates({ movie_id, session_id });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch account states");
    }
  },
);

export const getAlternativeTitles = cache(
  async ({ movie_id, country }: URLAlternativeTitlesMovieProps) => {
    try {
      return await movieService.getAlternativeTitles({ movie_id, country });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch alternative titles");
    }
  },
);

export const getChanges = cache(
  async ({ movie_id, start_date, end_date, page }: URLChangesMovieProps) => {
    try {
      return await movieService.getChanges({
        movie_id,
        start_date,
        end_date,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie changes");
    }
  },
);

export const getCredits = cache(
  async ({ movie_id, language }: URLDetailsMovieProps) => {
    try {
      return await movieService.getCredits({ movie_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie credits");
    }
  },
);

export const getExternalIDs = cache(async (movie_id: number) => {
  try {
    return await movieService.getExternalIDs(movie_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch external IDs");
  }
});

export const getImages = cache(
  async ({ movie_id, language }: URLDetailsMovieProps) => {
    try {
      return await movieService.getImages({ movie_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie images");
    }
  },
);

export const getKeywords = cache(async (movie_id: number) => {
  try {
    return await movieService.getKeywords(movie_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch movie keywords");
  }
});

export const getLatestMovies = cache(async () => {
  try {
    return await movieService.getLatest();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch latest movies");
  }
});

export const getMovieLists = cache(
  async ({ movie_id, language, page }: URLListsMovieProps) => {
    try {
      return await movieService.getLists({ movie_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie lists");
    }
  },
);

export const getMovieRecommendations = cache(
  async ({ movie_id, language, page }: URLListsMovieProps) => {
    try {
      return await movieService.getRecommendations({
        movie_id,
        language,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie recommendations");
    }
  },
);

export const getReleaseDates = cache(async (movie_id: number) => {
  try {
    return await movieService.getReleaseDates(movie_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch movie release dates");
  }
});

export const getReviews = cache(
  async ({ movie_id, language, page }: URLListsMovieProps) => {
    try {
      return await movieService.getReviews({ movie_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie reviews");
    }
  },
);

export const getSimilarMovies = cache(
  async ({ movie_id, language, page }: URLListsMovieProps) => {
    try {
      return await movieService.getSimilar({ movie_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch similar movies");
    }
  },
);

export const getMovieTranslations = cache(async (movie_id: number) => {
  try {
    return await movieService.getTranslations(movie_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch movie translations");
  }
});

export const getMovieVideos = cache(
  async ({ movie_id, language }: URLDetailsMovieProps) => {
    try {
      return await movieService.getVideos({ movie_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movie videos");
    }
  },
);

export const getWatchProviders = cache(async (movie_id: number) => {
  try {
    return await movieService.getWatchProviders(movie_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch watch providers");
  }
});

export const addRating = cache(
  async ({
    movie_id,
    session_id,
    data,
  }: URLAccountStatesMovieProps & { data: { [key: string]: string } }) => {
    try {
      return await movieService.addRating({ movie_id, session_id, data });
    } catch (error: any) {
      throw new Error(error.message || "Failed to add rating");
    }
  },
);

export const deleteRating = cache(
  async ({ movie_id, session_id }: URLAccountStatesMovieProps) => {
    try {
      return await movieService.deleteRating({ movie_id, session_id });
    } catch (error: any) {
      throw new Error(error.message || "Failed to delete rating");
    }
  },
);
