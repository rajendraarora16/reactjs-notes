import './App.css';
import React, { useOptimistic, useTransition, useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);
  const [optimistic, startOptimistic] = useOptimistic(
    counter,
    (state, amount) => {
      return state + amount;
    }
  );
  const [ isPending, startTransition ] = useTransition();

  const handleCounter = async () => {
    startTransition(() => startOptimistic(counter + 1));
    
    try {
      await new Promise((resolve, reject) => setTimeout(() => (Math.random() < 0.2 ? resolve(true) : reject("failed")), 1000));
      setCounter((prev) => prev + 1);
    } catch (error) {
      startTransition(() => startOptimistic(counter)); // reverting previous counter
    }
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <br/><br/>
      <h2>Counter: {optimistic}</h2>
      <br/><br/>
      <button onClick={handleCounter}>{isPending ? "Incrementing..." : "Increment Counter"}</button>
    </div>
  );
}

export default App;

