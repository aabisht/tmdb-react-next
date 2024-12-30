import { creditService } from "@services/tmdb/credit";
import { cache } from "react";

// Function to get credit details
export const getCreditDetails = cache(async (credit_id: string) => {
  try {
    return await creditService.getCreditDetails(credit_id);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch credit details");
  }
});
