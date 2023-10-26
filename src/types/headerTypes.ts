import { TFunction } from "i18next";

export interface IIHeader {
  useDarkTheme?: boolean;
  t: TFunction;
}

export interface IHeaderNav {
  label: string;
  href?: string;
  id?: string;
}

export interface IThemeOption {
  name: string;
  ariaLabel?: string;
  code: string;
  icon: string;
}
