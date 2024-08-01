import { MEDIA } from "@constants";
import { ITMDBCardDialogInfo } from "@type/uiTypes";
import { getMediaIconName, getMediaYear } from "@utils/helpers";
import { memo } from "react";
import { TMDBCardDialogButtons, TMDBGenresList, TMDBIcon, TMDBLink } from "..";

export const TMDBCardDialogInfo = memo(
  ({ cardData, href, useDarkThemeFlag, t }: ITMDBCardDialogInfo) => {
    const mediaTitle = cardData?.title ?? cardData?.name;
    const mediaDate =
      cardData?.media_type === MEDIA.TV
        ? cardData?.first_air_date
        : cardData?.release_date;
    const voteAverage = cardData?.vote_average?.toFixed(1);

    return (
      <div
        className={`p-2 pb-3 flex-auto h-full ${useDarkThemeFlag ? "bg-black-light text-white" : "bg-white text-black-light"}`}
        tabIndex={-1}
        data-testid="TMDBCardDialogInfo"
      >
        <div className="flex flex-col justify-between items-stretch h-full">
          <div>
            <TMDBCardDialogButtons />
            <div className="ptrack-content">
              <TMDBLink
                href={href}
                className={`no-underline transition-none ${useDarkThemeFlag ? "!text-white" : "!text-black-light"}`}
                tabIndex={-1}
              >
                <h2 className="text-sm font-bold mt-0 mb-1.5 text-truncate">
                  <TMDBIcon
                    iconsName={getMediaIconName(cardData.media_type)}
                    isOutline
                    className="!text-sm mr-0.5 align-middle mt-[-2px]"
                  />
                  <span>{mediaTitle}</span>
                </h2>
                <p
                  className="line-clamp-2 mt-0 mb-1.5 text-sm font-normal"
                  aria-label={cardData?.overview}
                >
                  {cardData?.overview}
                </p>
              </TMDBLink>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <strong>{getMediaYear(mediaDate as string)}</strong>
              <span className="flex items-center justify-end">
                <TMDBIcon
                  iconsName="grade"
                  isOutline
                  className="!leading-none mr-1"
                />
                <strong>{voteAverage}</strong>
              </span>
            </div>
            <div className="mt-1">
              <TMDBGenresList
                genreIds={cardData?.genre_ids}
                mediaType={cardData?.media_type}
                useDarkThemeFlag={useDarkThemeFlag}
                genreToShow={2}
                t={t}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

TMDBCardDialogInfo.displayName = "TMDBCardDialogInfo";
