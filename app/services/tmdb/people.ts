import { API_ROUTES } from "@constants";
import {
  URLChangesPersonProps,
  URLDetailsPeopleProps,
  URLPageLanguageProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const personService = {
  getPopular: async ({ language, page }: URLPageLanguageProps) =>
    createServiceRequest(API_ROUTES.PEOPLE_LISTS.popular({ language, page })),
  getDetails: async ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(API_ROUTES.PEOPLE.details({ person_id, language })),
  getChanges: async ({
    person_id,
    end_date,
    page,
    start_date,
  }: URLChangesPersonProps) =>
    createServiceRequest(
      API_ROUTES.PEOPLE.changes({
        person_id,
        end_date,
        page,
        start_date,
      }),
    ),
  getCombinedCredits: async ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(
      API_ROUTES.PEOPLE.combinedCredits({ person_id, language }),
    ),
  getExternalIDs: async (person_id: number) =>
    createServiceRequest(API_ROUTES.PEOPLE.externalIDs(person_id)),
  getImages: async (person_id: number) =>
    createServiceRequest(API_ROUTES.PEOPLE.images(person_id)),
  getLatest: async () => createServiceRequest(API_ROUTES.PEOPLE.latest()),
  getMovieCredits: async ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(
      API_ROUTES.PEOPLE.movieCredits({ person_id, language }),
    ),
  getTvCredits: async ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(API_ROUTES.PEOPLE.tvCredits({ person_id, language })),
  getTranslations: async (person_id: number) =>
    createServiceRequest(API_ROUTES.PEOPLE.translations(person_id)),
};
