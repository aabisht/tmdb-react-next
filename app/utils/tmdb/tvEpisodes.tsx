import {
  URLDetailsTVEpisodesProps,
  URLTVSeriesSeasonsEpisodesProps,
  URLRatingTVEpisodesProps,
} from "@definitions";
import { tvEpisodesService } from "@services/tmdb/tvEpisodes";
import { cache } from "react";

export const getTvEpisodeDetails = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) => {
    try {
      return await tvEpisodesService.getDetails({
        series_id,
        season_number,
        episode_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV episode details");
    }
  },
);

export const getTvEpisodeAccountStates = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    session_id,
  }: URLTVSeriesSeasonsEpisodesProps & { session_id?: string }) => {
    try {
      return await tvEpisodesService.getAccountStates({
        series_id,
        season_number,
        episode_number,
        session_id,
      });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV episode account states",
      );
    }
  },
);

export const getTvEpisodeChanges = cache(async (episode_id: number) => {
  try {
    return await tvEpisodesService.getChanges(episode_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV episode changes");
  }
});

export const getTvEpisodeCredits = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) => {
    try {
      return await tvEpisodesService.getCredits({
        series_id,
        season_number,
        episode_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV episode credits");
    }
  },
);

export const getTvEpisodeExternalIDs = cache(
  async ({
    series_id,
    season_number,
    episode_number,
  }: URLTVSeriesSeasonsEpisodesProps) => {
    try {
      return await tvEpisodesService.getExternalIDs({
        series_id,
        season_number,
        episode_number,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV episode external IDs");
    }
  },
);

export const getTvEpisodeImages = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) => {
    try {
      return await tvEpisodesService.getImages({
        series_id,
        season_number,
        episode_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV episode images");
    }
  },
);

export const getTvEpisodeTranslations = cache(
  async ({
    series_id,
    season_number,
    episode_number,
  }: URLTVSeriesSeasonsEpisodesProps) => {
    try {
      return await tvEpisodesService.getTranslations({
        series_id,
        season_number,
        episode_number,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV episode translations");
    }
  },
);

export const getTvEpisodeVideos = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    language,
  }: URLDetailsTVEpisodesProps) => {
    try {
      return await tvEpisodesService.getVideos({
        series_id,
        season_number,
        episode_number,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV episode videos");
    }
  },
);

export const addTvEpisodeRating = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    session_id,
    data,
  }: URLRatingTVEpisodesProps & { data: { [key: string]: string } }) => {
    try {
      return await tvEpisodesService.addRating({
        series_id,
        season_number,
        episode_number,
        session_id,
        data,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to add TV episode rating");
    }
  },
);

export const deleteTvEpisodeRating = cache(
  async ({
    series_id,
    season_number,
    episode_number,
    session_id,
  }: URLRatingTVEpisodesProps) => {
    try {
      return await tvEpisodesService.deleteRating({
        series_id,
        season_number,
        episode_number,
        session_id,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to delete TV episode rating");
    }
  },
);

export const getTvEpisodeGroupDetails = cache(
  async (tv_episode_group_id: string) => {
    try {
      return await tvEpisodesService.getTvEpisodeGroupsDetails(
        tv_episode_group_id,
      );
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV episode group details",
      );
    }
  },
);
