import { API_ROUTES, MEDIA } from "@constants";
import { FilterParameterProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const discoverService = {
  getMedia: async (mediaType: string, filterParameter?: FilterParameterProps) =>
    createServiceRequest(
      API_ROUTES.DISCOVER.getMediaDiscover({
        mediaType,
        filterParameter,
      }),
    ),
  getMovie: async (filterParameter?: FilterParameterProps) =>
    discoverService.getMedia(MEDIA.MOVIE, filterParameter),

  getTV: async (filterParameter?: FilterParameterProps) =>
    discoverService.getMedia(MEDIA.TV, filterParameter),
};
