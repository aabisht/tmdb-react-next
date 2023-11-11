export const getAPIURL = (): string => {
  return process.env.NEXT_PUBLIC_API_URL || "";
};

export const getBaseURL = (): string => {
  return process.env.NEXT_PUBLIC_BASE_URL || "";
};

export const getAPIKey = (): string => {
  return `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
};

export const getSessionID = (sessionId: string): string => {
  return `&session_id=${sessionId}`;
};

export const getLanguage = (language: string): string => {
  return `&language=${language}`;
};

export const getPageNumber = (page: number): string => {
  return `&page=${page}`;
};

export const getSortBy = (sortBy: string): string => {
  return `&sort_by=${sortBy}`;
};

export const getWithWatchMonetizationTypes = (
  withWatchMonetizationTypes: string,
): string => {
  return `&with_watch_monetization_types=${withWatchMonetizationTypes}`;
};

export const getIncludeAdult = (includeAdult: boolean): string => {
  return `&include_adult=${includeAdult}`;
};

export const getIncludeVideo = (includeAdult: boolean): string => {
  return `&include_video=${includeAdult}`;
};

export const getWatchRegion = (watchRegion: string): string => {
  return `&watch_region=${watchRegion}`;
};

export const getRegion = (region: string): string => {
  return `&region=${region}`;
};

export const getWatchProviders = (watchProviders: string): string => {
  return `&with_watch_providers=${watchProviders}`;
};

export const getWithGenres = (withGenres: string): string => {
  return `&with_genres=${withGenres}`;
};

export const getExternalSource = (externalSource: string): string => {
  return `&external_source=${externalSource}`;
};

export const getCountry = (country: string): string => {
  return `&country=${country}`;
};

export const getQuery = (query: string): string => {
  return `&query=${query}`;
};

export const getYear = (year: number): string => {
  return `&year=${year}`;
};

export const getPrimaryReleaseYear = (primaryReleaseYear: string): string => {
  return `&primary_release_year=${primaryReleaseYear}`;
};

export const getFirstAirDateYear = (firstAirDateYear: string): string => {
  return `&first_air_date_year=${firstAirDateYear}`;
};

export const getTotalSliderItems = (): number => {
  return parseInt(process.env.TOTAL_SLIDER_ITEMS || "");
};
