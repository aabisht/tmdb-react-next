import { collectionService } from "@services/tmdb/collection";
import { cache } from "react";
import { URLCollectionProps } from "@definitions";

// Function to get collection details
export const getCollectionDetails = cache(
  async ({ collection_id, language }: URLCollectionProps) => {
    try {
      return await collectionService.getDetails({ collection_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch collection details");
    }
  },
);

// Function to get collection images
export const getCollectionImages = cache(
  async ({ collection_id, language }: URLCollectionProps) => {
    try {
      return await collectionService.getImages({ collection_id, language });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch collection images");
    }
  },
);

// Function to get collection translations
export const getCollectionTranslations = cache(
  async ({ collection_id, language }: URLCollectionProps) => {
    try {
      return await collectionService.getTranslations({
        collection_id,
        language,
      });
    } catch (error: any) {
      throw new Error(
        error.message || "Failed to fetch collection translations",
      );
    }
  },
);
