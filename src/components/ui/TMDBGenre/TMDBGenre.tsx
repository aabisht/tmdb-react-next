import { MEDIA } from "@constants";
import { IGenre } from "@type/commonTypes";
import { State } from "@type/store";
import { ITMDBGenre } from "@type/uiTypes";
import React, { memo } from "react";
import { useSelector } from "react-redux";

export const TMDBGenre = memo(
  ({ genreId, mediaType, className }: ITMDBGenre) => {
    const genresMovieList: IGenre[] = useSelector(
      (state: State) =>
        state?.configurationSlice?.genresMovieList?.genres as IGenre[],
    );

    const genresTVList: IGenre[] = useSelector(
      (state: State) =>
        state?.configurationSlice?.genresTVList?.genres as IGenre[],
    );

    const findGenreName = () => {
      const genre = (
        mediaType === MEDIA.MOVIE ? genresMovieList : genresTVList
      )?.find((genre) => genre.id === genreId);

      return genre?.name;
    };

    return <div className={className}>{findGenreName()}</div>;
  },
);

TMDBGenre.displayName = "TMDBGenre";
