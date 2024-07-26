import { MEDIA } from "@constants";
import { IGenre } from "@type/commonTypes";
import { State } from "@type/store";
import { ITMDBGenre } from "@type/uiTypes";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { TMDBLink } from "../TMDBLink/TMDBLink";
import { replaceSpaceWithDash } from "@utils/helpers";

export const TMDBGenre = memo(
  ({ genreId, mediaType, className, tabIndex, t }: ITMDBGenre) => {
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

    const getAriaLabel = () => {
      return mediaType === MEDIA.MOVIE
        ? t("ui.TMDBGenre.view_genre_related_movie", {
            genreName: findGenreName(),
          })
        : t("ui.TMDBGenre.view_genre_related_tv", {
            genreName: findGenreName(),
          });
    };

    return (
      <TMDBLink
        href={`genre/${genreId}-${replaceSpaceWithDash(findGenreName() as string)}/${mediaType}`}
        className={className}
        title={findGenreName()}
        tabIndex={tabIndex}
        aria-label={getAriaLabel()}
      >
        {findGenreName()}
      </TMDBLink>
    );
  },
);

TMDBGenre.displayName = "TMDBGenre";
