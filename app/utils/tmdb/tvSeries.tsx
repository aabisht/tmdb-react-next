import {
  URLDetailsTVProps,
  URLAccountStatesTVProps,
  URLChangesTVProps,
  URLListsTVProps,
} from "@definitions";
import { tvSeriesService } from "@services/tmdb/tvSeries";
import { cache } from "react";

export const getTvSeriesDetails = cache(
  async ({ series_id, language }: URLDetailsTVProps) => {
    try {
      return await tvSeriesService.getDetails({ series_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series details");
    }
  },
);

export const getTvSeriesAccountStates = cache(
  async ({ series_id, session_id }: URLAccountStatesTVProps) => {
    try {
      return await tvSeriesService.getAccountStates({ series_id, session_id });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV series account states",
      );
    }
  },
);

export const getTvSeriesAggregateCredits = cache(
  async ({ series_id, language }: URLDetailsTVProps) => {
    try {
      return await tvSeriesService.getAggregateCredits({ series_id, language });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV series aggregate credits",
      );
    }
  },
);

export const getTvSeriesAlternativeTitles = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getAlternativeTitles(series_id);
  } catch (error: any) {
    throw new Error(
      error.message || "Failed to get TV series alternative titles",
    );
  }
});

export const getTvSeriesChanges = cache(
  async ({ series_id, end_date, page, start_date }: URLChangesTVProps) => {
    try {
      return await tvSeriesService.getChanges({
        series_id,
        end_date,
        page,
        start_date,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series changes");
    }
  },
);

export const getTvSeriesContentRatings = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getContentRatings(series_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV series content ratings");
  }
});

export const getTvSeriesCredits = cache(
  async ({ series_id, language }: URLDetailsTVProps) => {
    try {
      return await tvSeriesService.getCredits({ series_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series credits");
    }
  },
);

export const getTvSeriesEpisodeGroups = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getEpisodeGroups(series_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV series episode groups");
  }
});

export const getTvSeriesExternalIDs = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getExternalIDs(series_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV series external IDs");
  }
});

export const getTvSeriesImages = cache(
  async ({ series_id, language }: URLDetailsTVProps) => {
    try {
      return await tvSeriesService.getImages({ series_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series images");
    }
  },
);

export const getTvSeriesKeywords = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getKeywords(series_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV series keywords");
  }
});

export const getTvSeriesLatest = cache(async () => {
  try {
    return await tvSeriesService.getLatest();
  } catch (error: any) {
    throw new Error(error.message || "Failed to get latest TV series");
  }
});

export const getTvSeriesLists = cache(
  async ({ series_id, language, page }: URLListsTVProps) => {
    try {
      return await tvSeriesService.getLists({ series_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series lists");
    }
  },
);

export const getTvSeriesRecommendations = cache(
  async ({ series_id, language, page }: URLListsTVProps) => {
    try {
      return await tvSeriesService.getRecommendations({
        series_id,
        language,
        page,
      });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV series recommendations",
      );
    }
  },
);

export const getTvSeriesReviews = cache(
  async ({ series_id, language, page }: URLListsTVProps) => {
    try {
      return await tvSeriesService.getReviews({ series_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series reviews");
    }
  },
);

export const getTvSeriesScreenedTheatrically = cache(
  async (series_id: string) => {
    try {
      return await tvSeriesService.getScreenedTheatrically(series_id);
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to get TV series screened theatrically",
      );
    }
  },
);

export const getTvSeriesSimilar = cache(
  async ({ series_id, language, page }: URLListsTVProps) => {
    try {
      return await tvSeriesService.getSimilar({ series_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get similar TV series");
    }
  },
);

export const getTvSeriesTranslations = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getTranslations(series_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV series translations");
  }
});

export const getTvSeriesVideos = cache(
  async ({ series_id, language }: URLDetailsTVProps) => {
    try {
      return await tvSeriesService.getVideos({ series_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get TV series videos");
    }
  },
);

export const getTvSeriesWatchProviders = cache(async (series_id: string) => {
  try {
    return await tvSeriesService.getWatchProviders(series_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get TV series watch providers");
  }
});

export const addTvSeriesRating = cache(
  async ({
    series_id,
    session_id,
    data,
  }: URLAccountStatesTVProps & { data: { [key: string]: string } }) => {
    try {
      return await tvSeriesService.addRating({ series_id, session_id, data });
    } catch (error: any) {
      throw new Error(error.message || "Failed to add TV series rating");
    }
  },
);

export const deleteTvSeriesRating = cache(
  async ({ series_id, session_id }: URLAccountStatesTVProps) => {
    try {
      return await tvSeriesService.deleteRating({ series_id, session_id });
    } catch (error: any) {
      throw new Error(error.message || "Failed to delete TV series rating");
    }
  },
);
