import { ConfigurationService } from "@services/configurationService";
import { IAPIConfiguration, IGenreList } from "@type/commonTypes";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import {
  setAPIConfiguration,
  setGenresMovieList,
  setGenresTVList,
} from "./slice";
import { GenresService } from "@services/genresService";

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

export const fetchGenresMovieList = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const genresMovieList: IGenreList = (await GenresService.getMovieList())
        .data;

      dispatch(setGenresMovieList(genresMovieList));
    } catch (error: any) {
      throw new Error(error);
    }
  };
};

export const fetchGenresTVList = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const genresTVList: IGenreList = (await GenresService.getTVList()).data;

      dispatch(setGenresTVList(genresTVList));
    } catch (error: any) {
      throw new Error(error);
    }
  };
};
