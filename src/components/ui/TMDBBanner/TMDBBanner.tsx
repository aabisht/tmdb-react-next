import { IMediaResults } from "@type/commonTypes";
import { BUTTON_VARIANTS, MEDIA } from "@constants";
import { TMDBIcon, TMDBLink, TMDBBannerBackground } from "..";
import { useTranslation } from "next-i18next";
import { getMediaHref, getMediaIconName, getMediaYear } from "@utils/helpers";
import { memo } from "react";

export const TMDBBanner = memo(
  ({ bannerData }: { bannerData: IMediaResults }) => {
    const { t } = useTranslation("common");

    const releaseYear = (): number => {
      const date = (
        bannerData.media_type === MEDIA.TV
          ? bannerData?.first_air_date
          : bannerData?.release_date
      ) as string;
      return getMediaYear(date);
    };

    return bannerData?.backdrop_path ? (
      <div className="h-screen overflow-hidden relative">
        <TMDBBannerBackground
          backdropPath={bannerData.backdrop_path}
          alt={bannerData.title || bannerData.name || ""}
        />
        <div className="relative h-full flex items-end z-[3] pb-[10vh]">
          <div className="container xl:px-8 relative xl:pr-0 pr-0 flex justify-between items-end">
            <div className="xl:pr-16 lg:pr-8">
              <div className="w-full max-w-[900px] text-white">
                <h2 className="text-white">
                  <TMDBIcon
                    iconsName={getMediaIconName(bannerData.media_type)}
                    isOutline={true}
                  />
                  <strong className="ml-4">
                    {bannerData.title ?? bannerData.name} ({releaseYear()})
                  </strong>
                </h2>
                <p className="line-clamp-3">{bannerData.overview}</p>
                <TMDBLink
                  href={getMediaHref(bannerData)}
                  severity={BUTTON_VARIANTS.LIGHT}
                  link={false}
                  outline={true}
                >
                  <>
                    <TMDBIcon iconsName="info" isOutline={true} />
                    <span className="ml-2">{t("ui.TMDBBanner.more_info")}</span>
                  </>
                </TMDBLink>
              </div>
            </div>
            <div>
              <div className="bg-black/60 text-white flex items-center justify-center p-3 border-l-2 border-solid border-white w-[117px]">
                <TMDBIcon iconsName="grade" isOutline={true} />
                <span className="ml-3">
                  {bannerData.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  },
);

TMDBBanner.displayName = "TMDBBanner";
