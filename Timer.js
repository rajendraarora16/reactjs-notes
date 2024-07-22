import React from "react";

const Timer = () => {
  let [counter, setCounter] = React.useState(0);
  const [isTimerStarted, setIsTimerStarted] = React.useState(false);

  React.useEffect(() => {
    let timer;

    if (isTimerStarted) {
      timer = setInterval(() => setCounter(++counter), 500);
    }

    // unmounting to clear interval during "stop" button onClick
    return () => clearInterval(timer);
  }, [isTimerStarted]);

  const startCounter = (_event) => {
    setIsTimerStarted(true);
  };

  const stopCounter = (_event) => {
    setIsTimerStarted(false);
  };

  const resetCounter = (_event) => {
    setCounter(0);
    setIsTimerStarted(false);
  };

  return (
    <>
      <h1>{counter}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={startCounter}>Start</button>
        <button onClick={stopCounter}>Stop</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
