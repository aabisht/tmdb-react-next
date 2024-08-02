import { BACKDROP_SIZES } from "@constants";
import { TMDBImg } from "..";
import { memo } from "react";
import { ITMDBBanner } from "@type/uiTypes";

export const TMDBBannerBackground = memo(
  ({ backdropPath, alt }: ITMDBBanner) => {
    return (
      <div>
        <TMDBImg
          src={backdropPath}
          alt={alt}
          imgType={BACKDROP_SIZES.W1280}
          width={1280}
          height={720}
          className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 max-w-none min-w-full min-h-full z-[1] object-cover"
          priority={true}
        />
        <div
          aria-hidden="true"
          className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 w-full h-full z-[2] bg-banner-gradient from-black/60 from-0% to-transparent to-[102%]"
        ></div>
      </div>
    );
  },
);

TMDBBannerBackground.displayName = "TMDBBannerBackground";
