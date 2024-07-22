import { useSelector } from "react-redux";
import { State } from "@type/store";
import { IMediaResults } from "@type/commonTypes";
import { TMDBBanner, TMDBCardSlider } from "@components/ui";
import { TFunction } from "i18next";

const TrendingMedia = ({ t }: { t: TFunction }) => {
  const trendingMediaResults: IMediaResults[] = useSelector(
    (state: State) => state?.trendingMediaSlice?.results as IMediaResults[],
  );

  return (
    <>
      <TMDBBanner bannerData={trendingMediaResults[0]} />
      <TMDBCardSlider
        siderData={trendingMediaResults}
        sliderTitle={t("homePage.TrendingMedia.title")}
        sliderLink="/browse/all/trending/now"
        sliderId="trendingMediaSLider"
      />
    </>
  );
};

export default TrendingMedia;
