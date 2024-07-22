import { LinkProps } from "next/link";
import { ButtonProps } from "primereact/button";
import { ReactElement } from "react";
import { IMediaResults } from "./commonTypes";

export interface ITMDBIcon {
  isOutline?: boolean;
  iconsName: string;
  className?: string;
}

export interface ITMDBImage {
  path: string;
  alt: string;
  imgType: string;
  imgSizeIndex: number;
  width: number;
  height: number;
  className?: string;
}

export interface ITMDBButton extends ButtonProps {}

export interface ITMDBLink extends LinkProps {
  children: ReactElement | string | undefined;
  className?: string;
  external?: boolean;
  severity?: string;
  link?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

export interface ITMDBCardSlider {
  siderData: IMediaResults[];
  sliderId: string;
  sliderTitle?: string;
  sliderLink?: string;
}

export interface ITMDBGenre {
  genreId: number;
  mediaType: string;
  className?: string;
}
