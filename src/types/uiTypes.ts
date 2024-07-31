import { LinkProps } from "next/link";
import { ButtonProps } from "primereact/button";
import { IMediaResults } from "./commonTypes";
import { TFunction } from "i18next";

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
  children: React.ReactNode | string | undefined;
  className?: string;
  external?: boolean;
  severity?: string;
  link?: boolean;
  outline?: boolean;
  rounded?: boolean;
  title?: string;
  tabIndex?: number;
}

export interface ITMDBCardSlider {
  siderData: IMediaResults[];
  sliderId: string;
  sliderTitle?: string;
  sliderLink?: string;
  t: TFunction;
}

export interface ITMDBGenre {
  genreId: number;
  mediaType: string;
  className?: string;
  tabIndex?: number;
  t: TFunction;
}

export interface ITMDBCard {
  cardData: IMediaResults;
  cardId: string;
  t: TFunction;
}

export interface ITMDBCardDialogInfo {
  cardData: IMediaResults;
  href: string;
  useDarkThemeFlag: boolean;
  t: TFunction;
}

export interface ITMDBGenresList {
  genreIds: number[];
  mediaType: string;
  useDarkThemeFlag: boolean;
  genreToShow: number;
  t: TFunction;
}

export interface ITMDBBanner {
  backdropPath: string;
  alt: string;
}
