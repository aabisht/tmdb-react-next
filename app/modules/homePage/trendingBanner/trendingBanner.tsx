import { Banner, MediaCarousel } from "@components";
import { MediaProps } from "@definitions";
import { getRandomizedItems } from "@utils/frontendHelper";
import { getTrendingMovie, getTrendingTv } from "@utils/tmdb/trending";
import React from "react";

export const TrendingBanner = async () => {
  const trendingMovies = (await getTrendingMovie({}))?.data?.results || [];
  const trendingTv = (await getTrendingTv({}))?.data?.results || [];
  const results: MediaProps[] = getRandomizedItems(
    [...trendingMovies, ...trendingTv],
    21,
  );

  return (
    <>
      <Banner media={results[0]} mediaType={results[0]?.media_type ?? ""} />
      <MediaCarousel medias={results.slice(1, 21)} title={"Trending"} />
    </>
  );
};
