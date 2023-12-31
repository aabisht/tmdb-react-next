import { ITMDBCardSlider } from "@type/uiTypes";
import React, { useRef } from "react";
import { TMDBButton, TMDBIcon, TMDBLink } from "..";
import TMDBCard from "../TMDBCard/TMDBCard";
import { SCREENS } from "@constants";
import Slider from "react-slick";
import "node_modules/slick-carousel/slick/slick.css";
import style from "./TMDBCardSlider.module.css";

const TMDBCardSlider = ({
  siderData,
  sliderTitle,
  sliderLink,
}: ITMDBCardSlider) => {
  const slider = useRef<any>(null);

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <TMDBButton
        className={`${className} absolute flex items-center justify-center h-full z-[2] xl:w-6 w-3 top-0 bg-white/[0.3] transition-all xl:-left-6 -left-4 duration-300 group-2 opacity-0 group-hover:opacity-100`}
        style={{ ...style }}
        onClick={onClick}
      >
        <TMDBIcon
          iconsName="chevron_left"
          className="!text-[30px] transition-all duration-300 [.group-2:hover_&]:scale-150"
        />
      </TMDBButton>
    );
  };

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <TMDBButton
        className={`${className} absolute flex items-center justify-center h-full z-[2] xl:w-6 w-3 top-0 bg-white/[0.3] transition-all xl:-right-6 -right-4 duration-300 group-2 opacity-0 group-hover:opacity-100`}
        style={{ ...style }}
        onClick={onClick}
      >
        <TMDBIcon
          iconsName="chevron_right"
          className="!text-[30px] transition-all duration-300 [.group-2:hover_&]:scale-150"
        />
      </TMDBButton>
    );
  };

  const sliderSetting = {
    dots: true,
    infinite: sliderTitle ? true : false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
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
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: React.ReactNode) =>
      sliderTitle ? (
        <>
          <ul className="absolute top-0 xl:right-8 right-4 z-[2] flex items-center justify-center m-0 p-0 -mx-[2px] list-none slick-dots-list transition-all duration-300 opacity-0 group-hover:opacity-100">
            {dots}
          </ul>
        </>
      ) : (
        <></>
      ),
    customPaging: (index: number) => (
      <TMDBButton className={`w-3 h-[2px] block`}>
        <span className="hidden">{index + 1}</span>
      </TMDBButton>
    ),
  };

  return (
    <div className="relative group overflow-hidden xl:mt-8 mt-4 xl:pb-8 pb-4">
      {sliderTitle && (
        <div className="container xl:px-8">
          <h2 className="h3 mb-3 xl:pr-[90px] text-[1.875rem]">
            {sliderLink ? (
              <TMDBLink
                href={sliderLink}
                className="no-underline inline-flex items-center group-2"
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
        <Slider ref={slider} {...sliderSetting}>
          {siderData.map((slide, index) => (
            <div className="xl:px-2 px-1 h-full" key={index}>
              <TMDBCard cardData={slide} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TMDBCardSlider;
