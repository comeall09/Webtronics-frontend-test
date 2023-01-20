import { configureStore } from "@reduxjs/toolkit"
import { feedbackApi } from "src/sections/contact/slice"

const rootReducer = {
  [feedbackApi.reducerPath]: feedbackApi.reducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedbackApi.middleware),
})