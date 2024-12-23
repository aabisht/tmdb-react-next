import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import { createWrapper } from "next-redux-wrapper"

export const makeStore = () => configureStore({
    reducer: rootReducer
})

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);