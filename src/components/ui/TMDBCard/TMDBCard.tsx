import { IMediaResults } from "@type/commonTypes";
import React, { memo, useState } from "react";
import { MEDIA, POSTER_SIZES, THEME_NAME } from "@constants";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { TMDBButton, TMDBGenre, TMDBIcon, TMDBImg } from "..";
import { getMediaIconName, getMediaYear } from "@utils/helpers";

export const TMDBCard = memo(
  ({ cardData, cardId }: { cardData: IMediaResults; cardId: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const theme = useSelector(
      (state: State) => state?.themeSlice?.themeName as string,
    );

    const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;

    return (
      <div
        className={`overflow-hidden relative h-full transition-transform transform  shadow-md ${isHovered ? "scale-110 z-10 rounded-md" : " rounded"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={cardData?.title ?? cardData?.name ?? ""}
        id={`${cardId}-${cardData?.id}`}
      >
        <TMDBButton
          className="h-full block"
          aria-haspopup="true"
          aria-expanded={isHovered}
        >
          <TMDBImg
            path={cardData?.poster_path}
            alt={cardData?.title ?? cardData?.name ?? ""}
            imgType={POSTER_SIZES.W342}
            width={342}
            height={513}
            className="h-full object-cover"
          />
        </TMDBButton>
        <div
          className={`absolute left-0 right-0 max-h-[183px] overflow-hidden transition-[bottom] rounded-t-xl ${isHovered ? "bottom-0" : "bottom-[-100%]"}`}
          aria-labelledby={`${cardId}-${cardData?.id}`}
        >
          <TMDBCardDialogInfo
            cardData={cardData}
            useDarkThemeFlag={useDarkThemeFlag}
          />
        </div>
      </div>
    );
  },
);

const TMDBCardDialogInfo = memo(
  ({
    cardData,
    useDarkThemeFlag,
  }: {
    cardData: IMediaResults;
    useDarkThemeFlag: boolean;
  }) => {
    return (
      <div
        className={`p-2 pb-3 flex-auto h-full ${useDarkThemeFlag ? "bg-black-light text-white" : "bg-white text-black-light"}`}
      >
        <div className="flex flex-col justify-between items-stretch h-full">
          <div>
            <TMDBCardDialogButtons />
            <div className="ptrack-content">
              <div className="previewModal--detailsMetadata">
                <h2 className="text-sm font-bold mt-0 mb-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                  <TMDBIcon
                    iconsName={getMediaIconName(cardData.media_type)}
                    isOutline={true}
                    className="!text-sm mr-0.5 align-middle"
                  />
                  <span>{cardData?.title ?? cardData?.name}</span>
                </h2>
                <p
                  className="line-clamp-2 mt-0 mb-1.5 text-sm"
                  aria-label={cardData?.overview}
                >
                  {cardData?.overview}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <strong>
                {getMediaYear(
                  (cardData?.media_type === MEDIA.TV
                    ? cardData?.first_air_date
                    : cardData?.release_date) as string,
                )}
              </strong>
              <span className="flex items-center justify-end">
                <TMDBIcon
                  iconsName="grade"
                  isOutline={true}
                  className="!leading-none mr-1"
                />
                <strong>{cardData?.vote_average?.toFixed(1)}</strong>
              </span>
            </div>
            <div className="mt-1">
              <TMDBGenresList
                genreIds={cardData?.genre_ids}
                mediaType={cardData?.media_type}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

const TMDBCardDialogButtons = memo(() => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex justify-start items-start">
        <TMDBButton className="mr-2 leading-none">
          <TMDBIcon isOutline={false} iconsName="play_arrow" />
        </TMDBButton>
        <TMDBButton className="mr-2 leading-none">
          <TMDBIcon isOutline={false} iconsName="add" />
        </TMDBButton>
        <TMDBButton className="mr-2 leading-none">
          <TMDBIcon isOutline={true} iconsName="thumb_up" />
        </TMDBButton>
      </div>
      <div>
        <TMDBButton className="leading-none">
          <TMDBIcon isOutline={true} iconsName="keyboard_arrow_down" />
        </TMDBButton>
      </div>
    </div>
  );
});

const TMDBGenresList = memo(
  ({ genreIds, mediaType }: { genreIds: number[]; mediaType: string }) => {
    return (
      <ul className="m-0 flex flex-wrap justify-start items-start p-0 list-none">
        {genreIds?.map((genreId, index) => {
          return index <= 1 ? (
            <li
              key={genreId}
              className="m-0 p-0 relative mr-[10px] last:mr-0 pl-[20px] first:pl-0 first:before:hidden before:content-['●'] before:opacity-50 before:absolute before:left-0 before:top-[1px] before:leading-none"
            >
              <TMDBGenre
                genreId={genreId}
                mediaType={mediaType}
                className={`text-xs`}
              />
            </li>
          ) : (
            false
          );
        })}
      </ul>
    );
  },
);

TMDBCard.displayName = "TMDBCard";
TMDBCardDialogInfo.displayName = "TMDBCardDialogInfo";
TMDBCardDialogButtons.displayName = "TMDBCardDialogButtons";
TMDBGenresList.displayName = "TMDBGenresList";
