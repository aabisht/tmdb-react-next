import { ImageTMDB } from "@components";
import { MediaCardProps } from "@definitions";
import React from "react";

export const MediaCard = ({ media }: MediaCardProps) => {
  return (
    <div>
      <ImageTMDB
        src={media.poster_path}
        alt={media.title ?? ""}
        tmdbImage={true}
        width={240}
        height={360}
      />
      <div></div>
    </div>
  );
};
