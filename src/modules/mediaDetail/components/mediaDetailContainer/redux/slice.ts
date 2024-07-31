import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMedaiData, IMediaDetailSlice } from "@type/mediaDetailTypes";

const initialState: IMediaDetailSlice = {
  mediaDetail: {} as IMedaiData,
  mediaType: "" as string,
};

const mediaDetailSlice = createSlice({
  name: "mediaDetail",
  initialState,
  reducers: {
    setMediaDetail: (state, action: PayloadAction<IMedaiData>) => {
      state.mediaDetail = action.payload;
    },
    setMediaType: (state, action: PayloadAction<string>) => {
      state.mediaType = action.payload;
    },
  },
});

export const { setMediaDetail, setMediaType } = mediaDetailSlice.actions;

export default mediaDetailSlice.reducer;
