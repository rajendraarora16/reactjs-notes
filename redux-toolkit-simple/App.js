import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByManual } from "./counterSlice";

const App = () => {

    const { count } = useSelector(state => state);
    const dispatch = useDispatch();

    return <>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByManual(10))}>Increment by Manual</button>
    </>
}

export default App;
