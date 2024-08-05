import {
  TMDBBannerBackground,
  TMDBIcon,
  TMDBImg,
  TMDBLink,
} from "@components/ui";
import { BUTTON_VARIANTS, POSTER_SIZES } from "@constants";
import { IMovieCollectionProps } from "@type/mediaDetailTypes";
import { replaceSpaceWithDash } from "@utils/helpers";
import React, { memo } from "react";

const MovieCollection = ({
  collection,
  t,
  className,
}: IMovieCollectionProps) => {
  return (
    <div
      className={`overflow-hidden relative rounded-xl p-8 flex justify-start items-center ${className}`}
    >
      <TMDBBannerBackground
        backdropPath={collection.backdrop_path}
        alt={collection.name}
      />
      <div className="grid grid-cols-12 gap-4 relative z-10 w-full items-center">
        <div className="col-span-2 overflow-hidden shadow-md rounded">
          <TMDBImg
            src={collection.poster_path}
            alt={collection.name}
            imgType={POSTER_SIZES.W154}
            width={154}
            height={231}
            quality={100}
            className="h-full w-full object-cover rounded border-4 border-solid border-white"
          />
        </div>
        <div className="col-span-10 text-white">
          <h2 className="text-white mb-3">
            <strong>
              {t("mediaDetailPage.MovieCollection.part_of", {
                collectionName: collection.name,
              })}
            </strong>
          </h2>
          <div>
            <TMDBLink
              href={`/collection/${collection.id}-${replaceSpaceWithDash(collection.name)}`}
              link={false}
              outline={true}
              severity={BUTTON_VARIANTS.LIGHT}
              aria-label={t(
                "mediaDetailPage.MovieCollection.view_collection_name",
                {
                  collectionName: collection.name,
                },
              )}
            >
              <TMDBIcon
                iconsName="video_library"
                className="align-middle mr-2"
              />
              <span className="align-middle">
                {t("mediaDetailPage.MovieCollection.view_collection")}
              </span>
            </TMDBLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieCollection);
