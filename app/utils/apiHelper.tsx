import { SORT_BY } from "@constants";

export const getAPIURL = () => {
  return process.env.NEXT_API_URL;
};

export const getAPINewURL = () => {
  return process.env.NEXT_API_URL_NEW;
};

export const getAPIKey = () => {
  return `?api_key=${process.env.NEXT_API_KEY}`;
};

export const getAPIReadAccessToken = () => {
  return process.env.NEXT_API_READ_ACCESS_TOKEN ?? "";
};

export const getImageURL = () => {
  return process.env.NEXT_API_IMAGE_URL;
};

export const getSessionID = (sessionId?: string) => {
  return sessionId ? `&session_id=${sessionId}` : null;
};

export const getLanguage = (language: string = "en-US") => {
  return `&language=${language}`;
};

export const getPageNumber = (page: number = 1) => {
  return `&page=${page}`;
};

export const getSortBy = (sortBy: string = SORT_BY.CREATED_AT_ASC) => {
  return `&sort_by=${sortBy}`;
};

export const getWithWatchMonetizationTypes = (
  withWatchMonetizationTypes: string,
) => {
  return `&with_watch_monetization_types=${withWatchMonetizationTypes}`;
};

export const getIncludeAdult = (includeAdult: boolean) => {
  return `&include_adult=${includeAdult}`;
};

export const getIncludeVideo = (includeAdult: boolean) => {
  return `&include_video=${includeAdult}`;
};

export const getWatchRegion = (watchRegion: string) => {
  return `&watch_region=${watchRegion}`;
};

export const getRegion = (region?: string) => {
  return region ? `&region=${region}` : null;
};

export const getWatchProviders = (watchProviders?: string) => {
  return watchProviders ? `&with_watch_providers=${watchProviders}` : null;
};

export const getWithGenres = (withGenres: string) => {
  return `&with_genres=${withGenres}`;
};

export const getExternalSource = (externalSource: string) => {
  return `&external_source=${externalSource}`;
};

export const getCountry = (country?: string) => {
  return country ? `&country=${country}` : null;
};

export const getQuery = (query: string) => {
  return `&query=${query}`;
};

export const getYear = (year?: string) => {
  return year ? `&year=${year}` : null;
};

export const getPrimaryReleaseYear = (primaryReleaseYear?: string) => {
  return primaryReleaseYear
    ? `&primary_release_year=${primaryReleaseYear}`
    : null;
};

export const getFirstAirDateYear = (firstAirDateYear?: string) => {
  return firstAirDateYear ? `&first_air_date_year=${firstAirDateYear}` : null;
};

export const getMovieId = (movieId: number) => {
  return `&movie_id=${movieId}`;
};

export const getConfirmStatus = (confirmStatus: boolean) => {
  return `&confirm=${confirmStatus}`;
};

export const getEndDate = (date?: Date) => {
  return date ? `&end_date=${date}` : null;
};

export const getStartDate = (date?: Date) => {
  return date ? `&start_date=${date}` : null;
};

export const getTimezone = (timezone?: string) => {
  return timezone ? `&timezone=${timezone}` : null;
};
