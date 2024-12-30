import { API_ROUTES, API_TYPE } from "@constants";
import {
  URClearListLProps,
  URLAddMovieListProps,
  URLCheckItemStatusListProps,
  URLDetailsListProps,
} from "@definitions";
import { createServiceRequest } from "../serviceRequest";

export const listService = {
  addMovie: async ({
    list_id,
    session_id,
    data,
  }: URLAddMovieListProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.LISTS.addMovie({ list_id, session_id }),
      API_TYPE.POST,
      data,
    ),
  checkItemStatus: async ({
    list_id,
    language,
    movie_id,
  }: URLCheckItemStatusListProps) =>
    createServiceRequest(
      API_ROUTES.LISTS.checkItemStatus({ list_id, language, movie_id }),
    ),
  clear: async ({ list_id, session_id, confirm = false }: URClearListLProps) =>
    createServiceRequest(
      API_ROUTES.LISTS.clear({ list_id, session_id, confirm }),
      API_TYPE.POST,
      {},
    ),
  create: async (session_id: string, data: { [key: string]: string }) =>
    createServiceRequest(
      API_ROUTES.LISTS.create(session_id),
      API_TYPE.POST,
      data,
    ),
  delete: async ({ list_id, session_id }: URLAddMovieListProps) =>
    createServiceRequest(
      API_ROUTES.LISTS.delete({ list_id, session_id }),
      API_TYPE.DELETE,
      {},
    ),
  getDetails: async ({ list_id, language, page }: URLDetailsListProps) =>
    createServiceRequest(
      API_ROUTES.LISTS.details({ list_id, language, page }),
      API_TYPE.DELETE,
      {},
    ),
  removeMovie: async ({
    list_id,
    session_id,
    data,
  }: URLAddMovieListProps & { data: { [key: string]: string } }) =>
    createServiceRequest(
      API_ROUTES.LISTS.removeMovie({ list_id, session_id }),
      API_TYPE.POST,
      data,
    ),
};
