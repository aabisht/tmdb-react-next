import { ITMDBCardSlider } from "@type/uiTypes";
import React, { memo, useRef } from "react";
import { TMDBButton, TMDBCard, TMDBIcon, TMDBLink, TMDBPrevArrow } from "..";
import { ARROW_TYPE, BUTTON_VARIANTS, SCREENS, THEME_NAME } from "@constants";
import Slider from "react-slick";
import "node_modules/slick-carousel/slick/slick.css";
import style from "./TMDBCardSlider.module.css";
import { useSelector } from "react-redux";
import { State } from "@type/store";

export const TMDBCardSlider = memo(
  ({ siderData, sliderTitle, sliderLink, sliderId, t }: ITMDBCardSlider) => {
    const theme = useSelector(
      (state: State) => state?.themeSlice?.themeName as string,
    );

    const useDarkThemeFlag: boolean = theme === THEME_NAME.DARK;

    const slider = useRef<Slider>(null);
    const responsive = [
      {
        breakpoint: SCREENS.XL_MIN,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: SCREENS.LG_MIN,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: SCREENS.MD_MIN,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ];

    const appendDots = (dots: React.ReactNode) => {
      return sliderTitle ? (
        <div>
          <ul className="absolute top-0 xl:right-8 right-4 z-[2] flex items-center justify-center m-0 p-0 -mx-[2px] list-none slick-dots-list transition-all duration-300 opacity-0 group-hover:opacity-100">
            {dots}
          </ul>
        </div>
      ) : (
        <></>
      );
    };

    const customPaging = (index: number) => (
      <TMDBButton
        className={`w-3 h-[2px] block ${useDarkThemeFlag ? "dark-btn" : "light-btn"}`}
      >
        <span className="hidden">{index + 1}</span>
      </TMDBButton>
    );

    const sliderSettings = {
      dots: true,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: responsive,
      nextArrow: <TMDBPrevArrow arrowType={ARROW_TYPE.NEXT} />,
      prevArrow: <TMDBPrevArrow arrowType={ARROW_TYPE.PREVIOUS} />,
      appendDots: (dots: React.ReactNode) => appendDots(dots),
      customPaging: (index: number) => customPaging(index),
    };

    return (
      <div
        className="relative group overflow-hidden xl:mt-8 mt-4 xl:pb-8 pb-4"
        id={sliderId}
      >
        {sliderTitle && (
          <div className="container xl:px-8">
            <h2 className="h3 mb-3 xl:pr-[90px] text-[1.875rem]">
              {sliderLink ? (
                <TMDBLink
                  href={sliderLink}
                  className={`no-underline inline-flex items-center group-2`}
                  severity={
                    useDarkThemeFlag
                      ? BUTTON_VARIANTS.LIGHT
                      : BUTTON_VARIANTS.DARK
                  }
                >
                  <>
                    <strong>{sliderTitle}</strong>
                    <TMDBIcon
                      iconsName="chevron_right"
                      className="transition-all duration-300 opacity-0 group-hover:opacity-100 [.group-2:hover_&]:translate-x-[.625rem]"
                    />
                  </>
                </TMDBLink>
              ) : (
                <strong>{sliderTitle}</strong>
              )}
            </h2>
          </div>
        )}
        <div
          className={`${style["card-slider"]} ${
            sliderTitle ? style["has-title"] : ""
          }`}
        >
          <Slider ref={slider} {...sliderSettings}>
            {siderData.map((slide, index) => (
              <div className="px-2 h-full" key={index}>
                <TMDBCard cardData={slide} cardId={sliderId} t={t} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  },
);

TMDBCardSlider.displayName = "TMDBCardSlider";
