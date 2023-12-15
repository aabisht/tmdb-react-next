import { useSelector } from "react-redux";
import { State } from "@type/store";
import { ITrendingMediaResults } from "@type/commonTypes";
import { TMDBBanner } from "@components/ui";
import TMDBCardSlider from "@components/ui/TMDBCardSlider/TMDBCardSlider";
import { TFunction } from "i18next";

const TrendingMedia = ({ t }: { t: TFunction }) => {
  const trendingMediaResults: ITrendingMediaResults[] = useSelector(
    (state: State) =>
      state?.trendingMediaSlice?.results as ITrendingMediaResults[],
  );

  return (
    <>
      <TMDBBanner bannerData={trendingMediaResults[0]} />
      <TMDBCardSlider
        siderData={trendingMediaResults}
        sliderTitle={t("homePage.TrendingMedia.title")}
        sliderLink="/browse/all/trending/now"
      />
      {/* {trendingMediaResults.map((trendingMediaResult) => {
        return (
          <div key={trendingMediaResult.id}>
            <TMDBCard cardData={trendingMediaResults[0]} />
          </div>
        );
      })} */}
    </>
  );
};

export default TrendingMedia;
