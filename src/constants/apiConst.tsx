import {
  getAPIKey,
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
import { ITrendingRequestParam } from "@type/commonTypes";

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
};

export const API_ROUTES = {
  ACCOUNT: {
    // Get your account details.
    getAccountDetail: (sessionId: string) =>
      `${API_BASE_URL.account}${getAPIKey()}${getSessionID(sessionId)}`,

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
      `${API_BASE_URL.account}/lists${getAPIKey()}${getLanguage(
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
      `${API_BASE_URL.account}/favorite/${mediaType}${getAPIKey()}${getLanguage(
        language,
      )}${getSessionID(sessionId)}${getSortBy(sortBy)}${getPageNumber(page)}`,

    // This allows you to mark a movie or TV show as a favorite item.
    markAsFavorite: (sessionId: string) =>
      `${API_BASE_URL.account}/favorite${getAPIKey()}${getSessionID(
        sessionId,
      )}`,

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
      }${getAPIKey()}${getLanguage(language)}${getSessionID(
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
      }/${accountID}/watchlist/${mediaType}${getAPIKey()}${getLanguage(
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
      }/${accountID}/watchlist${getAPIKey()}${getSessionID(sessionId)}`,
  },
  AUTHENTICATION: {
    getRequestToken: () =>
      `${API_BASE_URL.authentication}/token/new${getAPIKey()}`,
    createSession: () =>
      `${API_BASE_URL.authentication}/session/new${getAPIKey()}`,
    createSessionWithLogin: () =>
      `${API_BASE_URL.authentication}/token/validate_with_login${getAPIKey()}`,
    deleteSession: () => `${API_BASE_URL.authentication}/session${getAPIKey()}`,
  },
  CERTIFICATION: {
    getMediaCertifications: (mediaType: string) =>
      `${API_BASE_URL.certification}/${mediaType}/list${getAPIKey()}`,
  },
  COLLECTION: {
    getDetails: ({
      collectionId,
      language = "en-US",
    }: {
      collectionId: string;
      language?: string;
    }) =>
      `${API_BASE_URL.collection}/${collectionId}${getAPIKey()}${getLanguage(
        language,
      )}`,
    getImages: ({
      collectionId,
      language = "en-US",
    }: {
      collectionId: string;
      language?: string;
    }) =>
      `${
        API_BASE_URL.collection
      }/${collectionId}/images${getAPIKey()}${getLanguage(language)}`,
    getTranslations: ({
      collectionId,
      language = "en-US",
    }: {
      collectionId: string;
      language?: string;
    }) =>
      `${
        API_BASE_URL.collection
      }/${collectionId}/translations${getAPIKey()}${getLanguage(language)}`,
  },
  CONFIGURATION: {
    getAPIConfiguration: () => `${API_BASE_URL.configuration}${getAPIKey()}`,
    getCountries: () => `${API_BASE_URL.configuration}/countries${getAPIKey()}`,
    getJobs: () => `${API_BASE_URL.configuration}/jobs${getAPIKey()}`,
    getLanguages: () => `${API_BASE_URL.configuration}/languages${getAPIKey()}`,
    getPrimaryTranslations: () =>
      `${API_BASE_URL.configuration}/primary_translations${getAPIKey()}`,
    getTimezones: () => `${API_BASE_URL.configuration}/timezones${getAPIKey()}`,
  },
  CREDIT: {
    getCreditDetails: (creditId: string) =>
      `${API_BASE_URL.credit}/${creditId}${getAPIKey()}`,
  },
  DISCOVER: {
    getMediaDiscover: ({
      mediaType,
      filterParameter,
    }: {
      mediaType: string;
      filterParameter?: IFilterParameter;
    }) =>
      `${API_BASE_URL.discover}/${mediaType}${getAPIKey()}${
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
      `${API_BASE_URL.find}/${externalId}${getAPIKey()}${getLanguage(
        language,
      )}${getExternalSource(externalSource)}`,
  },
  TRENDING: {
    getTrendingAll: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/all/${timeWindow}${getAPIKey()}${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
    getTrendingMovies: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/movie/${timeWindow}${getAPIKey()}${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
    getTrendingPeople: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/person/${timeWindow}${getAPIKey()}${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
    getTrendingTV: ({
      timeWindow = TIME_WINDOW.DAY,
      language = "en-US",
      pageNumber = 1,
    }: ITrendingRequestParam) =>
      `${API_BASE_URL.trending}/tv/${timeWindow}${getAPIKey()}${getLanguage(
        language,
      )}${getPageNumber(pageNumber)}`,
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
