import { findService } from "@services/tmdb/find";
import { cache } from "react";
import { URLFINDProps } from "@definitions";

// Function to get data by external ID
export const getFindByID = cache(
  async ({ external_id, external_source, language }: URLFINDProps) => {
    try {
      return await findService.getFindByID({
        external_id,
        external_source,
        language,
      });
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch data by external ID");
    }
  },
);
