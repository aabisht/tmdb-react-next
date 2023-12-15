import { useTranslation } from "next-i18next";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layouts from "@components/layouts/layouts";
import { wrapper } from "src/redux/store";
import { fetchTrendingMedia } from "@modules/homePage/components/trendingMedia/redux/action";
import { getTotalSliderItems } from "@utils/apiHelper";
import HomeContainer from "@modules/homePage/components/homeContainer/homeContainer";

const Homepage: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layouts metatags={{ page_title: "Home Page" }} t={t}>
      <HomeContainer t={t} />
    </Layouts>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) =>
  // async ({ locale = "en", params, req, res, query }) => {
  async ({ locale = "en" }) => {
    await store.dispatch<any>(fetchTrendingMedia(getTotalSliderItems()));
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  },
);

export default Homepage;
