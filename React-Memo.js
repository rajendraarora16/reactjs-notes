import React, { useState, useCallback } from "react";

const App = () => {

    const [count, setCount] = useState(0);
    

    // useCallback - so it will prevent to re-render unnecessarily from child component.
    const increment = useCallback(() => {
        // Here note, previously it was setCount(count + 1), now it was changed to prevCount => prevCount + 1
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <>
            <span>Count: {count}</span>
            <button onClick={increment}>Increment</button>
            <ChildMemo onClick={increment} />
        </>
    );
}

// Make the child component as "Memo", here memo is hight order component. 
const Child = ({ onClick }) => {
    console.log("child is re-rendered");
    return <>
        <button onClick={onClick}>Child button</button>
    </>
}

const ChildMemo = React.memo(Child);

export default App;
