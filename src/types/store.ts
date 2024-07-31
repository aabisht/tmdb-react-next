import { Store } from "redux";
import { ITheme } from "./utilTypes";
import { IConfiguration, ITrendingMediaResponse } from "./commonTypes";
import { ICardDialog } from "./footerTypes";
import { IMediaDetailSlice } from "./mediaDetailTypes";

export interface State extends Store {
  themeSlice?: ITheme;
  trendingMediaSlice?: ITrendingMediaResponse;
  configurationSlice?: IConfiguration;
  cardDialogSlice?: ICardDialog;
  mediaDetailSlice?: IMediaDetailSlice;
}
