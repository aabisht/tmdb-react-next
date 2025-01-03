import { API_ROUTES } from "@constants";
import {
  URLCollectionSearchProps,
  URLMovieSearchProps,
  URLMultiSearchProps,
  URLSearchProps,
  URLTVSearchProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const searchService = {
  getCollection: async ({
    query,
    include_adult = false,
    language,
    page,
    region,
  }: URLCollectionSearchProps) =>
    createServiceRequest(
      API_ROUTES.SEARCH.collection({
        query,
        include_adult,
        language,
        page,
        region,
      }),
    ),
  getCompany: async ({ query, page }: URLSearchProps) =>
    createServiceRequest(API_ROUTES.SEARCH.company({ query, page })),
  getKeyword: async ({ query, page }: URLSearchProps) =>
    createServiceRequest(API_ROUTES.SEARCH.keyword({ query, page })),
  getMovie: async ({
    query,
    include_adult = false,
    language,
    page,
    region,
    year,
    primary_release_year,
  }: URLMovieSearchProps) =>
    createServiceRequest(
      API_ROUTES.SEARCH.movie({
        query,
        include_adult,
        language,
        page,
        region,
        year,
        primary_release_year,
      }),
    ),
  getMulti: async ({
    query,
    include_adult = false,
    language,
    page,
  }: URLMultiSearchProps) =>
    createServiceRequest(
      API_ROUTES.SEARCH.multi({
        query,
        include_adult,
        language,
        page,
      }),
    ),
  getPerson: async ({
    query,
    include_adult = false,
    language,
    page,
  }: URLMultiSearchProps) =>
    createServiceRequest(
      API_ROUTES.SEARCH.person({
        query,
        include_adult,
        language,
        page,
      }),
    ),
  getTv: async ({
    query,
    first_air_date_year,
    include_adult = false,
    language,
    page,
    year,
  }: URLTVSearchProps) =>
    createServiceRequest(
      API_ROUTES.SEARCH.tv({
        query,
        first_air_date_year,
        include_adult,
        language,
        page,
        year,
      }),
    ),
};
