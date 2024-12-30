import { API_ROUTES, API_TYPE } from "@constants";
import {
  URLAccountStatesTVProps,
  URLChangesTVProps,
  URLDetailsTVProps,
  URLListsTVProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const tvSeriesService = {
  getDetails: ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.details({ series_id, language })),
  getAccountStates: ({ series_id, session_id }: URLAccountStatesTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.accountStates({ series_id, session_id }),
    ),
  getAggregateCredits: ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.aggregateCredits({ series_id, language }),
    ),
  getAlternativeTitles: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.alternativeTitles(series_id)),
  getChanges: ({ series_id, end_date, page, start_date }: URLChangesTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.changes({ series_id, end_date, page, start_date }),
    ),
  getContentRatings: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.contentRatings(series_id)),
  getCredits: ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.credits({ series_id, language })),
  getEpisodeGroups: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.episodeGroups(series_id)),
  getExternalIDs: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.externalIDs(series_id)),
  getImages: ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.images({ series_id, language })),
  getKeywords: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.keywords(series_id)),
  getLatest: () => createServiceRequest(API_ROUTES.TV_SERIES.latest()),
  getLists: ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.lists({ series_id, language, page }),
    ),
  getRecommendations: ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.recommendations({ series_id, language, page }),
    ),
  getReviews: ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.reviews({ series_id, language, page }),
    ),
  getScreenedTheatrically: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.screenedTheatrically(series_id)),
  getSimilar: ({ series_id, language, page }: URLListsTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES.similar({ series_id, language, page }),
    ),
  getTranslations: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.translations(series_id)),
  getVideos: ({ series_id, language }: URLDetailsTVProps) =>
    createServiceRequest(API_ROUTES.TV_SERIES.videos({ series_id, language })),
  getWatchProviders: (series_id: string) =>
    createServiceRequest(API_ROUTES.TV_SERIES.watchProviders(series_id)),
  addRating: ({
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
