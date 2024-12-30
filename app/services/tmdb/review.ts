import { API_ROUTES } from "@constants";
import { createServiceRequest } from "@services/serviceRequest";

export const reviewService = {
  getdetails: (review_id: number) =>
    createServiceRequest(API_ROUTES.REVIEWS.details(review_id)),
};
