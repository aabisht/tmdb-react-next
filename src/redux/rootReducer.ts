import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import themeSlice from "@components/header/headerThemeSelector/redux/slice";
import trendingMediaSlice from "@modules/homePage/components/trendingMedia/redux/slice";
import configurationSlice from "@components/header/headerComponent/redux/slice";

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        themeSlice,
        trendingMediaSlice,
        configurationSlice,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
