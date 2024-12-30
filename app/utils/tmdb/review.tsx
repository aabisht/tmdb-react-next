import { reviewService } from "@services/tmdb/review";
import { cache } from "react";

export const getReviewDetails = cache(async (review_id: number) => {
  try {
    return await reviewService.getdetails(review_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch review details");
  }
});
