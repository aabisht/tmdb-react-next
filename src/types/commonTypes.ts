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
