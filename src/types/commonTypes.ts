import { ImageProps } from "next/image";

export interface ISEO {
  useDarkTheme?: boolean;
}

export interface ILogin {
  title: string;
  caption?: string;
  className?: string;
}

export interface ILoginFieldsProps {
  username: string;
  password: string;
}

export interface ITrendingRequestParam {
  timeWindow?: string;
  language?: string;
  pageNumber?: number;
}

export interface ITrendingMediaResponse {
  page: number;
  results: IMediaResults[];
  total_pages: number;
  total_results: number;
}

export interface IMediaResults {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name?: string;
  title?: string;
  original_language: string;
  original_name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IConfiguration {
  apiConfiguration: IAPIConfiguration;
  genresMovieList: IGenreList;
  genresTVList: IGenreList;
}

export interface IAPIConfiguration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IGenreList {
  genres: IGenre[];
}

export interface ITMDBImg extends ImageProps {
  imgType: string;
  className?: string;
}

export interface IClientRects {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface IMovieParam {
  movieId: number;
  language?: string;
}

export interface IMovieAccountStatesParam extends IMovieParam {
  sessionId: string;
}
export interface IMovieReviewsParam extends IMovieParam {
  pageNumber?: number;
}

export interface IMovieSimilarParam extends IMovieReviewsParam {}

export interface IMovieAddRatingParam {
  movieId: number;
  sessionId: string;
}

export interface IMediaRuntime {
  days: number;
  hours: number;
  minutes: number;
}

export interface ITVParam {
  seriesId: number;
  language?: string;
}

export interface ITVReviewsParam extends ITVParam {
  pageNumber?: number;
}

export interface ITVSimilarParam extends ITVReviewsParam {}
