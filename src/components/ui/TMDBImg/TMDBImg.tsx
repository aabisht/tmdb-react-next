import { ITMDBImg } from "@type/commonTypes";
import { getBaseURL } from "@utils/apiHelper";
import Image from "next/image";

const TMDBImg = ({
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
};

export default TMDBImg;
