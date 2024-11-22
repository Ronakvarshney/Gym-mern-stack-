import { configureStore } from "@reduxjs/toolkit";
import TokenReducer from "./slices/TokenSlice";

export const store = configureStore({
    reducer: {
        'token': TokenReducer // Use the reducer from TokenSlice
    }
});
