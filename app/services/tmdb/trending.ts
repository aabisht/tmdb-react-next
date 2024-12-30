import { API_ROUTES, TIME_WINDOW } from "@constants";
import { URLTrendingProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const trendingService = {
  getAll: ({
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
  getMovie: ({
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
  getPerson: ({
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
  getTv: ({
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
};
