import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./reducerSlice";

const App = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    console.log("store: ", store);

    return <>Jellle</>;
}

export default App;
