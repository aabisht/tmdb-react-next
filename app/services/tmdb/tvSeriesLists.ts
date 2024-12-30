import { API_ROUTES } from "@constants";
import { URLAiringTodayTVProps, URLPageLanguageProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const tvSeriesListsService = {
  getAiringToday: ({ language, page, timezone }: URLAiringTodayTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.airingToday({ language, page, timezone }),
    ),
  getOnTheAir: ({ language, page, timezone }: URLAiringTodayTVProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.onTheAir({ language, page, timezone }),
    ),
  getPopular: ({ language, page }: URLPageLanguageProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.popular({ language, page }),
    ),
  getTopRated: ({ language, page }: URLPageLanguageProps) =>
    createServiceRequest(
      API_ROUTES.TV_SERIES_LISTS.topRated({ language, page }),
    ),
};
