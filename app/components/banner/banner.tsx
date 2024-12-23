import { BannerProps } from "@definitions";
import React from "react";
import style from "./banner.module.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Paper, Typography } from "@mui/material";
import StarRate from "@mui/icons-material/StarRate";
import { MEDIA } from "@constants";
import { ImageTMDB } from "@components";

export const Banner = ({ media, mediaType }: BannerProps) => {
  const title = mediaType === MEDIA.MOVIE ? media?.title : media?.name;

  return (
    <div className={style["banner-wrapper"]}>
      <div className={style["background-wrapper"]}>
        <ImageTMDB
          src={media.backdrop_path}
          alt={title ?? ""}
          tmdbImage={true}
          width={979}
          height={551}
          className={style["background-img"]}
        />
        <div className={style["background-overlay-left"]} aria-label="hidden" />
        <div
          className={style["background-overlay-bottom"]}
          aria-label="hidden"
        />
      </div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="end"
        alignItems="start"
        sx={{ flexGrow: 1 }}
        className={`${style["content-wrapper"]}`}
      >
        <Grid container spacing={4} width="100%" alignItems="end">
          <Grid size="auto">
            <Paper elevation={3}>
              <Box padding="6px">
                <ImageTMDB
                  src={media.poster_path}
                  alt={title ?? ""}
                  tmdbImage={true}
                  width={240}
                  height={360}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid size={9}>
            <Box className={`${style["rating-wrapper"]}`}>
              <StarRate />
              <span className={`${style["vote-average"]}`}>
                {media.vote_average}
              </span>
            </Box>
            <Typography variant="h1">{title ?? ""}</Typography>
            <Typography variant="body1">{media.overview}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
