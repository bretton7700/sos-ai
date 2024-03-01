import { configureStore } from "@reduxjs/toolkit";
import { cloneApi } from "./cloneApi";

export const store = configureStore({
    reducer:{
        [cloneApi.reducerPath]: cloneApi.reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(cloneApi.middleware)
})