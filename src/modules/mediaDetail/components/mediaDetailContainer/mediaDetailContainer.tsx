import { IMediaDetailProps } from "@type/mediaDetailTypes";
import MediaDetailBanner from "../mediaDetailBanner/mediaDetailBanner";

const MediaDetailContainer = ({
  mediaDetail,
  mediaType,
  t,
}: IMediaDetailProps) => {
  return (
    <>
      <MediaDetailBanner
        mediaDetail={mediaDetail}
        mediaType={mediaType}
        t={t}
      />
    </>
  );
};

export default MediaDetailContainer;
