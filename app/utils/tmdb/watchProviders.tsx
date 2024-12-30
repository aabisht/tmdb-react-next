import { URLWatchProvidersProps } from "@definitions";
import { watchProvidersService } from "@services/tmdb/watchProviders";
import { cache } from "react";

export const getAvailableRegions = cache(async (language?: string) => {
  try {
    return await watchProvidersService.getAvailableRegions(language);
  } catch (error: any) {
    throw new Error(error.message || "Failed to get available regions");
  }
});

export const getMediaProviders = cache(
  async ({ mediaType, language, watch_region }: URLWatchProvidersProps) => {
    try {
      return await watchProvidersService.getMediaProviders({
        mediaType,
        language,
        watch_region,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get media providers");
    }
  },
);
