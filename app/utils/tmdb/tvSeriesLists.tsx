import { URLAiringTodayTVProps, URLPageLanguageProps } from "@definitions";
import { tvSeriesListsService } from "@services/tmdb/tvSeriesLists";
import { cache } from "react";

export const getAiringTodayTvSeries = cache(
  async ({ language, page, timezone }: URLAiringTodayTVProps) => {
    try {
      return await tvSeriesListsService.getAiringToday({
        language,
        page,
        timezone,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get airing today TV series");
    }
  },
);

export const getOnTheAirTvSeries = cache(
  async ({ language, page, timezone }: URLAiringTodayTVProps) => {
    try {
      return await tvSeriesListsService.getOnTheAir({
        language,
        page,
        timezone,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get on the air TV series");
    }
  },
);

export const getPopularTvSeries = cache(
  async ({ language, page }: URLPageLanguageProps) => {
    try {
      return await tvSeriesListsService.getPopular({ language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get popular TV series");
    }
  },
);

export const getTopRatedTvSeries = cache(
  async ({ language, page }: URLPageLanguageProps) => {
    try {
      return await tvSeriesListsService.getTopRated({ language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get top rated TV series");
    }
  },
);
