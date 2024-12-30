import { discoverService } from "@services/tmdb/discover";
import { cache } from "react";
import { FilterParameterProps } from "@definitions";

// Function to get media by type
export const getMedia = cache(
  async (mediaType: string, filterParameter?: FilterParameterProps) => {
    try {
      return await discoverService.getMedia(mediaType, filterParameter);
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch media data");
    }
  },
);

// Function to get movies
export const getMovie = cache(
  async (filterParameter?: FilterParameterProps) => {
    try {
      return await discoverService.getMovie(filterParameter);
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch movies");
    }
  },
);

// Function to get TV shows
export const getTV = cache(async (filterParameter?: FilterParameterProps) => {
  try {
    return await discoverService.getTV(filterParameter);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch TV shows");
  }
});
