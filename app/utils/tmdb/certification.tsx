import { certificationService } from "@services/tmdb/certification";
import { cache } from "react";

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
