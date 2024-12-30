import { API_ROUTES } from "@constants";
import { URLCollectionProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const collectionService = {
  getDetails: async ({ collection_id, language }: URLCollectionProps) =>
    createServiceRequest(
      API_ROUTES.COLLECTION.getDetails({ collection_id, language }),
    ),
  getImages: async ({ collection_id, language }: URLCollectionProps) =>
    createServiceRequest(
      API_ROUTES.COLLECTION.getImages({ collection_id, language }),
    ),
  getTranslations: async ({ collection_id, language }: URLCollectionProps) =>
    createServiceRequest(
      API_ROUTES.COLLECTION.getTranslations({ collection_id, language }),
    ),
};
