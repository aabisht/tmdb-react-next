import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrendingMediaResponse, IMediaResults } from "@type/commonTypes";

const initialState: ITrendingMediaResponse = {
  results: [] as IMediaResults[],
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
      action: PayloadAction<IMediaResults[]>,
    ) => {
      state.results = action.payload;
    },
  },
});

export const { setTrendingMediaResults } = trendingMediaSlice.actions;

export default trendingMediaSlice.reducer;
