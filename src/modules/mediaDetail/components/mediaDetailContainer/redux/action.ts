import { MoviesService } from "@services/moviesService";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { setMediaCast, setMediaDetail } from "./slice";
import { MEDIA } from "@constants";
import { TVService } from "@services/tvService";

export const fetchMediaDetail = (mediaID: number, mediaType: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(
        setMediaDetail(
          mediaType === MEDIA.MOVIE
            ? (await MoviesService.getMovieDetail(mediaID)).data
            : (await TVService.getTVDetails(mediaID)).data,
        ),
      );
    } catch (error: any) {
      throw new Error(error);
    }
  };
};

export const fetchMediaCast = (mediaID: number, mediaType: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(
        setMediaCast(
          mediaType === MEDIA.MOVIE
            ? (await MoviesService.getCredits(mediaID)).data.cast
            : (await TVService.getCredits(mediaID)).data.cast,
        ),
      );
    } catch (error: any) {
      throw new Error(error);
    }
  };
};
