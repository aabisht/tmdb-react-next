import { API_ROUTES, TIME_WINDOW } from "@constants";
import { URLTrendingProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const trendingService = {
  getAll: async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) =>
    createServiceRequest(
      API_ROUTES.TRENDING.all({
        time_window,
        language,
        page,
      }),
    ),
  getMovie: async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) =>
    createServiceRequest(
      API_ROUTES.TRENDING.movie({
        time_window,
        language,
        page,
      }),
    ),
  getPerson: async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) =>
    createServiceRequest(
      API_ROUTES.TRENDING.person({
        time_window,
        language,
        page,
      }),
    ),
  getTv: async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) =>
    createServiceRequest(
      API_ROUTES.TRENDING.tv({
        time_window,
        language,
        page,
      }),
    ),
  getMovieAndTv: async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) => {
    return Promise.all([
      trendingService.getMovie({ time_window, language, page }),
      trendingService.getTv({ time_window, language, page }),
    ]);
  },
};
