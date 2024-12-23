import { MEDIA, TIME_WINDOW } from "@constants";
import {
  URLAccountDetailProps,
  FilterParameterProps,
  URLAccountFavoriteProps,
  URLListsProps,
  URLRatedProps,
  URLCollectionProps,
  URLFINDProps,
  URLGenreProps,
  URLAddMovieListProps,
  URLCheckItemStatusListProps,
  URClearListLProps,
  URLDetailsListProps,
  URLNowPlayingMovieProps,
  URLDetailsMovieProps,
  URLAccountStatesMovieProps,
  URLAlternativeTitlesMovieProps,
  URLChangesMovieProps,
  URLListsMovieProps,
  URLPageLanguageProps,
  URLDetailsPeopleProps,
  URLChangesPersonProps,
  URLCollectionSearchProps,
  URLSearchProps,
  URLMovieSearchProps,
  URLMultiSearchProps,
  URLTVSearchProps,
  URLTrendingProps,
  URLAiringTodayTVProps,
  URLDetailsTVProps,
  URLAccountStatesTVProps,
  URLChangesTVProps,
  URLListsTVProps,
  URLDetailsTVSeasonsProps,
  URLChangesTVSeasonsProps,
  URLTVSeriesSeasonsProps,
  URLDetailsTVEpisodesProps,
  URLTVSeriesSeasonsEpisodesProps,
  URLRatingTVEpisodesProps,
  URLWatchProvidersProps,
} from "@definitions";
import {
  getAPIURL,
  getSessionID,
  getLanguage,
  getPageNumber,
  getSortBy,
  getExternalSource,
  getIncludeAdult,
  getIncludeVideo,
  getYear,
  getWatchRegion,
  getWithWatchMonetizationTypes,
  getWatchProviders,
  getWithGenres,
  getMovieId,
  getConfirmStatus,
  getRegion,
  getCountry,
  getEndDate,
  getStartDate,
  getQuery,
  getPrimaryReleaseYear,
  getFirstAirDateYear,
  getTimezone,
} from "@utils/apiHelper";

export const API_TYPE: {
  [key: string]: string;
} = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

export const API_BASE_URL: { [key: string]: string } = {
  account: `${getAPIURL()}/account`,
  authentication: `${getAPIURL()}/authentication`,
  certification: `${getAPIURL()}/certification`,
  collection: `${getAPIURL()}/collection`,
  configuration: `${getAPIURL()}/configuration`,
  credit: `${getAPIURL()}/credit`,
  discover: `${getAPIURL()}/discover`,
  find: `${getAPIURL()}/find`,
  genre: `${getAPIURL()}/genre`,
  genres: `${getAPIURL()}/genre`,
  list: `${getAPIURL()}/list`,
  movie: `${getAPIURL()}/movie`,
  network: `${getAPIURL()}/network`,
  person: `${getAPIURL()}/person`,
  review: `${getAPIURL()}/review`,
  search: `${getAPIURL()}/search`,
  trending: `${getAPIURL()}/trending`,
  tv: `${getAPIURL()}/tv`,
  watch: `${getAPIURL()}/watch`,
};

