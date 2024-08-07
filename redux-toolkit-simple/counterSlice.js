import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    // reducer is used because this "increment", "decrement" and "incrementByManual" 
    // has no loading, reject and succcess  state like API response
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        incrementByManual: (state, action) => {
            state.count = state.count + action?.payload;
        } 
    }
});

export const { increment, decrement, incrementByManual } = counterSlice.actions;

export default counterSlice.reducer;
