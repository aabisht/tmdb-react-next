import { MEDIA } from "@constants";
import { IMediaResults, IMediaRuntime } from "@type/commonTypes";

export const getMediaYear = (date: string): number => {
  return new Date(date || "").getFullYear();
};

export const getMediaIconName = (mediaType: string): string => {
  switch (mediaType) {
    case MEDIA.MOVIE:
      return "movie";
    case MEDIA.MOVIES:
      return "movie";
    case MEDIA.TV:
      return "tv";
    case MEDIA.PERSON:
      return "person";
    case MEDIA.EPISODES:
      return "tv";
    case MEDIA.REGIONS:
      return "world";
    default:
      return "";
  }
};

export const replaceSpaceWithDash = (name: string): string => {
  return name
    .replace(/ /g, "-")
    .replace(/[ :[\]/]/g, "")
    .toLowerCase();
};

export const getMediaHref = (cardData: IMediaResults) => {
  const mediaTitle = (cardData?.title ?? cardData?.name) as string;
  return `${cardData?.media_type}/${cardData?.id}-${replaceSpaceWithDash(mediaTitle)}`;
};

export const getMediaId = (pageName: string): number => {
  return parseInt(pageName.split("-")[0]);
};

export const convertMinutes = (minutes: number): IMediaRuntime => {
  const minutesPerDay = 1440;
  const minutesPerHour = 60;

  const days = Math.floor(minutes / minutesPerDay);

  const remainingMinutesAfterDays = minutes % minutesPerDay;

  const hours = Math.floor(remainingMinutesAfterDays / minutesPerHour);

  const remainingMinutes = remainingMinutesAfterDays % minutesPerHour;

  return { days, hours, minutes: remainingMinutes };
};
