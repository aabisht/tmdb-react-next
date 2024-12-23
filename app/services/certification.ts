import { getAPIReadAccessToken } from "@utils/apiHelper";
import { httpService } from "./httpService";
import { API_ROUTES, MEDIA } from "@constants";
import { cache } from "react";

const certificationService = {
  movieCertification: async () =>
    httpService(
      API_ROUTES.CERTIFICATION.getMediaCertifications(MEDIA.MOVIE),
      getAPIReadAccessToken(),
    ),

  tvCertification: async () =>
    httpService(
      API_ROUTES.CERTIFICATION.getMediaCertifications(MEDIA.TV),
      getAPIReadAccessToken(),
    ),
};

export const getCertificationMovie = cache(async () => {
  try {
    return await certificationService.movieCertification();
  } catch (error: any) {
    throw new Error(error);
  }
});

export const getCertificationTV = cache(async () => {
  try {
    return await certificationService.tvCertification();
  } catch (error: any) {
    throw new Error(error);
  }
});
