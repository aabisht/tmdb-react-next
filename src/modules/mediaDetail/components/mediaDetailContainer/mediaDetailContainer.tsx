import { IMediaDetailProps } from "@type/mediaDetailTypes";
import MediaDetailBanner from "../mediaDetailBanner/mediaDetailBanner";
import { memo } from "react";
import MediaDetailCast from "../mediaDetailCast/mediaDetailCast";
import { TMDBCardSlider } from "@components/ui";
import MovieCollection from "../movieCollection/MovieCollection";
import { MEDIA } from "@constants";
import TvSeasonList from "../tvSeasonList/TvSeasonList";

const MediaDetailContainer = ({
  mediaDetail,
  mediaType,
  mediaCast,
  mediaRecommendations,
  t,
}: IMediaDetailProps) => {
  return (
    <>
      <MediaDetailBanner
        mediaDetail={mediaDetail}
        mediaType={mediaType}
        t={t}
      />
      <div className="container xl:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <MediaDetailCast
              cast={mediaCast}
              mediaType={mediaType}
              t={t}
              className="mt-8"
            />
            {mediaType === MEDIA.MOVIE &&
              mediaDetail?.belongs_to_collection && (
                <MovieCollection
                  collection={mediaDetail?.belongs_to_collection}
                  t={t}
                  className="mt-8"
                />
              )}
            {mediaType === MEDIA.TV && mediaDetail?.seasons.length > 0 && (
              <TvSeasonList
                seasons={mediaDetail.seasons}
                id={mediaDetail.id}
                t={t}
                className="mt-8"
                tvShowName={mediaDetail?.title || mediaDetail?.name}
              />
            )}
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
      {mediaRecommendations.length > 0 && (
        <div className="mt-8">
          <TMDBCardSlider
            siderData={mediaRecommendations}
            sliderId="mediaRecommendations"
            t={t}
            sliderTitle="Recommendations"
          />
        </div>
      )}
    </>
  );
};

export default memo(MediaDetailContainer);
