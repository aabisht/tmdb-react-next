import { Store } from "redux";
import { ITheme } from "./utilTypes";
import { IConfiguration, ITrendingMediaResponse } from "./commonTypes";

export interface State extends Store {
  themeSlice?: ITheme;
  trendingMediaSlice?: ITrendingMediaResponse;
  configurationSlice?: IConfiguration;
}
