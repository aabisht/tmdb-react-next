import { TrendingMediaService } from "@services/trendingMediaService";
import {
  ITrendingMediaResponse,
  ITrendingMediaResults,
} from "@type/commonTypes";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { setTrendingMediaResults } from "./slice";

export const fetchTrendingMedia = (totalSliderItems: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      let trendingMediaData: ITrendingMediaResults[] = [];
      const movieResp: ITrendingMediaResponse = (
        await TrendingMediaService.getTrendingMovies()
      ).data;
      const tvResp: ITrendingMediaResponse = (
        await TrendingMediaService.getTrendingTV()
      ).data;

      movieResp.results.every((item, index) => {
        if (index >= totalSliderItems / 2) return false;
        return trendingMediaData.push(item);
      });

      tvResp.results.every((item, index) => {
        if (index >= totalSliderItems / 2) return false;
        return trendingMediaData.push(item);
      });

      trendingMediaData = trendingMediaData.sort(() => Math.random() - 0.5);

      dispatch(setTrendingMediaResults(trendingMediaData));
    } catch (error: any) {
      throw new Error(error);
    }
  };
};
