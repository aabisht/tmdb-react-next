export type URLPageLanguageProps = {
  language?: string;
  page?: number;
};

export type URLStartDatePageEndDateProps = {
  end_date?: Date;
  page?: number;
  start_date?: Date;
};

export type URLAccountDetailProps = {
  account_id: number;
  session_id?: string;
};

export type URLAccountFavoriteProps = URLAccountDetailProps & {
  mediaType: string;
  language?: string;
  page?: number;
  sortBy?: string;
};

export type URLListsProps = URLAccountDetailProps & {
  language?: string;
  page?: number;
};

export type URLRatedProps = URLAccountFavoriteProps & {
  episodes?: boolean;
};

export type URLCollectionProps = {
  collection_id: string;
  language?: string;
};

export type URLFINDProps = {
  external_id: string;
  external_source: string;
  language?: string;
};

export type URLGenreProps = {
  mediaType: string;
  language?: string;
};

export type URLAddMovieListProps = {
  list_id: number;
  session_id: string;
};

export type URLCheckItemStatusListProps = {
  list_id: number;
  language: string;
  movie_id: number;
};

export type URClearListLProps = URLAddMovieListProps & {
  confirm?: boolean;
};

export type URLDetailsListProps = URLPageLanguageProps & {
  list_id: number;
};

export type URLNowPlayingMovieProps = URLPageLanguageProps & {
  region?: string;
};

export type URLDetailsMovieProps = {
  movie_id: number;
  language?: string;
};

export type URLAccountStatesMovieProps = {
  movie_id: number;
  session_id?: string;
};

export type URLAlternativeTitlesMovieProps = {
  movie_id: number;
  country?: string;
};

export type URLChangesMovieProps = URLStartDatePageEndDateProps & {
  movie_id: number;
};

export type URLListsMovieProps = URLDetailsMovieProps & {
  page?: number;
};

export type URLDetailsPeopleProps = {
  person_id: number;
  language?: string;
};

export type URLChangesPersonProps = URLStartDatePageEndDateProps & {
  person_id: number;
};

export type URLMultiSearchProps = URLPageLanguageProps & {
  query: string;
  include_adult?: boolean;
};

export type URLCollectionSearchProps = URLMultiSearchProps & {
  region?: string;
};

export type URLSearchProps = {
  query: string;
  page?: number;
};

export type URLMovieSearchProps = URLMultiSearchProps & {
  region?: string;
  year?: string;
  primary_release_year?: string;
};

export type URLTVSearchProps = URLMultiSearchProps & {
  year?: string;
  first_air_date_year?: string;
};

export type URLTrendingProps = URLPageLanguageProps & {
  time_window?: string;
};

export type URLAiringTodayTVProps = URLPageLanguageProps & {
  timezone?: string;
};

export type URLDetailsTVProps = {
  series_id: number;
  language?: string;
};

export type URLAccountStatesTVProps = {
  series_id: number;
  session_id?: string;
};

export type URLChangesTVProps = URLStartDatePageEndDateProps & {
  series_id: number;
};

export type URLListsTVProps = URLPageLanguageProps & {
  series_id: number;
};

export type URLDetailsTVSeasonsProps = URLDetailsTVProps & {
  season_number: number;
};

export type URLChangesTVSeasonsProps = URLStartDatePageEndDateProps & {
  season_id: number;
};

export type URLTVSeriesSeasonsProps = {
  series_id: number;
  season_number: number;
};

export type URLTVSeriesSeasonsEpisodesProps = URLTVSeriesSeasonsProps & {
  episode_number: number;
};

export type URLDetailsTVEpisodesProps = URLTVSeriesSeasonsEpisodesProps & {
  language?: string;
};

export type URLRatingTVEpisodesProps = URLTVSeriesSeasonsEpisodesProps & {
  session_id?: string;
};

export type URLWatchProvidersProps = {
  mediaType: string;
  language?: string;
  watch_region?: string;
};
