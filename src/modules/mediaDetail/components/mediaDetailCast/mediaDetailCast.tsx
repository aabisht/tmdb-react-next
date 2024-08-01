import { TMDBCastCard, TMDBIcon, TMDBLink } from "@components/ui";
import { IMediaDetailCastProps } from "@type/mediaDetailTypes";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { State } from "@type/store";
import { BUTTON_VARIANTS, THEME_NAME } from "@constants";

const MediaDetailCast = ({
  cast,
  mediaType,
  className,
  t,
}: IMediaDetailCastProps) => {
  const theme = useSelector(
    (state: State) => state?.themeSlice?.themeName as string,
  );
  const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;

  return (
    <div className={className}>
      <h2 className="h3 mb-3 xl:pr-[90px] text-[1.875rem]">
        <TMDBLink
          href={""}
          className={`no-underline inline-flex items-center group`}
          severity={
            useDarkThemeFlag ? BUTTON_VARIANTS.LIGHT : BUTTON_VARIANTS.DARK
          }
        >
          <strong>{t("mediaDetailPage.MediaDetailCast.cast")}</strong>
          <TMDBIcon
            iconsName="chevron_right"
            className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-[.625rem]"
          />
        </TMDBLink>
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {cast.slice(0, 6).map((_cast) => (
          <div key={`${_cast.id}-${_cast.cast_id}-${_cast.credit_id}`}>
            <TMDBCastCard cast={_cast} mediaType={mediaType} t={t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MediaDetailCast);
