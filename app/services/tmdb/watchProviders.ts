import { API_ROUTES } from "@constants";
import { URLWatchProvidersProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const watchProvidersService = {
  getAvailableRegions: async (language?: string) =>
    createServiceRequest(API_ROUTES.WATCH_PROVIDERS.availableRegions(language)),
  getMediaProviders: async ({
    mediaType,
    language,
    watch_region,
  }: URLWatchProvidersProps) =>
    createServiceRequest(
      API_ROUTES.WATCH_PROVIDERS.mediaProviders({
        mediaType,
        language,
        watch_region,
      }),
    ),
};
