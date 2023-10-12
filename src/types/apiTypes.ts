export type IApiData = any;

export type IFilterParameter = {
  includeAdult?: boolean;
  includeVideo?: boolean;
  language?: string;
  page?: number;
  year?: number;
  watchRegion?: string;
  sortBy?: string;
  withWatchMonetizationTypes?: string;
  withWatchProviders?: string;
  withGenres?: string;
};
