import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAPIConfiguration, IConfiguration } from "@type/commonTypes";

const initialState: IConfiguration = {
  apiConfiguration: {} as IAPIConfiguration,
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setAPIConfiguration: (state, action: PayloadAction<IAPIConfiguration>) => {
      state.apiConfiguration = action.payload;
    },
  },
});

export const { setAPIConfiguration } = configurationSlice.actions;

export default configurationSlice.reducer;
