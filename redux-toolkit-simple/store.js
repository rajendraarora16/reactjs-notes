import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// Custom middleware example
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('Dispatching action:', action);
  let result = next(action); // Pass the action to the next middleware or reducer
  console.log('Next state:', storeAPI.getState());
  return result;
};

const store = configureStore({
    reducer: counterSlice,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
