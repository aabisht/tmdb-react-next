import { API_ROUTES } from "@constants";
import { createServiceRequest } from "../serviceRequest";

export const networkService = {
  getDetails: (network_id: number) =>
    createServiceRequest(API_ROUTES.NETWORKS.details(network_id)),
  getAlternativeNames: (network_id: number) =>
    createServiceRequest(API_ROUTES.NETWORKS.alternativeNames(network_id)),
  getImages: (network_id: number) =>
    createServiceRequest(API_ROUTES.NETWORKS.images(network_id)),
};
