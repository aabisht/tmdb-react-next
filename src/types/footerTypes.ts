import { TFunction } from "i18next";
import { IClientRects, IMediaResults } from "./commonTypes";

export interface IFooter {
  t: TFunction;
}

export interface ICardDialog {
  show: boolean;
  clientRects: IClientRects;
  cardData: IMediaResults;
}
