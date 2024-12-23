import Image from "next/image";
import React from "react";
import imgStyle from "./image.module.scss";
import { TMDBImageProps } from "@definitions";
import { getImageURL } from "@utils/apiHelper";

export const ImageTMDB = ({
  src,
  width,
  height,
  alt = "Image",
  loader,
  fill,
  sizes,
  quality,
  priority,
  placeholder,
  style,
  onLoad,
  onError,
  loading,
  blurDataURL,
  overrideSrc,
  className,
  tmdbImage,
  tmdbImageSize = "original",
}: TMDBImageProps) => {
  const finalSrc = tmdbImage ? `${getImageURL()}${tmdbImageSize}${src}` : src;

  const combinedClassName = `${imgStyle["img-fluid"]} ${className}`.trim();

  return (
    <Image
      src={finalSrc}
      width={width}
      height={height}
      alt={alt}
      loader={loader}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder={placeholder}
      style={style}
      onLoad={onLoad}
      onError={onError}
      loading={loading}
      blurDataURL={blurDataURL}
      overrideSrc={overrideSrc}
      className={combinedClassName}
    />
  );
};
