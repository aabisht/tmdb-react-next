import { API_ROUTES } from "@constants";
import { URLFINDProps } from "@definitions";
import { createServiceRequest } from "@services/serviceRequest";

export const findService = {
  getFindByID: async ({
    external_id,
    external_source,
    language,
  }: URLFINDProps) =>
    createServiceRequest(
      API_ROUTES.FIND.getFindByID({ external_id, external_source, language }),
    ),
};
