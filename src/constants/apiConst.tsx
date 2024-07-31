import {
  getAPIURL,
  getExternalSource,
  getIncludeAdult,
  getIncludeVideo,
  getLanguage,
  getPageNumber,
  getSessionID,
  getSortBy,
  getWatchProviders,
  getWatchRegion,
  getWithGenres,
  getWithWatchMonetizationTypes,
  getYear,
} from "@utils/apiHelper";
import { SORT_BY, TIME_WINDOW } from "./frontendConst";
import { IFilterParameter } from "@type/apiTypes";
import {
  IMovieAccountStatesParam,
  IMovieAddRatingParam,
  IMovieParam,
  IMovieReviewsParam,
  IMovieSimilarParam,
  ITrendingRequestParam,
  ITVParam,
} from "@type/commonTypes";

export const API_TYPE: {
  [key: string]: string;
} = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
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
  trending: `${getAPIURL()}/trending`,
  genres: `${getAPIURL()}/genre`,
  movie: `${getAPIURL()}/movie`,
  tv: `${getAPIURL()}/tv`,
};

export const API_ROUTES = {
  ACCOUNT: {
    // Get your account details.
    getAccountDetail: (sessionId: string) =>
      `${API_BASE_URL.account}?${getSessionID(sessionId)}`,

    // Get all of the lists created by an account. Will invlude private lists if you are the owner.
    getCreatedLists: ({
      sessionId,
      language = "en-US",
      page = 1,
    }: {
      sessionId: string;
      language?: string;
      page?: number;
    }) =>
      `${API_BASE_URL.account}/lists?${getLanguage(
        language,
      )}${getSessionID(sessionId)}${getPageNumber(page)}`,

    // Get the list of your favorite movies or TV shows.
    getFavorite: ({
      sessionId,
      mediaType,
      language = "en-US",
      page = 1,
      sortBy = SORT_BY.CREATED_AT_ASC,
    }: {
      sessionId: string;
      mediaType: string;
      language?: string;
      page?: number;
      sortBy?: string;
    }) =>
      `${API_BASE_URL.account}/favorite/${mediaType}?${getLanguage(
        language,
      )}${getSessionID(sessionId)}${getSortBy(sortBy)}${getPageNumber(page)}`,

    // This allows you to mark a movie or TV show as a favorite item.
    markAsFavorite: (sessionId: string) =>
      `${API_BASE_URL.account}/favorite?${getSessionID(sessionId)}`,

    // Get a list of all the movies, TV shows and TV episodes user have rated.
    getRated: ({
      sessionId,
      mediaType,
      accountID,
      episodes = false,
      language = "en-US",
      page = 1,
      sortBy = SORT_BY.CREATED_AT_ASC,
    }: {
      sessionId: string;
      mediaType: string;
      accountID: string;
      episodes?: boolean;
      language?: string;
      page?: number;
      sortBy?: string;
    }) =>
      `${API_BASE_URL.account}/${accountID}/rated/${mediaType}${
        episodes ? "/episodes" : ""
      }?${getLanguage(language)}${getSessionID(
        sessionId,
      )}${getSortBy(sortBy)}${getPageNumber(page)}`,

    // Get a list of all the movies or TV shows you have added to your watchlist.
    getWatchlist: ({
      sessionId,
      mediaType,
      accountID,
      language = "en-US",
      page = 1,
      sortBy = SORT_BY.CREATED_AT_ASC,
    }: {
      sessionId: string;
      mediaType: string;
      accountID: string;
      language?: string;
      page?: number;
      sortBy?: string;
    }) =>
      `${
        API_BASE_URL.account
      }/${accountID}/watchlist/${mediaType}?${getLanguage(
        language,
      )}${getSessionID(sessionId)}${getSortBy(sortBy)}${getPageNumber(page)}`,

    // This allows user to mark a movie or TV show as a favorite item.
    addToWatchlist: ({
      sessionId,
      accountID,
    }: {
      sessionId: string;
      accountID: string;
    }) =>
      `${
        API_BASE_URL.account
      }/${accountID}/watchlist?${getSessionID(sessionId)}`,
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
    getDetails: ({
      collectionId,
      language = "en-US",
    }: {
      collectionId: string;
      language?: string;
    }) => `${API_BASE_URL.collection}/${collectionId}?${getLanguage(language)}`,
    getImages: ({
      collectionId,
      language = "en-US",
    }: {
      collectionId: string;
      language?: string;
    }) =>
      `${
        API_BASE_URL.collection
      }/${collectionId}/images?${getLanguage(language)}`,
    getTranslations: ({
      collectionId,
      language = "en-US",
    }: {
      collectionId: string;
      language?: string;
    }) =>
      `${
        API_BASE_URL.collection
      }/${collectionId}/translations?${getLanguage(language)}`,
  },
  CONFIGURATION: {
    getAPIConfiguration: () => `${API_BASE_URL.configuration}`,
    getCountries: () => `${API_BASE_URL.configuration}/countries`,
    getJobs: () => `${API_BASE_URL.configuration}/jobs`,
    getLanguages: () => `${API_BASE_URL.configuration}/languages`,
    getPrimaryTranslations: () =>
      `${API_BASE_URL.configuration}/primary_translations`,
    getTimezones: () => `${API_BASE_URL.configuration}/timezones`,
  },
  CREDIT: {
    getCreditDetails: (creditId: string) =>
      `${API_BASE_URL.credit}/${creditId}`,
  },
  DISCOVER: {
    getMediaDiscover: ({
      mediaType,
      filterParameter,
    }: {
      mediaType: string;
      filterParameter?: IFilterParameter;
    }) =>
      `${API_BASE_URL.discover}/${mediaType}?${
        filterParameter && getFilterParameterURL(filterParameter)
      }`,
  },
  FIND: {
    getFindByID: ({
      externalId,
      externalSource,
      language = "en-US",
    }: {
      externalId: string;
      externalSource: string;
      language?: string;
    }) =>
      `${API_BASE_URL.find}/${externalId}?${getLanguage(
        language,
      )}${getExternalSource(externalSource)}`,
  },
  TRENDING: {
    getTrendingAll: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/all/${timeWindow}?${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
    getTrendingMovies: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/movie/${timeWindow}?${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
    getTrendingPeople: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/person/${timeWindow}?${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
    getTrendingTV: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/tv/${timeWindow}?${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
  },
  GENRES: {
    getMovieList: ({ language = "en-US" }: ITrendingRequestParam) =>
      `${API_BASE_URL.genres}/movie/list?${getLanguage(language)}`,
    getTVList: ({ language = "en-US" }: ITrendingRequestParam) =>
      `${API_BASE_URL.genres}/tv/list?${getLanguage(language)}`,
  },
  MOVIES: {
    getDetails: ({ movieId, language = "en-US" }: IMovieParam) =>
      `${API_BASE_URL.movie}/${movieId}?${getLanguage(language)}`,
    getAccountStates: ({
      movieId,
      sessionId,
      language = "en-US",
    }: IMovieAccountStatesParam) =>
      `${API_BASE_URL.movie}/${movieId}/account_states?${getSessionID(sessionId)}${getLanguage(language)}`,
    getAlternativeTitles: ({ movieId, language = "en-US" }: IMovieParam) =>
      `${API_BASE_URL.movie}/${movieId}/alternative_titles?${getLanguage(language)}`,
    getCredits: ({ movieId, language = "en-US" }: IMovieParam) =>
      `${API_BASE_URL.movie}/${movieId}/credits?${getLanguage(language)}`,
    getExternalIDs: ({ movieId }: { movieId: number }) =>
      `${API_BASE_URL.movie}/${movieId}/credits`,
    getKeywords: ({ movieId }: { movieId: number }) =>
      `${API_BASE_URL.movie}/${movieId}/keywords`,
    getReleaseDates: ({ movieId }: { movieId: number }) =>
      `${API_BASE_URL.movie}/${movieId}/release_dates`,
    getReviews: ({
      movieId,
      pageNumber = 1,
      language = "en-US",
    }: IMovieReviewsParam) =>
      `${API_BASE_URL.movie}/${movieId}/reviews?${getLanguage(language)}${getPageNumber(pageNumber)}`,
    getSimilar: ({
      movieId,
      pageNumber = 1,
      language = "en-US",
    }: IMovieSimilarParam) =>
      `${API_BASE_URL.movie}/${movieId}/similar?${getLanguage(language)}${getPageNumber(pageNumber)}`,
    getVideos: ({ movieId, language = "en-US" }: IMovieParam) =>
      `${API_BASE_URL.movie}/${movieId}/videos?${getLanguage(language)}`,
    getWatchProviders: ({ movieId }: { movieId: number }) =>
      `${API_BASE_URL.movie}/${movieId}/watch/providers`,
    postAddRating: ({ movieId, sessionId }: IMovieAddRatingParam) =>
      `${API_BASE_URL.movie}/${movieId}/rating?${getSessionID(sessionId)}`,
  },
  TV_SERIES: {
    getDetails: ({ seriesId, language = "en-US" }: ITVParam) =>
      `${API_BASE_URL.tv}/${seriesId}?${getLanguage(language)}`,
  },
};

export const getFilterParameterURL = (filterParameter: IFilterParameter) => {
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
