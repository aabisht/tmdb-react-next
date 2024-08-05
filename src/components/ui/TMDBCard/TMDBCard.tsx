import React, { memo, useCallback, useState } from "react";
import { POSTER_SIZES, THEME_NAME } from "@constants";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { TMDBCardDialogInfo, TMDBIcon, TMDBImg, TMDBLink } from "..";
import { getMediaHref } from "@utils/helpers";
import { ITMDBCard } from "@type/uiTypes";

export const TMDBCard = memo(
  ({ cardData, cardId, imagePriority, t }: ITMDBCard) => {
    const [isHovered, setIsHovered] = useState(false);

    const theme = useSelector(
      (state: State) => state?.themeSlice?.themeName as string,
    );

    const useDarkThemeFlag = theme === THEME_NAME.DARK;

    /* 
    Callbacks for Handlers: Used useCallback for handleMouseEnter, handleMouseLeave,
    and getMediaHref to avoid re-creating these functions on each render.
  */
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    const mediaTitle = (cardData?.title ?? cardData?.name) as string;

    const renderCardImage = () => {
      if (cardData?.poster_path) {
        return (
          <TMDBImg
            src={cardData?.poster_path}
            alt={mediaTitle}
            imgType={POSTER_SIZES.W342}
            width={342}
            height={513}
            className="h-full object-cover"
            priority={imagePriority}
          />
        );
      } else {
        return (
          <div
            className={`w-full h-full aspect-[185/277] flex justify-center items-center ${
              useDarkThemeFlag ? "bg-white/10" : "bg-black/10"
            }`}
          >
            <TMDBIcon iconsName="image" className="!text-8xl" isOutline />
          </div>
        );
      }
    };

    return (
      <div
        className={`overflow-hidden relative h-full transition-transform transform shadow-md ${isHovered ? "scale-110 z-10 rounded-md" : "rounded"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title={mediaTitle}
        id={`${cardId}-${cardData?.id}`}
        data-testid={`${cardId}-${cardData?.id}`}
      >
        <TMDBLink
          href={getMediaHref(cardData)}
          className="h-full block no-underline"
          aria-haspopup="true"
          aria-expanded={isHovered}
          aria-label={t("ui.TMDBCard.view_media_label", {
            mediaName: mediaTitle,
          })}
        >
          {renderCardImage()}
        </TMDBLink>
        <div
          className={`absolute left-0 right-0 max-h-[183px] overflow-hidden transition-[bottom] rounded-t-xl ${isHovered ? "bottom-0" : "bottom-[-100%]"}`}
          aria-labelledby={`${cardId}-${cardData?.id}`}
          tabIndex={-1}
        >
          <TMDBCardDialogInfo
            cardData={cardData}
            useDarkThemeFlag={useDarkThemeFlag}
            href={getMediaHref(cardData)}
            t={t}
          />
        </div>
      </div>
    );
  },
);

TMDBCard.displayName = "TMDBCard";
