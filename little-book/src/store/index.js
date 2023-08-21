import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";

export const store = configureStore({
    reducer: {
        blogs: blogSlice.reducer
    }
});

export * from './thunks/blogThunk';
export * from './slices/blogSlice';