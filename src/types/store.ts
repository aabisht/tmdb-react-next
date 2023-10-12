import { Store } from "redux";
import { IConfiguration, ITheme } from "./utilTypes";

export interface State extends Store {
  themeSlice?: ITheme;
  configurationSlice?: IConfiguration;
}
