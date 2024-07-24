import React from "react";

const options = ["Cricket", "Football", "Hockey"];

export default function App() {
  const handleOnchange = (event) => {
    console.log("event: ", event.target.value)
  }

  return (
    <div className="App">
      <h1>Radio button selection</h1>
      {options?.map(item => {
        return (
          <>
            <div onChange={handleOnchange}>
              
              // Here name as "options" should remain constant to select one radio option
              
              <input type="radio" name="options" value={item} /> 
              <label htmlFor="options">{item}</label>
              <br />
            </div>
          </>
        );
      })}
    </div>
  );
}
