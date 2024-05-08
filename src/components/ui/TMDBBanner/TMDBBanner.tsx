import { ITrendingMediaResults } from "@type/commonTypes";
import TMDBImg from "../TMDBImg/TMDBImg";
import { BACKDROP_SIZES, BUTTON_VARIANTS, MEDIA } from "@constants";
import { ReactElement } from "react";
import { TMDBIcon, TMDBLink } from "..";
import { useTranslation } from "next-i18next";

export const TMDBBanner = ({
  bannerData,
}: {
  bannerData: ITrendingMediaResults;
}) => {
  const { t } = useTranslation("common");
  const bannerIcon = (): ReactElement => {
    switch (bannerData.media_type) {
      case MEDIA.MOVIE:
        return <TMDBIcon iconsName="movie" isOutline={true} />;
      case MEDIA.MOVIES:
        return <TMDBIcon iconsName="movie" isOutline={true} />;
      case MEDIA.TV:
        return <TMDBIcon iconsName="tv" isOutline={true} />;
      case MEDIA.PERSON:
        return <TMDBIcon iconsName="person" isOutline={true} />;
      case MEDIA.EPISODES:
        return <TMDBIcon iconsName="tv" isOutline={true} />;
      case MEDIA.REGIONS:
        return <TMDBIcon iconsName="world" isOutline={true} />;
      default:
        return <></>;
    }
  };

  const releaseYear = (): number => {
    const date =
      bannerData.media_type === MEDIA.TV
        ? bannerData?.first_air_date
        : bannerData?.release_date;
    return new Date(date || "").getFullYear();
  };

  return bannerData?.backdrop_path ? (
    <div className="h-screen overflow-hidden relative">
      <div>
        <TMDBImg
          path={bannerData.backdrop_path}
          alt={bannerData.title || bannerData.name || ""}
          imgType={BACKDROP_SIZES.W1280}
          width={1280}
          height={720}
          className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 max-w-none min-w-full min-h-full z-[1] object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 w-full h-full z-[2] bg-banner-gradient from-black/60 from-0% to-transparent to-[102%]"
        ></div>
      </div>
      <div className="relative h-full flex items-end z-[3] pb-[10vh]">
        <div className="container xl:px-8 relative xl:pr-0 pr-0 flex justify-between items-end">
          <div className="xl:pr-16 lg:pr-8">
            <div className="w-full max-w-[900px] text-white">
              <h2 className="text-white">
                {bannerIcon()}
                <strong className="ml-4">
                  {bannerData.title || bannerData.name} ({releaseYear()})
                </strong>
              </h2>
              <p className="line-clamp-3">{bannerData.overview}</p>
              <TMDBLink
                href={""}
                severity={BUTTON_VARIANTS.LIGHT}
                link={false}
                outline={true}
              >
                <>
                  <TMDBIcon iconsName="info" isOutline={true} />
                  <span className="ml-2">{t("ui.TMDBBanner.moreInfo")}</span>
                </>
              </TMDBLink>
            </div>
          </div>
          <div>
            <div className="bg-black/60 text-white flex items-center justify-center p-3 border-l-2 border-solid border-white w-[117px]">
              <TMDBIcon iconsName="grade" isOutline={true} />
              <span className="ml-3">{bannerData.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
