import React, { memo } from "react";
import { TMDBButton, TMDBIcon } from "@components/ui";
import { ARROW_TYPE, THEME_NAME } from "@constants";
import { useSelector } from "react-redux";
import { State } from "@type/store";

export const TMDBPrevArrow = memo(
  ({ className, style, onClick, arrowType }: any) => {
    const theme = useSelector(
      (state: State) => state?.themeSlice?.themeName as string,
    );

    const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;

    const isPrevious = arrowType === ARROW_TYPE.PREVIOUS;
    const arrowDirectionClass = isPrevious
      ? "xl:-left-6 -left-4"
      : "xl:-right-6 -right-4";
    const arrowIconName = isPrevious ? "chevron_left" : "chevron_right";
    const themeBtnCLass = useDarkThemeFlag
      ? "bg-black/[0.3]"
      : "bg-white/[0.3]";

    return (
      <TMDBButton
        className={`absolute flex items-center justify-center h-full z-[2] xl:w-6 w-3 top-0 transition-all duration-300 group-2 opacity-0 group-hover:opacity-100 ${className} ${arrowDirectionClass} ${themeBtnCLass}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <TMDBIcon
          iconsName={arrowIconName}
          className="!text-[30px] transition-all duration-300 [.group-2:hover_&]:scale-150"
        />
      </TMDBButton>
    );
  },
);

TMDBPrevArrow.displayName = "TMDBPrevArrow";
