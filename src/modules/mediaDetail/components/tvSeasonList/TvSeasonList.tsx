import { TMDBTVSeason } from "@components/ui";
import { ITvSeasonListProps } from "@type/mediaDetailTypes";
import React, { memo } from "react";

const TvSeasonList = ({
  seasons,
  id,
  tvShowName,
  t,
  className,
}: ITvSeasonListProps) => {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {seasons.map((season) => (
        <div key={season.id}>
          <TMDBTVSeason season={season} id={id} t={t} tvShowName={tvShowName} />
        </div>
      ))}
    </div>
  );
};

export default memo(TvSeasonList);
