import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ITrendingMediaResponse,
  ITrendingMediaResults,
} from "@type/commonTypes";

const initialState: ITrendingMediaResponse = {
  results: [] as ITrendingMediaResults[],
  page: 0,
  total_pages: 0,
  total_results: 0,
};

const trendingMediaSlice = createSlice({
  name: "trendingMedia",
  initialState,
  reducers: {
    setTrendingMediaResults: (
      state,
      action: PayloadAction<ITrendingMediaResults[]>,
    ) => {
      state.results = action.payload;
    },
  },
});

export const { setTrendingMediaResults } = trendingMediaSlice.actions;

export default trendingMediaSlice.reducer;
