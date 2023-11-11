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
  results: ITrendingMediaResults[];
  total_pages: number;
  total_results: number;
}

export interface ITrendingMediaResults {
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

export interface ITMDBImg {
  path: string;
  alt: string;
  imgType: string;
  width: number;
  height: number;
  quality?: number;
  className?: string;
}
