import { MediaProps } from "@definitions";
import { ImageTMDB } from "@tmdb";
import React from "react";
import style from "./banner.module.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import StarRate from "@mui/icons-material/StarRate";

export const Banner = () => {
  const bannerData: MediaProps = {
    adult: false,
    backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    genre_ids: [28, 878, 12, 53],
    id: 912649,
    original_language: "en",
    original_title: "Venom: The Last Dance",
    overview:
      "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    popularity: 12365.25,
    poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    release_date: "2024-10-22",
    title: "Venom: The Last Dance",
    video: false,
    vote_average: 6.7,
    vote_count: 1360,
  };

  return (
    <div className={style["banner-wrapper"]}>
      <div className={style["background-wrapper"]}>
        <ImageTMDB
          src={bannerData.backdrop_path}
          alt={bannerData.title}
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
        <Grid container spacing={2} width="100%" alignItems="end">
          <Grid size="auto">
            <ImageTMDB
              src={bannerData.poster_path}
              alt={bannerData.title}
              tmdbImage={true}
              width={240}
              height={360}
            />
          </Grid>
          <Grid size={9}>
            <Typography variant="h1">{bannerData.title}</Typography>
            <Typography variant="body1">{bannerData.overview}</Typography>
            <Box>
              <StarRate />
              <span>{bannerData.vote_average}</span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
