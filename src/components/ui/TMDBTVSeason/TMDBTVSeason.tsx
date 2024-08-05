import { ITvSeasonItemProps } from "@type/uiTypes";
import React, { memo } from "react";
import { TMDBLink } from "../TMDBLink/TMDBLink";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { POSTER_SIZES, THEME_NAME } from "@constants";
import { TMDBImg } from "../TMDBImg/TMDBImg";
import { TMDBIcon } from "../TMDBIcon/TMDBIcon";
import { getMediaYear } from "@utils/helpers";

export const TMDBTVSeason = memo(
  ({ season, id, t, tvShowName, className }: ITvSeasonItemProps) => {
    const theme = useSelector(
      (state: State) => state?.themeSlice?.themeName as string,
    );
    const useDarkThemeFlag = theme === THEME_NAME.DARK;

    const renderImage = () => {
      if (season?.poster_path) {
        return (
          <TMDBImg
            src={season?.poster_path}
            alt={season?.name}
            imgType={POSTER_SIZES.W154}
            width={154}
            height={220}
            className="h-full w-full object-cover"
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
      <TMDBLink
        href={`tv/${id}/season/${season.season_number}`}
        className={`block relative shadow-md overflow-hidden rounded h-full w-full no-underline transition-none ${className} ${
          useDarkThemeFlag ? "!text-white" : "!text-black-light"
        }`}
        aria-label={t("ui.TMDBTVSeason.view_season", {
          seasonName: season?.name,
          tvShowName: tvShowName,
        })}
        title={t("ui.TMDBTVSeason.view_season", {
          seasonName: season?.name,
          tvShowName: tvShowName,
        })}
      >
        <div className="flex gap-4 w-full h-full  justify-start items-center">
          <div className="flex-initial w-[154px] h-full">{renderImage()}</div>
          <div className="flex-initial w-[calc(100%-154px)] p-8 pl-0 h-full">
            <div className="flex flex-col justify-between items-stretch h-full">
              <div>
                <h2 className="mb-2 text-lg leading-none">
                  <strong>{season?.name}</strong>
                </h2>
                <div className="font-normal text-sm">
                  <div className="mt-1">
                    <strong>{getMediaYear(season?.air_date)}</strong>
                  </div>
                  <div className="mt-1">
                    <em>
                      {t("ui.TMDBTVSeason.episodes", {
                        episodesNumber: season?.episode_count,
                      })}
                    </em>
                  </div>
                </div>
                {season?.overview && (
                  <p className="line-clamp-3 mt-3 font-normal">
                    {season?.overview}
                  </p>
                )}
              </div>
              <div className="flex items-center font-normal mt-1">
                <TMDBIcon
                  iconsName="grade"
                  isOutline
                  className="!leading-none mr-1"
                />
                <strong>{season?.vote_average.toFixed(1)}</strong>
              </div>
            </div>
          </div>
        </div>
      </TMDBLink>
    );
  },
);

TMDBTVSeason.displayName = "TMDBTVSeason";
