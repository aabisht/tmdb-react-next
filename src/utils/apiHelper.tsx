export const getAPIURL = () => {
  return process.env.NEXT_PUBLIC_API_URL;
};

export const getAPIKey = () => {
  return `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
};

export const getSessionID = (sessionId: string) => {
  return `&session_id=${sessionId}`;
};

export const getLanguage = (language: string) => {
  return `&language=${language}`;
};

export const getPageNumber = (page: number) => {
  return `&page=${page}`;
};

export const getSortBy = (sortBy: string) => {
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

export const getRegion = (region: string) => {
  return `&region=${region}`;
};

export const getWatchProviders = (watchProviders: string) => {
  return `&with_watch_providers=${watchProviders}`;
};

export const getWithGenres = (withGenres: string) => {
  return `&with_genres=${withGenres}`;
};

export const getExternalSource = (externalSource: string) => {
  return `&external_source=${externalSource}`;
};

export const getCountry = (country: string) => {
  return `&country=${country}`;
};

export const getQuery = (query: string) => {
  return `&query=${query}`;
};

export const getYear = (year: number) => {
  return `&year=${year}`;
};

export const getPrimaryReleaseYear = (primaryReleaseYear: string) => {
  return `&primary_release_year=${primaryReleaseYear}`;
};

export const getFirstAirDateYear = (firstAirDateYear: string) => {
  return `&first_air_date_year=${firstAirDateYear}`;
};
