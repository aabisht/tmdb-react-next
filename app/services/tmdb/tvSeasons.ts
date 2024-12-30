import { API_ROUTES } from "@constants";
import {
  URLAccountStatesTVProps,
  URLChangesTVSeasonsProps,
  URLDetailsTVSeasonsProps,
  URLTVSeriesSeasonsProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const tvSeasonsService = {
  getDetails: async ({
    series_id,
    season_number,
    language,
  }: URLDetailsTVSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.details({
        series_id,
        season_number,
        language,
      }),
    ),
  getAccountStates: async ({
    series_id,
    season_number,
    session_id,
  }: URLAccountStatesTVProps & { season_number: number }) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.accountStates({
        series_id,
        season_number,
        session_id,
      }),
    ),
  getAggregateCredits: async ({
    series_id,
    season_number,
    language,
  }: URLDetailsTVSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.aggregateCredits({
        series_id,
        season_number,
        language,
      }),
    ),
  getChanges: async ({
    season_id,
    end_date,
    page,
    start_date,
  }: URLChangesTVSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.changes({
        season_id,
        end_date,
        page,
        start_date,
      }),
    ),
  getCredits: async ({
    series_id,
    season_number,
    language,
  }: URLDetailsTVSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.credits({
        series_id,
        season_number,
        language,
      }),
    ),
  getExternalIDs: async ({
    series_id,
    season_number,
  }: URLTVSeriesSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.credits({ series_id, season_number }),
    ),
  getImages: async ({
    series_id,
    season_number,
    language,
  }: URLDetailsTVSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.images({
        series_id,
        season_number,
        language,
      }),
    ),
  getTranslations: async ({
    series_id,
    season_number,
  }: URLTVSeriesSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.translations({ series_id, season_number }),
    ),
  getVideos: async ({
    series_id,
    season_number,
    language,
  }: URLDetailsTVSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.videos({
        series_id,
        season_number,
        language,
      }),
    ),
  getWwatchProviders: async ({
    series_id,
    season_number,
  }: URLTVSeriesSeasonsProps) =>
    createServiceRequest(
      API_ROUTES.TV_SEASONS.watchProviders({ series_id, season_number }),
    ),
};
