import { ImageProps } from "next/image";

export type TMDBImageProps = ImageProps & {
  tmdbImage: boolean;
  tmdbImageSize?: string;
};
