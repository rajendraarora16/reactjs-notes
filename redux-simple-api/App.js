import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./action";

const App = () => {
    const { data, isLoading, isError } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);

    console.log("data:", data, "isLoading:",isLoading, "isError:",isError);

    return <>
        <h1>Redux listing example</h1>
    </>
}

export default App;