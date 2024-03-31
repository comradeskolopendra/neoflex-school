import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storeReducer from "./store/store";

export const rootReducer = combineReducers({
    main: storeReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})