import { MEDIA } from "@constants";
import { IGenre } from "@type/commonTypes";
import { State } from "@type/store";
import { ITMDBGenre } from "@type/uiTypes";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TMDBLink } from "../TMDBLink/TMDBLink";
import { replaceSpaceWithDash } from "@utils/helpers";

export const TMDBGenre = memo(
  ({ genreId, mediaType, className, tabIndex, t }: ITMDBGenre) => {
    const [genreName, setGenreName] = useState<string>("");
    const genresMovieList: IGenre[] = useSelector(
      (state: State) =>
        state?.configurationSlice?.genresMovieList?.genres as IGenre[],
    );

    const genresTVList: IGenre[] = useSelector(
      (state: State) =>
        state?.configurationSlice?.genresTVList?.genres as IGenre[],
    );

    useEffect(() => {
      setGenreName(
        (mediaType === MEDIA.MOVIE ? genresMovieList : genresTVList)?.find(
          (genre) => genre.id === genreId,
        )?.name as string,
      );
    }, [mediaType, genreId, genresMovieList, genresTVList]);

    const getAriaLabel = () => {
      return mediaType === MEDIA.MOVIE
        ? t("ui.TMDBGenre.view_genre_related_movie", {
            genreName: genreName,
          })
        : t("ui.TMDBGenre.view_genre_related_tv", {
            genreName: genreName,
          });
    };

    return (
      <TMDBLink
        href={`genre/${genreId}-${replaceSpaceWithDash(genreName)}/${mediaType}`}
        className={className}
        title={genreName}
        tabIndex={tabIndex}
        aria-label={getAriaLabel()}
      >
        {genreName}
      </TMDBLink>
    );
  },
);

TMDBGenre.displayName = "TMDBGenre";
