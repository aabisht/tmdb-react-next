import { genreService } from "@services/tmdb/genre";
import { cache } from "react";

// Function to get movie genres
export const getMovieGenres = cache(async (language?: string) => {
  try {
    return await genreService.getMovieGenres(language);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch movie genres");
  }
});

// Function to get TV genres
export const getTVGenres = cache(async (language?: string) => {
  try {
    return await genreService.getTVGenres(language);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch TV genres");
  }
});
