import { API_ROUTES, API_TYPE } from "@constants";
import {
  URLAccountStatesTVProps,
  URLChangesTVProps,
  URLDetailsTVProps,
  URLListsTVProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const tvSeriesService = {
  getDetails: async ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.details({ series_id, language })),
  getAccountStates: async ({
    series_id,
    session_id,
  }: URLAccountStatesTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.accountStates({ series_id, session_id }),
    ),
  getAggregateCredits: async ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.aggregateCredits({ series_id, language }),
    ),
  getAlternativeTitles: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.alternativeTitles(series_id)),
  getChanges: async ({
    series_id,
    end_date,
    page,
    start_date,
  }: URLChangesTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.changes({ series_id, end_date, page, start_date }),
    ),
  getContentRatings: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.contentRatings(series_id)),
  getCredits: async ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.credits({ series_id, language })),
  getEpisodeGroups: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.episodeGroups(series_id)),
  getExternalIDs: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.externalIDs(series_id)),
  getImages: async ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.images({ series_id, language })),
  getKeywords: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.keywords(series_id)),
  getLatest: async () => createServiceRequest(API_ROUTES.TV_SERIES.latest()),
  getLists: async ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.lists({ series_id, language, page }),
    ),
  getRecommendations: async ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.recommendations({ series_id, language, page }),
    ),
  getReviews: async ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.reviews({ series_id, language, page }),
    ),
  getScreenedTheatrically: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.screenedTheatrically(series_id)),
  getSimilar: async ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.similar({ series_id, language, page }),
    ),
  getTranslations: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.translations(series_id)),
  getVideos: async ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.videos({ series_id, language })),
  getWatchProviders: async (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.watchProviders(series_id)),
  addRating: async ({
    series_id,
    session_id,
    data,
  }: URLAccountStatesTVProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.addRating({ series_id, session_id }),
      API_TYPE.POST,
      data,
    ),
  deleteRating: async ({ series_id, session_id }: URLAccountStatesTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.deleteRating({ series_id, session_id }),
      API_TYPE.DELETE,
      {},
    ),
};
