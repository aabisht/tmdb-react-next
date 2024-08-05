import {
  TMDBBannerBackground,
  TMDBIcon,
  TMDBImg,
  TMDBLink,
} from "@components/ui";
import { MEDIA, POSTER_SIZES } from "@constants";
import { IMediaRuntime } from "@type/commonTypes";
import { IMediaDetailBannerProps } from "@type/mediaDetailTypes";
import {
  convertMinutes,
  getMediaIconName,
  getMediaYear,
  replaceSpaceWithDash,
} from "@utils/helpers";
import { memo, useEffect, useState } from "react";

const MediaDetailBanner = ({
  mediaDetail,
  mediaType,
  t,
}: IMediaDetailBannerProps) => {
  const [runtime, setRuntime] = useState<IMediaRuntime>();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setRuntime(convertMinutes(mediaDetail?.runtime));
    setTitle(mediaDetail?.title || mediaDetail?.name);
  }, [mediaDetail]);

  const getGenreAriaLabel = (genreName: string) => {
    return mediaType === MEDIA.MOVIE
      ? t("ui.TMDBGenre.view_genre_related_movie", {
          genreName: genreName,
        })
      : t("ui.TMDBGenre.view_genre_related_tv", {
          genreName: genreName,
        });
  };

  const releaseYear = (): number => {
    const date = (
      mediaType === MEDIA.TV
        ? mediaDetail?.first_air_date
        : mediaDetail?.release_date
    ) as string;
    return getMediaYear(date);
  };

  return mediaDetail?.backdrop_path ? (
    <div className="h-screen overflow-hidden relative min-h-[680px]">
      <TMDBBannerBackground
        backdropPath={mediaDetail?.backdrop_path}
        alt={title}
      />
      <div className="relative h-full flex items-end z-[3] pb-[10vh]">
        <div className="container xl:px-8 relative xl:pr-0 pr-0 flex justify-between items-end">
          <div className="xl:pr-16 lg:pr-8">
            <div className="grid grid-cols-12 gap-4 justify-start items-end">
              <div className="col-span-3 overflow-hidden shadow-md rounded">
                <TMDBImg
                  src={mediaDetail?.poster_path}
                  alt={title}
                  imgType={POSTER_SIZES.W342}
                  width={342}
                  height={513}
                  className="h-full w-full object-cover rounded border-4 border-solid border-white"
                />
              </div>
              <div className="col-span-9 max-w-[900px] text-white">
                <div>
                  <TMDBIcon
                    iconsName={getMediaIconName(mediaType)}
                    isOutline={true}
                    className="!text-5xl mr-4"
                  />
                  {mediaDetail?.adult && (
                    <TMDBIcon
                      iconsName="explicit"
                      isOutline={true}
                      className="!text-5xl"
                    />
                  )}
                </div>
                <h2 className="text-white mb-0">
                  <strong>
                    {title} ({releaseYear()})
                  </strong>
                </h2>
                <h3 className="text-white text-lg">
                  <strong>
                    <em>{mediaDetail?.tagline}</em>
                  </strong>
                </h3>
                <p className="mb-0">{mediaDetail?.overview}</p>
                <div className="flex justify-start items-start flex-wrap">
                  <ul className="m-0 flex flex-wrap justify-start items-start p-0 list-none">
                    {mediaDetail?.genres.map((genre) => {
                      return (
                        <li
                          key={genre.id}
                          className="m-0 p-0 relative first:pl-0 first:before:hidden before:content-[','] before:inline before:leading-none before:mr-[4px]"
                        >
                          <TMDBLink
                            href={`/genre/${genre.id}-${replaceSpaceWithDash(genre.name)}/${mediaType}`}
                            aria-label={getGenreAriaLabel(genre.name)}
                            className={`no-underline !text-white inline font-normal`}
                          >
                            {genre.name}
                          </TMDBLink>
                        </li>
                      );
                    })}
                  </ul>
                  {mediaDetail?.runtime && (
                    <div className={`ml-2 before:content-['●'] before:mr-2`}>
                      {(runtime?.days as number) > 0 && `${runtime?.days}d `}
                      {(runtime?.hours as number) > 0 && `${runtime?.hours}h `}
                      {(runtime?.minutes as number) > 0 &&
                        `${runtime?.minutes}m`}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black/60 text-white flex items-center justify-center p-3 border-l-2 border-solid border-white w-[117px]">
              <TMDBIcon iconsName="grade" isOutline={true} />
              <span className="ml-3">
                {mediaDetail?.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default memo(MediaDetailBanner);
