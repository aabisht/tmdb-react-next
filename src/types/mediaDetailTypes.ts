import { TFunction } from "i18next";
import { IGenre, IMediaResults } from "./commonTypes";

export interface IBelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IPerson {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path?: string;
}

export interface IEpisode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path?: string;
}

export interface INetwork {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path?: string;
  season_number: number;
  vote_average: number;
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBelongsToCollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITVShow {
  adult: boolean;
  backdrop_path: string;
  created_by: IPerson[];
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IEpisode;
  name: string;
  next_episode_to_air: IEpisode;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  seasons: ISeason[];
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface IMedaiData extends IMovies, ITVShow {}

export interface IMediaDetailProps extends IMediaDetailBannerProps {
  mediaCast: ICast[];
  mediaRecommendations: IMediaResults[];
}

export interface IMediaDetailBannerProps {
  mediaDetail: IMedaiData;
  mediaType: string;
  t: TFunction;
}
export interface IMediaDetailSlice {
  mediaDetail: IMedaiData;
  mediaType: string;
  mediaCast: ICast[];
  mediaRelated: IMediaResults[];
}

export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order: number;
  roles?: IRole[];
  total_episode_count?: number;
}

export interface IRole {
  credit_id: string;
  character: string;
  episode_count: number;
}

export interface IMediaDetailCastProps {
  cast: ICast[];
  mediaType: string;
  t: TFunction;
  className?: string;
}

export interface ICollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieCollectionProps {
  collection: ICollection;
  t: TFunction;
  className?: string;
}
