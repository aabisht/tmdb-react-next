import { API_ROUTES, MEDIA } from "@constants";
import { createServiceRequest } from "@services/serviceRequest";

export const certificationService = {
  movieCertification: async () =>
    createServiceRequest(
      API_ROUTES.CERTIFICATION.getMediaCertifications(MEDIA.MOVIE),
    ),
  tvCertification: async () =>
    createServiceRequest(
      API_ROUTES.CERTIFICATION.getMediaCertifications(MEDIA.TV),
    ),
};
