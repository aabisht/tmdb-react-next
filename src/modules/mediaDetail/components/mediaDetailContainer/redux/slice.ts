import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMediaResults } from "@type/commonTypes";
import { ICast, IMedaiData, IMediaDetailSlice } from "@type/mediaDetailTypes";

const initialState: IMediaDetailSlice = {
  mediaDetail: {} as IMedaiData,
  mediaType: "" as string,
  mediaCast: [] as ICast[],
  mediaRelated: [] as IMediaResults[],
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

    setMediaCast: (state, action: PayloadAction<ICast[]>) => {
      state.mediaCast = action.payload;
    },

    setMediaRelated: (state, action: PayloadAction<IMediaResults[]>) => {
      state.mediaRelated = action.payload;
    },
  },
});

export const { setMediaDetail, setMediaType, setMediaCast, setMediaRelated } =
  mediaDetailSlice.actions;

export default mediaDetailSlice.reducer;
