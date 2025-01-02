import { CrouselPrevNextArrowProps } from "@definitions";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ARROW_TYPE } from "@constants";

export const CrouselPrevNextArrow = ({
  className,
  style,
  onClick,
  arrowType,
}: CrouselPrevNextArrowProps) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {arrowType === ARROW_TYPE.PRE ? (
        <ArrowBackIosIcon />
      ) : (
        <ArrowForwardIosIcon />
      )}
    </button>
  );
};
