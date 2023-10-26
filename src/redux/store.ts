import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { State } from "@type/store";
import { MakeStore, createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: rootReducer,
});

export const makeStore: MakeStore<State> = () => {
  return store;
};

export const wrapper = createWrapper<State>(makeStore);

export type AppDispatch = typeof store.dispatch;
