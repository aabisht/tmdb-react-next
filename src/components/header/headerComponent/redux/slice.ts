import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAPIConfiguration,
  IConfiguration,
  IGenreList,
} from "@type/commonTypes";

const initialState: IConfiguration = {
  apiConfiguration: {} as IAPIConfiguration,
  genresMovieList: {} as IGenreList,
  genresTVList: {} as IGenreList,
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setAPIConfiguration: (state, action: PayloadAction<IAPIConfiguration>) => {
      state.apiConfiguration = action.payload;
    },
    setGenresMovieList: (state, action: PayloadAction<IGenreList>) => {
      state.genresMovieList = action.payload;
    },
    setGenresTVList: (state, action: PayloadAction<IGenreList>) => {
      state.genresTVList = action.payload;
    },
  },
});

export const { setAPIConfiguration, setGenresMovieList, setGenresTVList } =
  configurationSlice.actions;

export default configurationSlice.reducer;
