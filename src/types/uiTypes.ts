export interface ITMDBIcon {
  isMaterial?: boolean;
  iconsName?: string;
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
