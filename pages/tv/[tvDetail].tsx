import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layouts from "@components/layouts/layouts";
import { wrapper } from "src/redux/store";
import MediaDetailContainer from "@modules/mediaDetail/components/mediaDetailContainer/mediaDetailContainer";
import { getMediaId, getMediaYear } from "@utils/helpers";
import { fetchMediaDetail } from "@modules/mediaDetail/components/mediaDetailContainer/redux/action";
import { MEDIA } from "@constants";
import { useAppSelector } from "@redux/hooks";
import { State } from "@type/store";
import { IMedaiData } from "@type/mediaDetailTypes";

const TVDetail: NextPage = () => {
  const { t } = useTranslation("common");
  const mediaDetail = useAppSelector(
    (state: State) => state.mediaDetailSlice?.mediaDetail,
  );

  return (
    <Layouts
      metatags={{
        page_title: `${mediaDetail?.name} (${getMediaYear(mediaDetail?.first_air_date as string)}) | The Movie Database (TMDB)`,
      }}
      t={t}
    >
      <MediaDetailContainer
        t={t}
        mediaType={MEDIA.TV}
        mediaDetail={mediaDetail as IMedaiData}
      />
    </Layouts>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { locale = "en", query } = context;

    await store.dispatch<any>(
      fetchMediaDetail(getMediaId(query?.tvDetail as string), MEDIA.TV),
    );

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  });

export default TVDetail;
