import React, { memo, useCallback, useState } from "react";
import { POSTER_SIZES, THEME_NAME } from "@constants";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { TMDBCardDialogInfo, TMDBImg, TMDBLink } from "..";
import { replaceSpaceWithDash } from "@utils/helpers";
import { ITMDBCard } from "@type/uiTypes";

export const TMDBCard = memo(({ cardData, cardId, t }: ITMDBCard) => {
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

  const getMediaHref = useCallback(() => {
    const mediaTitle = (cardData?.title ?? cardData?.name) as string;
    return `${cardData?.media_type}/${cardData?.id}-${replaceSpaceWithDash(mediaTitle)}`;
  }, [cardData]);

  const mediaTitle = (cardData?.title ?? cardData?.name) as string;

  return (
    <div
      className={`overflow-hidden relative h-full transition-transform transform shadow-md ${isHovered ? "scale-110 z-10 rounded-md" : "rounded"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={mediaTitle}
      id={`${cardId}-${cardData?.id}`}
    >
      <TMDBLink
        href={getMediaHref()}
        className="h-full block no-underline"
        aria-haspopup="true"
        aria-expanded={isHovered}
        aria-label={t("ui.TMDBCard.view_media_label", {
          mediaName: mediaTitle,
        })}
      >
        <TMDBImg
          path={cardData?.poster_path}
          alt={mediaTitle}
          imgType={POSTER_SIZES.W342}
          width={342}
          height={513}
          className="h-full object-cover"
        />
      </TMDBLink>
      <div
        className={`absolute left-0 right-0 max-h-[183px] overflow-hidden transition-[bottom] rounded-t-xl ${isHovered ? "bottom-0" : "bottom-[-100%]"}`}
        aria-labelledby={`${cardId}-${cardData?.id}`}
        tabIndex={-1}
      >
        <TMDBCardDialogInfo
          cardData={cardData}
          useDarkThemeFlag={useDarkThemeFlag}
          href={getMediaHref()}
          t={t}
        />
      </div>
    </div>
  );
});

TMDBCard.displayName = "TMDBCard";
