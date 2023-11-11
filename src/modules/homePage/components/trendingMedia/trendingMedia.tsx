import { useSelector } from "react-redux";
import { State } from "@type/store";
import { ITrendingMediaResults } from "@type/commonTypes";
import { TMDBBanner } from "@components/ui";

const TrendingMedia = () => {
  const trendingMediaResults: ITrendingMediaResults[] = useSelector(
    (state: State) =>
      state?.trendingMediaSlice?.results as ITrendingMediaResults[],
  );

  return (
    <>
      <TMDBBanner bannerData={trendingMediaResults[0]} />
      {trendingMediaResults.map((trendingMediaResult) => {
        return (
          <div key={trendingMediaResult.id}>
            {trendingMediaResult.name || trendingMediaResult.title}
          </div>
        );
      })}
    </>
  );
};

export default TrendingMedia;
