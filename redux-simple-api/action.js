import { FETCH_FAILURE_DATA, FETCH_REQUEST_DATA, FETCH_SUCCESS_DATA } from "./constant";

export const fetchPost = () => {

    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_REQUEST_DATA });

            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            dispatch({ type: FETCH_SUCCESS_DATA, payload: data });

        }catch (e) {
            console.error("Error: ",e);
            dispatch({ type: FETCH_FAILURE_DATA, error: e});
        }
    }
}
