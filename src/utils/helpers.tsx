import { MEDIA } from "@constants";

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
