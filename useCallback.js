import React, { useState, useCallback } from "react";

const App = () => {

    const [count, setCount] = useState(0);
    

    // useCallback - so it will prevent to re-render unnecessarily from child component.
    const increment = useCallback(() => {
        setCount(count + 1);
    }, []);

    return (
        <>
            <button onClick={increment}>Increment</button>
            <Child onClick={increment} />
        </>
    );
}

const Child = ({ onClick }) => {
    console.log("child is re-rendered");
    return <>
        <button onClick={onClick}>Child button</button>
    </>
}

export default App;
