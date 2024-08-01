import { IMediaDetailProps } from "@type/mediaDetailTypes";
import MediaDetailBanner from "../mediaDetailBanner/mediaDetailBanner";
import { memo } from "react";
import MediaDetailCast from "../mediaDetailCast/mediaDetailCast";

const MediaDetailContainer = ({
  mediaDetail,
  mediaType,
  mediaCast,
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
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </>
  );
};

export default memo(MediaDetailContainer);
