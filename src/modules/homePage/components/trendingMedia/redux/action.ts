import { TrendingMediaService } from "@services/trendingMediaService";
import { ITrendingMediaResponse, IMediaResults } from "@type/commonTypes";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { setTrendingMediaResults } from "./slice";

export const fetchTrendingMedia = (totalSliderItems: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      let trendingMediaData: IMediaResults[] = [];
      const movieResp: ITrendingMediaResponse = (
        await TrendingMediaService.getTrendingMovies()
      ).data;
      const tvResp: ITrendingMediaResponse = (
        await TrendingMediaService.getTrendingTV()
      ).data;

      const filteredMovies = movieResp.results.filter(
        (movie) => movie.vote_average >= 7 && movie.overview.length > 0,
      );
      const filteredTv = tvResp.results.filter(
        (tv) => tv.vote_average >= 7 && tv.overview.length > 0,
      );

      filteredMovies.every((item, index) => {
        if (index >= totalSliderItems / 2) return false;
        return trendingMediaData.push(item);
      });

      filteredTv.every((item, index) => {
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
