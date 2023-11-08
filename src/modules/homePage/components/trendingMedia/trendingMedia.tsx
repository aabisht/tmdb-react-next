import { useSelector } from "react-redux";
import { State } from "@type/store";
import { ITrendingMediaResults } from "@type/commonTypes";

const TrendingMedia = () => {
  const trendingMediaResults: ITrendingMediaResults[] = useSelector(
    (state: State) =>
      state?.trendingMediaSlice?.results as ITrendingMediaResults[],
  );

  return trendingMediaResults.map((trendingMediaResult) => {
    return (
      <div key={trendingMediaResult.id}>
        {trendingMediaResult.name || trendingMediaResult.title}
      </div>
    );
  });
};

export default TrendingMedia;
