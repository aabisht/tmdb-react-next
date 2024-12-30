import { API_ROUTES, API_TYPE } from "@constants";
import {
  URLAccountDetailProps,
  URLAccountFavoriteProps,
  URLListsProps,
  URLRatedProps,
} from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const accountService = {
  accountDetail: async ({ account_id, session_id }: URLAccountDetailProps) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.getAccountDetail({ account_id, session_id }),
    ),
  addFavorite: async ({
    account_id,
    session_id,
    data,
  }: URLAccountDetailProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.addToFavorite({ account_id, session_id }),
      API_TYPE.POST,
      data,
    ),
  addWatchlist: async ({
    account_id,
    session_id,
    data,
  }: URLAccountDetailProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.addToWatchlist({ account_id, session_id }),
      API_TYPE.POST,
      data,
    ),
  getFavorite: async ({
    mediaType,
    account_id,
    language,
    page,
    sortBy,
    session_id,
  }: URLAccountFavoriteProps) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.getFavorite({
        mediaType,
        account_id,
        language,
        page,
        sortBy,
        session_id,
      }),
    ),
  getLists: async ({ account_id, session_id, language, page }: URLListsProps) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.getLists({ account_id, session_id, language, page }),
    ),
  getRated: async ({
    session_id,
    mediaType,
    account_id,
    episodes = false,
    language,
    page,
    sortBy,
  }: URLRatedProps) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.getRated({
        session_id,
        mediaType,
        account_id,
        episodes,
        language,
        page,
        sortBy,
      }),
    ),
  getWatchlist: async ({
    session_id,
    mediaType,
    account_id,
    language,
    page,
    sortBy,
  }: URLAccountFavoriteProps) =>
    createServiceRequest(
      API_ROUTES.ACCOUNT.getWatchlist({
        session_id,
        mediaType,
        account_id,
        language,
        page,
        sortBy,
      }),
    ),
};
