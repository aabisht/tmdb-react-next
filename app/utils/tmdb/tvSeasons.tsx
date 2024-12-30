import {
  URLDetailsTVSeasonsProps,
  URLAccountStatesTVProps,
  URLChangesTVSeasonsProps,
  URLTVSeriesSeasonsProps,
} from "@definitions";
import { tvSeasonsService } from "@services/tmdb/tvSeasons";
import { cache } from "react";

export const getTvSeasonDetails = cache(
  async ({ series_id, season_number, language }: URLDetailsTVSeasonsProps) => {
    try {
      return await tvSeasonsService.getDetails({
        series_id,
        season_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season details");
    }
  },
);

export const getTvSeasonAccountStates = cache(
  async ({
    series_id,
    season_number,
    session_id,
  }: URLAccountStatesTVProps & { season_number: number }) => {
    try {
      return await tvSeasonsService.getAccountStates({
        series_id,
        season_number,
        session_id,
      });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV season account states",
      );
    }
  },
);

export const getTvSeasonAggregateCredits = cache(
  async ({ series_id, season_number, language }: URLDetailsTVSeasonsProps) => {
    try {
      return await tvSeasonsService.getAggregateCredits({
        series_id,
        season_number,
        language,
      });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV season aggregate credits",
      );
    }
  },
);

export const getTvSeasonChanges = cache(
  async ({
    season_id,
    end_date,
    page,
    start_date,
  }: URLChangesTVSeasonsProps) => {
    try {
      return await tvSeasonsService.getChanges({
        season_id,
        end_date,
        page,
        start_date,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season changes");
    }
  },
);

export const getTvSeasonCredits = cache(
  async ({ series_id, season_number, language }: URLDetailsTVSeasonsProps) => {
    try {
      return await tvSeasonsService.getCredits({
        series_id,
        season_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season credits");
    }
  },
);

export const getTvSeasonExternalIDs = cache(
  async ({ series_id, season_number }: URLTVSeriesSeasonsProps) => {
    try {
      return await tvSeasonsService.getExternalIDs({
        series_id,
        season_number,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season external IDs");
    }
  },
);

export const getTvSeasonImages = cache(
  async ({ series_id, season_number, language }: URLDetailsTVSeasonsProps) => {
    try {
      return await tvSeasonsService.getImages({
        series_id,
        season_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season images");
    }
  },
);

export const getTvSeasonTranslations = cache(
  async ({ series_id, season_number }: URLTVSeriesSeasonsProps) => {
    try {
      return await tvSeasonsService.getTranslations({
        series_id,
        season_number,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season translations");
    }
  },
);

export const getTvSeasonVideos = cache(
  async ({ series_id, season_number, language }: URLDetailsTVSeasonsProps) => {
    try {
      return await tvSeasonsService.getVideos({
        series_id,
        season_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV season videos");
    }
  },
);

export const getTvSeasonWatchProviders = cache(
  async ({ series_id, season_number }: URLTVSeriesSeasonsProps) => {
    try {
      return await tvSeasonsService.getWwatchProviders({
        series_id,
        season_number,
      });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV season watch providers",
      );
    }
  },
);
