import { MoviesService } from "@services/moviesService";
import { IMedaiData } from "@type/mediaDetailTypes";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { setMediaDetail } from "./slice";
import { MEDIA } from "@constants";
import { TVService } from "@services/tvService";

export const fetchMediaDetail = (mediaID: number, mediaType: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      let mediaData: IMedaiData;
      if (mediaType === MEDIA.MOVIE) {
        mediaData = (await MoviesService.getMovieDetail(mediaID)).data;
      } else {
        mediaData = (await TVService.getTVDetails(mediaID)).data;
      }
      dispatch(setMediaDetail(mediaData));
    } catch (error: any) {
      throw new Error(error);
    }
  };
};
