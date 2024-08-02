import { ITMDBImg } from "@type/commonTypes";
import { getBaseURL } from "@utils/apiHelper";
import Image from "next/image";
import { memo } from "react";

export const TMDBImg = memo(
  ({
    src,
    imgType,
    width,
    height,
    alt,
    fill,
    sizes,
    quality = 70,
    priority,
    placeholder,
    style,
    loading,
    blurDataURL,
    overrideSrc,
    className,
    loader,
    onLoad,
    onError,
  }: ITMDBImg) => {
    const baseURL = getBaseURL();
    const _src = `${baseURL}${imgType}${src}`;

    return (
      <Image
        src={_src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        className={className}
        fill={fill}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        style={style}
        loading={loading}
        blurDataURL={blurDataURL}
        overrideSrc={overrideSrc}
        loader={loader}
        onLoad={onLoad}
        onError={onError}
      />
    );
  },
);

TMDBImg.displayName = "TMDBImg";
