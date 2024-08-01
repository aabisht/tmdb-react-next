import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layouts from "@components/layouts/layouts";
import { wrapper } from "src/redux/store";
import MediaDetailContainer from "@modules/mediaDetail/components/mediaDetailContainer/mediaDetailContainer";
import { getMediaId, getMediaYear } from "@utils/helpers";
import {
  fetchMediaCast,
  fetchMediaDetail,
} from "@modules/mediaDetail/components/mediaDetailContainer/redux/action";
import { MEDIA } from "@constants";
import { useAppSelector } from "@redux/hooks";
import { State } from "@type/store";
import { ICast, IMedaiData } from "@type/mediaDetailTypes";

const MovieDetail: NextPage = () => {
  const { t } = useTranslation("common");
  const mediaDetail = useAppSelector(
    (state: State) => state.mediaDetailSlice?.mediaDetail,
  );
  const mediaCast = useAppSelector(
    (state: State) => state.mediaDetailSlice?.mediaCast,
  );

  return (
    <Layouts
      metatags={{
        page_title: `${mediaDetail?.title} (${getMediaYear(mediaDetail?.release_date as string)}) | The Movie Database (TMDB)`,
      }}
      t={t}
    >
      <MediaDetailContainer
        t={t}
        mediaType={MEDIA.MOVIE}
        mediaDetail={mediaDetail as IMedaiData}
        mediaCast={mediaCast as ICast[]}
      />
    </Layouts>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { locale = "en", query } = context;

    await store.dispatch<any>(
      fetchMediaDetail(getMediaId(query?.movieDetail as string), MEDIA.MOVIE),
    );

    await store.dispatch<any>(
      fetchMediaCast(getMediaId(query?.movieDetail as string), MEDIA.MOVIE),
    );

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  });

export default MovieDetail;
