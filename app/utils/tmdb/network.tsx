import { networkService } from "@services/tmdb/network";
import { cache } from "react";

export const getNetworkDetails = cache(async (network_id: number) => {
  try {
    return await networkService.getDetails(network_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch network details");
  }
});

export const getNetworkAlternativeNames = cache(async (network_id: number) => {
  try {
    return await networkService.getAlternativeNames(network_id);
  } catch (error: any) {
    throw new Error(
      error.message || "Failed to fetch network alternative names",
    );
  }
});

export const getNetworkImages = cache(async (network_id: number) => {
  try {
    return await networkService.getImages(network_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch network images");
  }
});
