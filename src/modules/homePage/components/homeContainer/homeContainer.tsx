import TrendingMedia from "../trendingMedia/trendingMedia";
import { TFunction } from "i18next";

const HomeContainer = ({ t }: { t: TFunction }) => {
  return (
    <>
      <TrendingMedia t={t} />
    </>
  );
};

export default HomeContainer;
