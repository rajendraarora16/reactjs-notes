import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("fetch/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
        throw new Error("Network error");
    }
    return response.json();
});

const reducerSlice = createSlice({
    name: "fetch",
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: false,
        error: "",
    },
    // extraReducers is used only for API because it has either "loading" , "success" and "error" state.. 
    // that's why it goes it extraReducers
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action?.error?.message;
        });
    }
});

export default reducerSlice.reducer;
