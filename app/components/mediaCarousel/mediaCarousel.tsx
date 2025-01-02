"use client";

import { CrouselPrevNextArrow, MediaCard } from "@components";
import { ARROW_TYPE, BREAKPOINTS } from "@constants";
import { MediaCarouselProps } from "@definitions";
import dynamic from "next/dynamic";
import React from "react";
import style from "./mediaCarousel.module.scss";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export const MediaCarousel = ({ title, url, medias }: MediaCarouselProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: <CrouselPrevNextArrow arrowType={ARROW_TYPE.PRE} />,
    nextArrow: <CrouselPrevNextArrow arrowType={ARROW_TYPE.NEXT} />,
    responsive: [
      {
        breakpoint: BREAKPOINTS.XXL,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: BREAKPOINTS.XL,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: BREAKPOINTS.LG,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: BREAKPOINTS.MD,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: BREAKPOINTS.SM,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={style.mediaCarousel}>
      <h2>
        <Link href={url || ""}>{title}</Link>
      </h2>
      <Slider {...settings}>
        {medias.map((mediaItem) => (
          <div key={mediaItem.id}>
            <MediaCard media={mediaItem} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
