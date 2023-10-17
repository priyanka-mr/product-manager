import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const store = configureStore({
    reducer: {
        productList: productReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;