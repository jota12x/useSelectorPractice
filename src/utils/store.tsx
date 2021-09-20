import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "src/features";

export const store = configureStore({
    reducer:rootReducer,
})
