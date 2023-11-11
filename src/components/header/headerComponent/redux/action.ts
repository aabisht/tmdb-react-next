import { ConfigurationService } from "@services/configurationService";
import { IAPIConfiguration } from "@type/commonTypes";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { setAPIConfiguration } from "./slice";

export const fetchConfiguration = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const resAPIConfiguration: IAPIConfiguration = (
        await ConfigurationService.getAPIConfiguration()
      ).data;

      dispatch(setAPIConfiguration(resAPIConfiguration));
    } catch (error: any) {
      throw new Error(error);
    }
  };
};
