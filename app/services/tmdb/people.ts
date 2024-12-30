import { API_ROUTES } from "@constants";
import {
  URLChangesPersonProps,
  URLDetailsPeopleProps,
  URLPageLanguageProps,
} from "@definitions";
import { createServiceRequest } from "../serviceRequest";

export const personService = {
  getPopular: ({ language, page }: URLPageLanguageProps) =>
    createServiceRequest(API_ROUTES.PEOPLE_LISTS.popular({ language, page })),
  getDetails: ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(API_ROUTES.PEOPLE.details({ person_id, language })),
  getChanges: ({
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
  getCombinedCredits: ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(
      API_ROUTES.PEOPLE.combinedCredits({ person_id, language }),
    ),
  getExternalIDs: (person_id: number) =>
    createServiceRequest(API_ROUTES.PEOPLE.externalIDs(person_id)),
  getImages: (person_id: number) =>
    createServiceRequest(API_ROUTES.PEOPLE.images(person_id)),
  getLatest: () => createServiceRequest(API_ROUTES.PEOPLE.latest()),
  getMovieCredits: ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(
      API_ROUTES.PEOPLE.movieCredits({ person_id, language }),
    ),
  getTvCredits: ({ person_id, language }: URLDetailsPeopleProps) =>
    createServiceRequest(API_ROUTES.PEOPLE.tvCredits({ person_id, language })),
  getTranslations: (person_id: number) =>
    createServiceRequest(API_ROUTES.PEOPLE.translations(person_id)),
};
