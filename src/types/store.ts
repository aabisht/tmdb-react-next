import { Store } from "redux";
import { IConfiguration, ITheme } from "./utilTypes";
import { ITrendingMediaResponse } from "./commonTypes";

export interface State extends Store {
  themeSlice?: ITheme;
  trendingMediaSlice?: ITrendingMediaResponse;
  configurationSlice?: IConfiguration;
}
