import {
  URLCollectionSearchProps,
  URLSearchProps,
  URLMovieSearchProps,
  URLMultiSearchProps,
  URLTVSearchProps,
} from "@definitions";
import { searchService } from "@services/tmdb/search";
import { cache } from "react";

export const searchCollection = cache(
  async ({
    query,
    include_adult = false,
    language,
    page,
    region,
  }: URLCollectionSearchProps) => {
    try {
      return await searchService.getCollection({
        query,
        include_adult,
        language,
        page,
        region,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to search collection");
    }
  },
);

export const searchCompany = cache(async ({ query, page }: URLSearchProps) => {
  try {
    return await searchService.getCompany({ query, page });
  } catch (error: any) {
    throw new Error(error.message || "Failed to search company");
  }
});

export const searchKeyword = cache(async ({ query, page }: URLSearchProps) => {
  try {
    return await searchService.getKeyword({ query, page });
  } catch (error: any) {
    throw new Error(error.message || "Failed to search keyword");
  }
});

export const searchMovie = cache(
  async ({
    query,
    include_adult = false,
    language,
    page,
    region,
    year,
    primary_release_year,
  }: URLMovieSearchProps) => {
    try {
      return await searchService.getMovie({
        query,
        include_adult,
        language,
        page,
        region,
        year,
        primary_release_year,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to search movie");
    }
  },
);

export const searchMulti = cache(
  async ({
    query,
    include_adult = false,
    language,
    page,
  }: URLMultiSearchProps) => {
    try {
      return await searchService.getMulti({
        query,
        include_adult,
        language,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to search multiple types");
    }
  },
);

export const searchPerson = cache(
  async ({
    query,
    include_adult = false,
    language,
    page,
  }: URLMultiSearchProps) => {
    try {
      return await searchService.getPerson({
        query,
        include_adult,
        language,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to search person");
    }
  },
);

export const searchTv = cache(
  async ({
    query,
    first_air_date_year,
    include_adult = false,
    language,
    page,
    year,
  }: URLTVSearchProps) => {
    try {
      return await searchService.getTv({
        query,
        first_air_date_year,
        include_adult,
        language,
        page,
        year,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to search TV shows");
    }
  },
);
