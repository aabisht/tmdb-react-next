import { listService } from "@services/tmdb/list";
import { cache } from "react";
import {
  URClearListLProps,
  URLAddMovieListProps,
  URLCheckItemStatusListProps,
  URLDetailsListProps,
} from "@definitions";

// Function to add a movie to a list
export const addMovie = cache(
  async ({
    list_id,
    session_id,
    data,
  }: URLAddMovieListProps & { data: { [key: string]: string } }) => {
    try {
      return await listService.addMovie({ list_id, session_id, data });
    } catch (error: any) {
      throw new Error(error.message || "Failed to add movie to list");
    }
  },
);

// Function to check the status of an item in a list
export const checkItemStatus = cache(
  async ({ list_id, language, movie_id }: URLCheckItemStatusListProps) => {
    try {
      return await listService.checkItemStatus({ list_id, language, movie_id });
    } catch (error: any) {
      throw new Error(error.message || "Failed to check item status in list");
    }
  },
);

// Function to clear a list
export const clearList = cache(
  async ({ list_id, session_id, confirm = false }: URClearListLProps) => {
    try {
      return await listService.clear({ list_id, session_id, confirm });
    } catch (error: any) {
      throw new Error(error.message || "Failed to clear the list");
    }
  },
);

// Function to create a new list
export const createList = cache(
  async (session_id: string, data: { [key: string]: string }) => {
    try {
      return await listService.create(session_id, data);
    } catch (error: any) {
      throw new Error(error.message || "Failed to create the list");
    }
  },
);

// Function to delete a list
export const deleteList = cache(
  async ({ list_id, session_id }: URLAddMovieListProps) => {
    try {
      return await listService.delete({ list_id, session_id });
    } catch (error: any) {
      throw new Error(error.message || "Failed to delete the list");
    }
  },
);

// Function to get details of a list
export const getListDetails = cache(
  async ({ list_id, language, page }: URLDetailsListProps) => {
    try {
      return await listService.getDetails({ list_id, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch list details");
    }
  },
);

// Function to remove a movie from a list
export const removeMovie = cache(
  async ({
    list_id,
    session_id,
    data,
  }: URLAddMovieListProps & { data: { [key: string]: string } }) => {
    try {
      return await listService.removeMovie({ list_id, session_id, data });
    } catch (error: any) {
      throw new Error(error.message || "Failed to remove movie from the list");
    }
  },
);
