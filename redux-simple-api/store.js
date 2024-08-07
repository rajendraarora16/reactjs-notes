import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk),
});

export default store;
