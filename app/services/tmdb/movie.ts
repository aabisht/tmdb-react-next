import { API_ROUTES, API_TYPE } from "@constants";
import {
  URLAccountStatesMovieProps,
  URLAlternativeTitlesMovieProps,
  URLChangesMovieProps,
  URLDetailsMovieProps,
  URLListsMovieProps,
} from "@definitions";
import { createServiceRequest } from "../serviceRequest";

export const movieService = {
  getDetails: async ({ movie_id, language }: URLDetailsMovieProps) =>
    createServiceRequest(API_ROUTES.MOVIES.details({ movie_id, language })),
  getAccountStates: async ({
    movie_id,
    session_id,
  }: URLAccountStatesMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.accountStates({ movie_id, session_id }),
    ),
  getAlternativeTitles: async ({
    movie_id,
    country,
  }: URLAlternativeTitlesMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.alternativeTitles({ movie_id, country }),
    ),
  getChanges: async ({
    movie_id,
    end_date,
    page,
    start_date,
  }: URLChangesMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.changes({ movie_id, end_date, page, start_date }),
    ),
  getCredits: async ({ movie_id, language }: URLDetailsMovieProps) =>
    createServiceRequest(API_ROUTES.MOVIES.credits({ movie_id, language })),
  getExternalIDs: async (movie_id: number) =>
    createServiceRequest(API_ROUTES.MOVIES.externalIDs(movie_id)),
  getImages: async ({ movie_id, language }: URLDetailsMovieProps) =>
    createServiceRequest(API_ROUTES.MOVIES.images({ movie_id, language })),
  getKeywords: async (movie_id: number) =>
    createServiceRequest(API_ROUTES.MOVIES.keywords(movie_id)),
  getLatest: async () => createServiceRequest(API_ROUTES.MOVIES.latest()),
  getLists: async ({ movie_id, language, page }: URLListsMovieProps) =>
    createServiceRequest(API_ROUTES.MOVIES.lists({ movie_id, language, page })),
  getRecommendations: async ({
    movie_id,
    language,
    page,
  }: URLListsMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.recommendations({
        movie_id,
        language,
        page,
      }),
    ),
  getReleaseDates: async (movie_id: number) =>
    createServiceRequest(API_ROUTES.MOVIES.releaseDates(movie_id)),
  getReviews: async ({ movie_id, language, page }: URLListsMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.reviews({ movie_id, language, page }),
    ),
  getSimilar: async ({ movie_id, language, page }: URLListsMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.similar({ movie_id, language, page }),
    ),
  getTranslations: async (movie_id: number) =>
    createServiceRequest(API_ROUTES.MOVIES.translations(movie_id)),
  getVideos: async ({ movie_id, language }: URLDetailsMovieProps) =>
    createServiceRequest(API_ROUTES.MOVIES.videos({ movie_id, language })),
  getWatchProviders: async (movie_id: number) =>
    createServiceRequest(API_ROUTES.MOVIES.watchProviders(movie_id)),
  addRating: async ({
    movie_id,
    session_id,
    data,
  }: URLAccountStatesMovieProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.MOVIES.addRating({ movie_id, session_id }),
      API_TYPE.POST,
      data,
    ),
  deleteRating: async ({ movie_id, session_id }: URLAccountStatesMovieProps) =>
    createServiceRequest(
      API_ROUTES.MOVIES.deleteRating({ movie_id, session_id }),
      API_TYPE.DELETE,
      {},
    ),
};
