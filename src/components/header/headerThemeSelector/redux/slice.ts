import { THEME_NAME } from "@constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "@type/utilTypes";

const initialState: ITheme = {
  themeName: THEME_NAME.LIGHT,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.themeName = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
