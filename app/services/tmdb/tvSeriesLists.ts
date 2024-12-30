import { API_ROUTES } from "@constants";
import { URLAiringTodayTVProps, URLPageLanguageProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const tvSeriesListsService = {
  getAiringToday: async ({ language, page, timezone }: URLAiringTodayTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.airingToday({ language, page, timezone }),
    ),
  getOnTheAir: async ({ language, page, timezone }: URLAiringTodayTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.onTheAir({ language, page, timezone }),
    ),
  getPopular: async ({ language, page }: URLPageLanguageProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.popular({ language, page }),
    ),
  getTopRated: async ({ language, page }: URLPageLanguageProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.topRated({ language, page }),
    ),
};
