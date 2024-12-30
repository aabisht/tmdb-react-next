import {
  URLPageLanguageProps,
  URLDetailsPeopleProps,
  URLChangesPersonProps,
} from "@definitions";
import { personService } from "@services/tmdb/people";
import { cache } from "react";

export const getPopularPeople = cache(
  async ({ language, page }: URLPageLanguageProps) => {
    try {
      return await personService.getPopular({ language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch popular people");
    }
  },
);

export const getPersonDetails = cache(
  async ({ person_id, language }: URLDetailsPeopleProps) => {
    try {
      return await personService.getDetails({ person_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch person details");
    }
  },
);

export const getPersonChanges = cache(
  async ({ person_id, start_date, end_date, page }: URLChangesPersonProps) => {
    try {
      return await personService.getChanges({
        person_id,
        start_date,
        end_date,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch person changes");
    }
  },
);

export const getCombinedCredits = cache(
  async ({ person_id, language }: URLDetailsPeopleProps) => {
    try {
      return await personService.getCombinedCredits({ person_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch combined credits");
    }
  },
);

export const getPersonExternalIDs = cache(async (person_id: number) => {
  try {
    return await personService.getExternalIDs(person_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch person external IDs");
  }
});

export const getPersonImages = cache(async (person_id: number) => {
  try {
    return await personService.getImages(person_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch person images");
  }
});

export const getLatestPeople = cache(async () => {
  try {
    return await personService.getLatest();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch latest people");
  }
});

export const getPersonMovieCredits = cache(
  async ({ person_id, language }: URLDetailsPeopleProps) => {
    try {
      return await personService.getMovieCredits({ person_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch person movie credits");
    }
  },
);

export const getPersonTvCredits = cache(
  async ({ person_id, language }: URLDetailsPeopleProps) => {
    try {
      return await personService.getTvCredits({ person_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch person TV credits");
    }
  },
);

export const getPersonTranslations = cache(async (person_id: number) => {
  try {
    return await personService.getTranslations(person_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch person translations");
  }
});
