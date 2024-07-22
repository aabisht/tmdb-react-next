import { ITMDBImg } from "@type/commonTypes";
import { getBaseURL } from "@utils/apiHelper";
import Image from "next/image";
import { memo } from "react";

export const TMDBImg = memo(
  ({
    path,
    alt,
    imgType,
    width,
    height,
    quality = 100,
    className = "",
  }: ITMDBImg) => {
    const baseURL = getBaseURL();
    const src = `${baseURL}${imgType}${path}`;

    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        className={className}
      />
    );
  },
);

TMDBImg.displayName = "TMDBImg";
