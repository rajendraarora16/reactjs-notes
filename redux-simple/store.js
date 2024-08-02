import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// create store
const store = configureStore({ 
    reducer: counterReducer,
    devTools: true,
    enhancers: composeEnhancers,
 });

export default store;
