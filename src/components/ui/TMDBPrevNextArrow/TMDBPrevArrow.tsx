import React, { memo } from "react";
import { TMDBButton, TMDBIcon } from "@components/ui";
import { ARROW_TYPE } from "@constants";

export const TMDBPrevArrow = memo(function TMDBPrevArrow({
  className,
  style,
  onClick,
  arrowType,
}: any) {
  const isPrevious = arrowType === ARROW_TYPE.PREVIOUS;
  const arrowDirectionClass = isPrevious
    ? "xl:-left-6 -left-4"
    : "xl:-right-6 -right-4";
  const arrowIconName = isPrevious ? "chevron_left" : "chevron_right";

  return (
    <TMDBButton
      className={`absolute flex items-center justify-center h-full z-[2] xl:w-6 w-3 top-0 bg-white/[0.3] transition-all duration-300 group-2 opacity-0 group-hover:opacity-100 ${className} ${arrowDirectionClass}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <TMDBIcon
        iconsName={arrowIconName}
        className="!text-[30px] transition-all duration-300 [.group-2:hover_&]:scale-150"
      />
    </TMDBButton>
  );
});
