export interface ITheme {
  themeName: string;
}

export interface IConfiguration {
  change_keys: string[];
  images: IConfigurationImage;
}

export interface IConfigurationImage {
  logo_sizes: string;
  secure_base_url: string;
  base_url: string;
  backdrop_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}
