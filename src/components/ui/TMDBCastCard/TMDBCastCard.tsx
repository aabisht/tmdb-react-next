import { IRole } from "@type/mediaDetailTypes";
import React, { memo, useEffect, useState } from "react";
import { TMDBImg } from "../TMDBImg/TMDBImg";
import { GENDER, MEDIA, PROFILE_SIZES, THEME_NAME } from "@constants";
import { TMDBLink } from "../TMDBLink/TMDBLink";
import { getCastHref } from "@utils/helpers";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { TMDBIcon } from "../TMDBIcon/TMDBIcon";
import { ITMDBCastCardProps } from "@type/uiTypes";

export const TMDBCastCard = memo(
  ({ cast, mediaType, t }: ITMDBCastCardProps) => {
    const theme = useSelector(
      (state: State) => state?.themeSlice?.themeName as string,
    );
    const useDarkThemeFlag = theme === THEME_NAME.DARK;

    const [character, setCharacter] = useState<string>();
    const [episodes, setEpisodes] = useState<number>();

    useEffect(() => {
      if (mediaType === MEDIA.TV) {
        const role = cast.roles as IRole[];
        setCharacter(role[0].character);
        setEpisodes(role[0].episode_count);
      } else {
        setCharacter(cast.character as string);
      }
    }, [cast, mediaType]);

    const renderCastImage = () => {
      if (cast.profile_path) {
        return (
          <TMDBImg
            src={cast.profile_path}
            alt={cast.name}
            imgType={PROFILE_SIZES.W185}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        );
      } else {
        return (
          <div
            className={`w-full aspect-[185/277] flex justify-center items-center ${
              useDarkThemeFlag ? "bg-white/10" : "bg-black/10"
            }`}
          >
            <TMDBIcon
              iconsName={cast.gender === GENDER.FEMALE ? "face_2" : "face_6"}
              className="!text-8xl"
            />
          </div>
        );
      }
    };

    return (
      <TMDBLink
        href={getCastHref(cast)}
        className={`block relative shadow-md rounded h-full w-full max-w-[185px] no-underline transition-none ${
          useDarkThemeFlag ? "!text-white" : "!text-black-light"
        }`}
        aria-label={t("ui.TMDBCastCard.view_person", { personName: cast.name })}
        title={t("ui.TMDBCastCard.view_person", { personName: cast.name })}
      >
        {renderCastImage()}
        <div className="py-1.5 px-1">
          <h2 className="text-sm font-bold mb-1 leading-normal">{cast.name}</h2>
          <p className="text-sm font-normal m-0">
            {character}
            {episodes && episodes > 0 && (
              <>
                <br />
                <small>
                  <strong>
                    {t("ui.TMDBCastCard.episodes", {
                      episodesNumber: episodes,
                    })}
                  </strong>
                </small>
              </>
            )}
          </p>
        </div>
      </TMDBLink>
    );
  },
);

TMDBCastCard.displayName = "TMDBCastCard";
