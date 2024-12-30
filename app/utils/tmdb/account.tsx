import {
  URLAccountDetailProps,
  URLAccountFavoriteProps,
  URLListsProps,
  URLRatedProps,
} from "@definitions";
import { accountService } from "@services/tmdb/account";
import { cache } from "react";

// Function for fetching account details
export const accountDetail = cache(
  async ({ account_id, session_id }: URLAccountDetailProps) => {
    try {
      return await accountService.accountDetail({ account_id, session_id });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch account details");
    }
  },
);

// Function for adding to favorites
export const addFavorite = cache(
  async ({
    account_id,
    session_id,
    data,
  }: URLAccountDetailProps & { data: { [key: string]: string } }) => {
    try {
      return await accountService.addFavorite({
        account_id,
        session_id,
        data,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to add to favorites");
    }
  },
);

// Function for adding to watchlist
export const addWatchlist = cache(
  async ({
    account_id,
    session_id,
    data,
  }: URLAccountDetailProps & { data: { [key: string]: string } }) => {
    try {
      return await accountService.addWatchlist({
        account_id,
        session_id,
        data,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to add to watchlist");
    }
  },
);

// Function for fetching favorites
export const getFavorite = cache(
  async ({
    mediaType,
    account_id,
    language,
    page,
    sortBy,
    session_id,
  }: URLAccountFavoriteProps) => {
    try {
      return await accountService.getFavorite({
        mediaType,
        account_id,
        language,
        page,
        sortBy,
        session_id,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch favorites");
    }
  },
);

// Function for fetching lists
export const getLists = cache(
  async ({ account_id, session_id, language, page }: URLListsProps) => {
    try {
      return await accountService.getLists({
        account_id,
        session_id,
        language,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch lists");
    }
  },
);

// Function for fetching rated items
export const getRated = cache(
  async ({
    session_id,
    mediaType,
    account_id,
    episodes = false,
    language,
    page,
    sortBy,
  }: URLRatedProps) => {
    try {
      return await accountService.getRated({
        session_id,
        mediaType,
        account_id,
        episodes,
        language,
        page,
        sortBy,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch rated items");
    }
  },
);

// Function for fetching watchlist
export const getWatchlist = cache(
  async ({
    session_id,
    mediaType,
    account_id,
    language,
    page,
    sortBy,
  }: URLAccountFavoriteProps) => {
    try {
      return await accountService.getWatchlist({
        session_id,
        mediaType,
        account_id,
        language,
        page,
        sortBy,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch watchlist");
    }
  },
);