export const API_ROUTES = {
  ACCOUNT: {
    // Get your account details.
    getAccountDetail: ({ account_id, session_id }: URLAccountDetailProps) =>
      `${API_BASE_URL.account}/${account_id}?${getSessionID(session_id)}`,

    // Mark a movie or TV show as a favourite.
    addToFavorite: ({ account_id, session_id }: URLAccountDetailProps) =>
      `${API_BASE_URL.account}/${account_id}/favorite?${getSessionID(session_id)}`,

    // Add a movie or TV show to your watchlist.
    addToWatchlist: ({ account_id, session_id }: URLAccountDetailProps) =>
      `${API_BASE_URL.account}/${account_id}/watchlist?${getSessionID(session_id)}`,

    // Get the list of your favorite movies or TV shows.
    getFavorite: ({
      mediaType,
      account_id,
      language,
      page,
      sortBy,
      session_id,
    }: URLAccountFavoriteProps) =>
      `${API_BASE_URL.account}/${account_id}/favorite/${mediaType}${getLanguage(
        language,
      )}${getSessionID(session_id)}${getSortBy(sortBy)}${getPageNumber(page)}`,

    // Get a users list of custom lists.
    getLists: ({ account_id, session_id, language, page }: URLListsProps) =>
      `${API_BASE_URL.account}/${account_id}/lists${getLanguage(
        language,
      )}${getSessionID(session_id)}${getPageNumber(page)}`,

    // Get a list of all the movies, TV shows and TV episodes user have rated.
    getRated: ({
      session_id,
      mediaType,
      account_id,
      episodes = false,
      language,
      page,
      sortBy,
    }: URLRatedProps) =>
      `${API_BASE_URL.account}/${account_id}/rated/${mediaType}${episodes ?? MEDIA.EPISODES}${getLanguage(
        language,
      )}${getSessionID(session_id)}${getSortBy(sortBy)}${getPageNumber(page)}`,

    // Get a list of all the movies or TV shows you have added to your watchlist.
    getWatchlist: ({
      session_id,
      mediaType,
      account_id,
      language,
      page,
      sortBy,
    }: URLAccountFavoriteProps) =>
      `${API_BASE_URL.account}/${account_id}/watchlist/${mediaType}${getLanguage(
        language,
      )}${getSessionID(session_id)}${getSortBy(sortBy)}${getPageNumber(page)}`,
  },
  AUTHENTICATION: {
    getRequestToken: () => `${API_BASE_URL.authentication}/token/new`,
    createSession: () => `${API_BASE_URL.authentication}/session/new`,
    createSessionWithLogin: () =>
      `${API_BASE_URL.authentication}/token/validate_with_login`,
    deleteSession: () => `${API_BASE_URL.authentication}/session`,
  },
  CERTIFICATION: {
    getMediaCertifications: (mediaType: string) =>
      `${API_BASE_URL.certification}/${mediaType}/list`,
  },
  COLLECTION: {
    getDetails: ({ collection_id, language }: URLCollectionProps) =>
      `${API_BASE_URL.collection}/${collection_id}${getLanguage(language)}`,
    getImages: ({ collection_id, language }: URLCollectionProps) =>
      `${
        API_BASE_URL.collection
      }/${collection_id}/images${getLanguage(language)}`,
    getTranslations: ({ collection_id, language }: URLCollectionProps) =>
      `${
        API_BASE_URL.collection
      }/${collection_id}/translations${getLanguage(language)}`,
  },
  CONFIGURATION: {
    getAPIConfiguration: () => `${API_BASE_URL.configuration}`,
    getCountries: (language?: string) =>
      `${API_BASE_URL.configuration}/countries${getLanguage(language)}`,
    getJobs: () => `${API_BASE_URL.configuration}/jobs`,
    getLanguages: () => `${API_BASE_URL.configuration}/languages`,
    getPrimaryTranslations: () =>
      `${API_BASE_URL.configuration}/primary_translations`,
    getTimezones: () => `${API_BASE_URL.configuration}/timezones`,
  },
  CREDIT: {
    getCreditDetails: (credit_id: string) =>
      `${API_BASE_URL.credit}/${credit_id}`,
  },
  DISCOVER: {
    getMediaDiscover: ({
      mediaType,
      filterParameter,
    }: {
      mediaType: string;
      filterParameter?: FilterParameterProps;
    }) =>
      `${API_BASE_URL.discover}/${mediaType}${
        filterParameter && getFilterParameterURL(filterParameter)
      }`,
  },
  FIND: {
    getFindByID: ({ external_id, external_source, language }: URLFINDProps) =>
      `${API_BASE_URL.find}/${external_id}${getLanguage(
        language,
      )}${getExternalSource(external_source)}`,
  },
  GENRES: {
    getGenresList: ({ mediaType, language }: URLGenreProps) =>
      `${API_BASE_URL.genre}/${mediaType}/list${getLanguage(language)}`,
  },
  LISTS: {
    addMovie: ({ list_id, session_id }: URLAddMovieListProps) =>
      `${API_BASE_URL.list}/${list_id}/add_item${getSessionID(session_id)}`,
    checkItemStatus: ({
      list_id,
      language,
      movie_id,
    }: URLCheckItemStatusListProps) =>
      `${API_BASE_URL.list}/${list_id}/item_status${getLanguage(language)}${getMovieId(movie_id)}`,
    clear: ({ list_id, session_id, confirm = false }: URClearListLProps) =>
      `${API_BASE_URL.list}/${list_id}/clear${getSessionID(session_id)}${getConfirmStatus(confirm)}`,
    create: (session_id: string) =>
      `${API_BASE_URL.list}${getSessionID(session_id)}`,
    delete: ({ list_id, session_id }: URLAddMovieListProps) =>
      `${API_BASE_URL.list}/${list_id}${getSessionID(session_id)}`,
    details: ({ list_id, language, page }: URLDetailsListProps) =>
      `${API_BASE_URL.list}/${list_id}${getLanguage(language)}${getPageNumber(page)}`,
    removeMovie: ({ list_id, session_id }: URLAddMovieListProps) =>
      `${API_BASE_URL.list}/${list_id}/remove_item${getSessionID(session_id)}`,
  },
  MOVIE_LISTS: {
    nowPlaying: ({ language, page, region }: URLNowPlayingMovieProps) =>
      `${API_BASE_URL.movie}/now_playing${getLanguage(language)}${getPageNumber(page)}${getRegion(region)}`,
    popular: ({ language, page, region }: URLNowPlayingMovieProps) =>
      `${API_BASE_URL.movie}/popular${getLanguage(language)}${getPageNumber(page)}${getRegion(region)}`,
    topRated: ({ language, page, region }: URLNowPlayingMovieProps) =>
      `${API_BASE_URL.movie}/top_rated${getLanguage(language)}${getPageNumber(page)}${getRegion(region)}`,
    upcoming: ({ language, page, region }: URLNowPlayingMovieProps) =>
      `${API_BASE_URL.movie}/upcoming${getLanguage(language)}${getPageNumber(page)}${getRegion(region)}`,
  },
  MOVIES: {
    details: ({ movie_id, language }: URLDetailsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}${getLanguage(language)}`,
    accountStates: ({ movie_id, session_id }: URLAccountStatesMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/account_states${getSessionID(session_id)}`,
    alternativeTitles: ({
      movie_id,
      country,
    }: URLAlternativeTitlesMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/alternative_titles${getCountry(country)}`,
    changes: ({ movie_id, end_date, page, start_date }: URLChangesMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/changes${getEndDate(end_date)}${getPageNumber(page)}${getStartDate(start_date)}`,
    credits: ({ movie_id, language }: URLDetailsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/credits${getLanguage(language)}`,
    externalIDs: (movie_id: number) =>
      `${API_BASE_URL.movie}/${movie_id}/external_ids`,
    images: ({ movie_id, language }: URLDetailsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/images${getLanguage(language)}`,
    keywords: (movie_id: number) =>
      `${API_BASE_URL.movie}/${movie_id}/keywords`,
    latest: () => `${API_BASE_URL.movie}/latest`,
    lists: ({ movie_id, language, page }: URLListsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/lists${getLanguage(language)}${getPageNumber(page)}`,
    recommendations: ({ movie_id, language, page }: URLListsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/recommendations${getLanguage(language)}${getPageNumber(page)}`,
    releaseDates: (movie_id: number) =>
      `${API_BASE_URL.movie}/${movie_id}/release_dates`,
    reviews: ({ movie_id, language, page }: URLListsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/reviews${getLanguage(language)}${getPageNumber(page)}`,
    similar: ({ movie_id, language, page }: URLListsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/similar${getLanguage(language)}${getPageNumber(page)}`,
    translations: (movie_id: number) =>
      `${API_BASE_URL.movie}/${movie_id}/translations`,
    videos: ({ movie_id, language }: URLDetailsMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/videos${getLanguage(language)}`,
    watchProviders: (movie_id: number) =>
      `${API_BASE_URL.movie}/${movie_id}/watch/providers`,
    addRating: ({ movie_id, session_id }: URLAccountStatesMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/rating${getSessionID(session_id)}`,
    deleteRating: ({ movie_id, session_id }: URLAccountStatesMovieProps) =>
      `${API_BASE_URL.movie}/${movie_id}/rating${getSessionID(session_id)}`,
  },
  NETWORKS: {
    details: (network_id: number) => `${API_BASE_URL.movie}/${network_id}`,
    alternativeNames: (network_id: number) =>
      `${API_BASE_URL.movie}/${network_id}/alternative_names`,
    images: (network_id: number) =>
      `${API_BASE_URL.movie}/${network_id}/images`,
  },
  PEOPLE_LISTS: {
    popular: ({ language, page }: URLPageLanguageProps) =>
      `${API_BASE_URL.person}/popular${getLanguage(language)}${getPageNumber(page)}`,
  },
  PEOPLE: {
    details: ({ person_id, language }: URLDetailsPeopleProps) =>
      `${API_BASE_URL.person}/${person_id}${getLanguage(language)}`,
    changes: ({
      person_id,
      end_date,
      page,
      start_date,
    }: URLChangesPersonProps) =>
      `${API_BASE_URL.person}/${person_id}/changes${getEndDate(end_date)}${getPageNumber(page)}${getStartDate(start_date)}`,
    combinedCredits: ({ person_id, language }: URLDetailsPeopleProps) =>
      `${API_BASE_URL.person}/${person_id}/combined_credits${getLanguage(language)}`,
    externalIDs: (person_id: number) =>
      `${API_BASE_URL.person}/${person_id}/external_ids`,
    images: (person_id: number) => `${API_BASE_URL.person}/${person_id}/images`,
    latest: () => `${API_BASE_URL.person}/latest`,
    movieCredits: ({ person_id, language }: URLDetailsPeopleProps) =>
      `${API_BASE_URL.person}/${person_id}/movie_credits${getLanguage(language)}`,
    tvCredits: ({ person_id, language }: URLDetailsPeopleProps) =>
      `${API_BASE_URL.person}/${person_id}/tv_credits${getLanguage(language)}`,
    translations: (person_id: number) =>
      `${API_BASE_URL.person}/${person_id}/translations`,
  },
  REVIEWS: {
    details: (review_id: number) => `${API_BASE_URL.review}/${review_id}`,
  },
  SEARCH: {
    collection: ({
      query,
      include_adult = false,
      language,
      page,
      region,
    }: URLCollectionSearchProps) =>
      `${API_BASE_URL.search}/collection${getQuery(query)}${getIncludeAdult(include_adult)}${getLanguage(language)}${getPageNumber(page)}${getRegion(region)}`,
    company: ({ query, page }: URLSearchProps) =>
      `${API_BASE_URL.search}/company${getQuery(query)}${getPageNumber(page)}`,
    keyword: ({ query, page }: URLSearchProps) =>
      `${API_BASE_URL.search}/keyword${getQuery(query)}${getPageNumber(page)}`,
    movie: ({
      query,
      include_adult = false,
      language,
      page,
      region,
      year,
      primary_release_year,
    }: URLMovieSearchProps) =>
      `${API_BASE_URL.search}/movie${getQuery(query)}${getIncludeAdult(include_adult)}${getLanguage(language)}${getPrimaryReleaseYear(primary_release_year)}${getPageNumber(page)}${getRegion(region)}${getYear(year)}`,
    multi: ({
      query,
      include_adult = false,
      language,
      page,
    }: URLMultiSearchProps) =>
      `${API_BASE_URL.search}/multi${getQuery(query)}${getIncludeAdult(include_adult)}${getLanguage(language)}${getPageNumber(page)}`,
    person: ({
      query,
      include_adult = false,
      language,
      page,
    }: URLMultiSearchProps) =>
      `${API_BASE_URL.search}/person${getQuery(query)}${getIncludeAdult(include_adult)}${getLanguage(language)}${getPageNumber(page)}`,
    tv: ({
      query,
      first_air_date_year,
      include_adult = false,
      language,
      page,
      year,
    }: URLTVSearchProps) =>
      `${API_BASE_URL.search}/tv${getQuery(query)}${getFirstAirDateYear(first_air_date_year)}${getIncludeAdult(include_adult)}${getLanguage(language)}${getPageNumber(page)}${getYear(year)}`,
  },
  TRENDING: {
    all: ({
      time_window = TIME_WINDOW.DAY,
      language,
      page,
    }: URLTrendingProps) =>
      `${API_BASE_URL.trending}/all/${time_window}${getLanguage(language)}${getPageNumber(page)}`,
    movie: ({
      time_window = TIME_WINDOW.DAY,
      language,
      page,
    }: URLTrendingProps) =>
      `${API_BASE_URL.trending}/movie/${time_window}${getLanguage(language)}${getPageNumber(page)}`,
    person: ({
      time_window = TIME_WINDOW.DAY,
      language,
      page,
    }: URLTrendingProps) =>
      `${API_BASE_URL.trending}/person/${time_window}${getLanguage(language)}${getPageNumber(page)}`,
    tv: ({ time_window = TIME_WINDOW.DAY, language, page }: URLTrendingProps) =>
      `${API_BASE_URL.trending}/tv/${time_window}${getLanguage(language)}${getPageNumber(page)}`,
  },
  TV_SERIES_LISTS: {
    airingToday: ({ language, page, timezone }: URLAiringTodayTVProps) =>
      `${API_BASE_URL.tv}/airing_today${getLanguage(language)}${getPageNumber(page)}${getTimezone(timezone)}`,
    onTheAir: ({ language, page, timezone }: URLAiringTodayTVProps) =>
      `${API_BASE_URL.tv}/on_the_air${getLanguage(language)}${getPageNumber(page)}${getTimezone(timezone)}`,
    popular: ({ language, page }: URLPageLanguageProps) =>
      `${API_BASE_URL.tv}/popular${getLanguage(language)}${getPageNumber(page)}`,
    topRated: ({ language, page }: URLPageLanguageProps) =>
      `${API_BASE_URL.tv}/top_rated${getLanguage(language)}${getPageNumber(page)}`,
  },
  TV_SERIES: {
    details: ({ series_id, language }: URLDetailsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}${getLanguage(language)}`,
    accountStates: ({ series_id, session_id }: URLAccountStatesTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/account_states${getSessionID(session_id)}`,
    aggregateCredits: ({ series_id, language }: URLDetailsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/aggregate_credits${getLanguage(language)}`,
    alternativeTitles: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/alternative_titles`,
    changes: ({ series_id, end_date, page, start_date }: URLChangesTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/changes${getEndDate(end_date)}${getPageNumber(page)}${getStartDate(start_date)}`,
    contentRatings: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/content_ratings`,
    credits: ({ series_id, language }: URLDetailsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/credits${getLanguage(language)}`,
    episodeGroups: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/episode_groups`,
    externalIDs: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/external_ids`,
    images: ({ series_id, language }: URLDetailsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/images${getLanguage(language)}`,
    keywords: (series_id: string) => `${API_BASE_URL.tv}/${series_id}/keywords`,
    latest: () => `${API_BASE_URL.tv}/latest`,
    lists: ({ series_id, language, page }: URLListsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/lists${getLanguage(language)}${getPageNumber(page)}`,
    recommendations: ({ series_id, language, page }: URLListsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/recommendations${getLanguage(language)}${getPageNumber(page)}`,
    reviews: ({ series_id, language, page }: URLListsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/reviews${getLanguage(language)}${getPageNumber(page)}`,
    screenedTheatrically: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/screened_theatrically`,
    similar: ({ series_id, language, page }: URLListsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/similar${getLanguage(language)}${getPageNumber(page)}`,
    translations: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/translations`,
    videos: ({ series_id, language }: URLDetailsTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/videos${getLanguage(language)}`,
    watchProviders: (series_id: string) =>
      `${API_BASE_URL.tv}/${series_id}/watch/providers`,
    addRating: ({ series_id, session_id }: URLAccountStatesTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/rating${getSessionID(session_id)}`,
    deleteRating: ({ series_id, session_id }: URLAccountStatesTVProps) =>
      `${API_BASE_URL.tv}/${series_id}/rating${getSessionID(session_id)}`,
  },
  TV_SEASONS: {
    details: ({
      series_id,
      season_number,
      language,
    }: URLDetailsTVSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}${getLanguage(language)}`,
    accountStates: ({
      series_id,
      season_number,
      session_id,
    }: URLAccountStatesTVProps & { season_number: number }) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/account_states${getSessionID(session_id)}`,
    aggregateCredits: ({
      series_id,
      season_number,
      language,
    }: URLDetailsTVSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/aggregate_credits${getLanguage(language)}`,
    changes: ({
      season_id,
      end_date,
      page,
      start_date,
    }: URLChangesTVSeasonsProps) =>
      `${API_BASE_URL.tv}/season/${season_id}/changes${getEndDate(end_date)}${getPageNumber(page)}${getStartDate(start_date)}`,
    credits: ({
      series_id,
      season_number,
      language,
    }: URLDetailsTVSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/credits${getLanguage(language)}`,
    externalIDs: ({ series_id, season_number }: URLTVSeriesSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/external_ids`,
    images: ({
      series_id,
      season_number,
      language,
    }: URLDetailsTVSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/images${getLanguage(language)}`,
    translations: ({ series_id, season_number }: URLTVSeriesSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/translations`,
    videos: ({
      series_id,
      season_number,
      language,
    }: URLDetailsTVSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/videos${getLanguage(language)}`,
    watchProviders: ({ series_id, season_number }: URLTVSeriesSeasonsProps) =>
      `${API_BASE_URL.tv}/${series_id}season/${season_number}/watch/providers`,
  },
  TV_EPISODES: {
    details: ({
      series_id,
      season_number,
      episode_number,
      language,
    }: URLDetailsTVEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}${getLanguage(language)}`,
    accountStates: ({
      series_id,
      season_number,
      episode_number,
      session_id,
    }: URLTVSeriesSeasonsEpisodesProps & { session_id?: string }) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/account_states${getSessionID(session_id)}`,
    changes: (episode_id: number) =>
      `${API_BASE_URL.tv}/episode/${episode_id}/changes`,
    credits: ({
      series_id,
      season_number,
      episode_number,
      language,
    }: URLDetailsTVEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/credits${getLanguage(language)}`,
    externalIDs: ({
      series_id,
      season_number,
      episode_number,
    }: URLTVSeriesSeasonsEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/external_ids`,
    images: ({
      series_id,
      season_number,
      episode_number,
      language,
    }: URLDetailsTVEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/images${getLanguage(language)}`,
    translations: ({
      series_id,
      season_number,
      episode_number,
    }: URLTVSeriesSeasonsEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/translations`,
    videos: ({
      series_id,
      season_number,
      episode_number,
      language,
    }: URLDetailsTVEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/videos${getLanguage(language)}`,
    addRating: ({
      series_id,
      season_number,
      episode_number,
      session_id,
    }: URLRatingTVEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/rating${getSessionID(session_id)}`,
    deleteRating: ({
      series_id,
      season_number,
      episode_number,
      session_id,
    }: URLRatingTVEpisodesProps) =>
      `${API_BASE_URL.tv}/${series_id}/season/${season_number}/episode/${episode_number}/rating${getSessionID(session_id)}`,
  },
  TV_EPISODE_GROUPS: {
    details: (tv_episode_group_id: string) =>
      `${API_BASE_URL.tv}/episode_group/${tv_episode_group_id}`,
  },
  WATCH_PROVIDERS: {
    availableRegions: (language?: string) =>
      `${API_BASE_URL.watch}/providers/regions/${getLanguage(language)}`,
    mediaProviders: ({
      mediaType,
      language,
      watch_region,
    }: URLWatchProvidersProps) =>
      `${API_BASE_URL.watch}/providers/${mediaType}${getLanguage(language)}${getWatchProviders(watch_region)}`,
  },
};

export const getFilterParameterURL = (
  filterParameter: FilterParameterProps,
) => {
  return `${
    filterParameter.includeAdult &&
    getIncludeAdult(filterParameter.includeAdult)
  }${
    filterParameter.includeVideo &&
    getIncludeVideo(filterParameter.includeVideo)
  }${filterParameter.language && getLanguage(filterParameter.language)}${
    filterParameter.page && getPageNumber(filterParameter.page)
  }${filterParameter.year && getYear(filterParameter.year)}${
    filterParameter.watchRegion && getWatchRegion(filterParameter.watchRegion)
  }${filterParameter.sortBy && getSortBy(filterParameter.sortBy)}${
    filterParameter.withWatchMonetizationTypes &&
    getWithWatchMonetizationTypes(filterParameter.withWatchMonetizationTypes)
  }${
    filterParameter.withWatchProviders &&
    getWatchProviders(filterParameter.withWatchProviders)
  }${filterParameter.withGenres && getWithGenres(filterParameter.withGenres)}`;
};
