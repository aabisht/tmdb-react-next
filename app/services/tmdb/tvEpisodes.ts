import { API_ROUTES, API_TYPE } from "@constants";
import {
  URLDetailsTVEpisodesProps,
  URLRatingTVEpisodesProps,
  URLTVSeriesSeasonsEpisodesProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const tvEpisodesService = {
  getDetails: async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.details({
        series_id,
        season_number,
        episode_number,
        language,
      }),
    ),
  getAccountStates: async ({
    series_id,
    season_number,
    episode_number,
    session_id,
  }: URLTVSeriesSeasonsEpisodesProps & { session_id?: string }) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.accountStates({
        series_id,
        season_number,
        episode_number,
        session_id,
      }),
    ),
  getChanges: async (episode_id: number) =>
    createServiceRequest(API_ROUTES.TV_EPISODES.changes(episode_id)),
  getCredits: async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.credits({
        series_id,
        season_number,
        episode_number,
        language,
      }),
    ),
  getExternalIDs: async ({
    series_id,
    season_number,
    episode_number,
  }: URLTVSeriesSeasonsEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.externalIDs({
        series_id,
        season_number,
        episode_number,
      }),
    ),
  getImages: async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.images({
        series_id,
        season_number,
        episode_number,
        language,
      }),
    ),
  getTranslations: async ({
    series_id,
    season_number,
    episode_number,
  }: URLTVSeriesSeasonsEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.translations({
        series_id,
        season_number,
        episode_number,
      }),
    ),
  getVideos: async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.videos({
        series_id,
        season_number,
        episode_number,
        language,
      }),
    ),
  addRating: async ({
    series_id,
    season_number,
    episode_number,
    session_id,
    data,
  }: URLRatingTVEpisodesProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.addRating({
        series_id,
        season_number,
        episode_number,
        session_id,
      }),
      API_TYPE.POST,
      data,
    ),
  deleteRating: async ({
    series_id,
    season_number,
    episode_number,
    session_id,
  }: URLRatingTVEpisodesProps) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODES.deleteRating({
        series_id,
        season_number,
        episode_number,
        session_id,
      }),
      API_TYPE.DELETE,
      {},
    ),
  getTvEpisodeGroupsDetails: async (tv_episode_group_id: string) =>
    createServiceRequest(
      API_ROUTES.TV_EPISODE_GROUPS.details(tv_episode_group_id),
    ),
};
