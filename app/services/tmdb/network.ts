import { API_ROUTES } from "@constants";
import { createServiceRequest } from "@services/serviceRequest";

export const networkService = {
  getDetails: async (network_id: number) =>
    createServiceRequest(API_ROUTES.NETWORKS.details(network_id)),
  getAlternativeNames: async (network_id: number) =>
    createServiceRequest(API_ROUTES.NETWORKS.alternativeNames(network_id)),
  getImages: async (network_id: number) =>
    createServiceRequest(API_ROUTES.NETWORKS.images(network_id)),
};
