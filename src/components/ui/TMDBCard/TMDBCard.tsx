import { ITrendingMediaResults } from "@type/commonTypes";
import React from "react";
import TMDBImg from "../TMDBImg/TMDBImg";
import { POSTER_SIZES } from "@constants";
import { TMDBButton } from "..";

const TMDBCard = ({ cardData }: { cardData: ITrendingMediaResults }) => {
  return (
    <TMDBButton className="h-full">
      <TMDBImg
        path={cardData.poster_path}
        alt={cardData.title || cardData.name || ""}
        imgType={POSTER_SIZES.W342}
        width={342}
        height={513}
        className="h-full object-cover"
      />
    </TMDBButton>
  );
};

export default TMDBCard;
