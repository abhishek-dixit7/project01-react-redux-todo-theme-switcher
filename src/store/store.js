import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todo/todoSlice";
import themeReducer from "../features/theme/themeSlice"


export const store = configureStore({
    reducer: {todos:todoReducers, theme:themeReducer},
});