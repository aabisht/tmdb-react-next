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
  fetchMediaRecommendations,
} from "@modules/mediaDetail/components/mediaDetailContainer/redux/action";
import { MEDIA } from "@constants";
import { useAppSelector } from "@redux/hooks";
import { State } from "@type/store";
import { ICast, IMedaiData } from "@type/mediaDetailTypes";
import { IMediaResults } from "@type/commonTypes";
import {
  fetchGenresMovieList,
  fetchGenresTVList,
} from "@components/header/headerComponent/redux/action";

const TVDetail: NextPage = () => {
  const { t } = useTranslation("common");
  const mediaDetail = useAppSelector(
    (state: State) => state.mediaDetailSlice?.mediaDetail,
  );
  const mediaCast = useAppSelector(
    (state: State) => state.mediaDetailSlice?.mediaCast,
  );
  const mediaRecommendations = useAppSelector(
    (state: State) => state.mediaDetailSlice?.mediaRelated,
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
        mediaCast={mediaCast as ICast[]}
        mediaRecommendations={mediaRecommendations as IMediaResults[]}
      />
    </Layouts>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { locale = "en", query } = context;

    await store.dispatch<any>(fetchGenresMovieList());
    await store.dispatch<any>(fetchGenresTVList());

    await store.dispatch<any>(
      fetchMediaDetail(getMediaId(query?.tvDetail as string), MEDIA.TV),
    );

    await store.dispatch<any>(
      fetchMediaCast(getMediaId(query?.tvDetail as string), MEDIA.TV),
    );

    await store.dispatch<any>(
      fetchMediaRecommendations(
        getMediaId(query?.tvDetail as string),
        MEDIA.TV,
      ),
    );

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  });

export default TVDetail;
