const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    error: ""
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_REQUEST_DATA":
            return { ...state, isLoading: true, isError: false };
        case "FETCH_SUCCESS_DATA":
            return { ...state, isLoading: false, isError: false, data: action.payload };
        case "FETCH_FAILURE_DATA":
            return { ...state, isLoading: false, isError: true, error: action.error };
        default: 
            return state;
    }
}

export default reducer;
