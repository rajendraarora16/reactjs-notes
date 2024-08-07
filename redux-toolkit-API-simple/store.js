import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./reducerSlice";

const store = configureStore({
    reducer: reducerSlice,
});

export default store;
