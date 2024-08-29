import React, { useState, useMemo } from "react";

const App = () => {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };

    // Here using 'useMemo' will prevent unnecessary calculation..
    const heavyCalculation = useMemo(() => {
        console.log("doing heavy calculation");
        let result = 0;
        for (let i = 0 ; i < 1000000; i++) {
            result += i;
        }
        return result;
    }, []);

    return (
        <>
            <span>Result: {heavyCalculation}</span>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default App;
