import { ITMDBGenresList } from "@type/uiTypes";
import { memo } from "react";
import { TMDBGenre } from "..";

export const TMDBGenresList = memo(
  ({
    genreIds,
    useDarkThemeFlag,
    mediaType,
    genreToShow,
    t,
  }: ITMDBGenresList) => {
    const themeClass = useDarkThemeFlag ? "!text-white" : "!text-black-light";

    return (
      <ul className="m-0 flex flex-wrap justify-start items-start p-0 list-none">
        {genreIds?.slice(0, genreToShow).map((genreId) => (
          <li
            key={genreId}
            className="m-0 p-0 relative mr-[10px] last:mr-0 pl-[20px] first:pl-0 first:before:hidden before:content-['●'] before:opacity-50 before:absolute before:left-0 before:top-[1px] before:leading-none"
            data-testid="tmdb-genre"
          >
            <TMDBGenre
              genreId={genreId}
              mediaType={mediaType}
              className={`text-xs no-underline block ${themeClass}`}
              tabIndex={-1}
              t={t}
            />
          </li>
        ))}
      </ul>
    );
  },
);

TMDBGenresList.displayName = "TMDBGenresList";
