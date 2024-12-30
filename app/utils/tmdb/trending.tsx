import { TIME_WINDOW } from "@constants";
import { URLTrendingProps } from "@definitions";
import { trendingService } from "@services/tmdb/trending";
import { cache } from "react";

export const getTrendingAll = cache(
  async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) => {
    try {
      return await trendingService.getAll({ time_window, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get trending all");
    }
  },
);

export const getTrendingMovie = cache(
  async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) => {
    try {
      return await trendingService.getMovie({ time_window, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get trending movie");
    }
  },
);

export const getTrendingPerson = cache(
  async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) => {
    try {
      return await trendingService.getPerson({ time_window, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get trending person");
    }
  },
);

export const getTrendingTv = cache(
  async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) => {
    try {
      return await trendingService.getTv({ time_window, language, page });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get trending TV");
    }
  },
);

export const getTrendingMovieAndTv = cache(
  async ({
    time_window = TIME_WINDOW.DAY,
    language,
    page,
  }: URLTrendingProps) => {
    try {
      return await trendingService.getMovieAndTv({
        time_window,
        language,
        page,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to get trending movie and TV");
    }
  },
);
