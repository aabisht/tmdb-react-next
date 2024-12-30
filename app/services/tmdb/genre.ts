import { API_ROUTES, MEDIA } from "@constants";
import { createServiceRequest } from "@services/serviceRequest";

export const genreService = {
  getGenres: async (mediaType: string, language?: string) =>
    createServiceRequest(
      API_ROUTES.GENRES.getGenresList({
        mediaType,
        language,
      }),
    ),
  getMovieGenres: async (language?: string) =>
    genreService.getGenres(MEDIA.MOVIE, language),

  getTVGenres: async (language?: string) =>
    genreService.getGenres(MEDIA.TV, language),
};
