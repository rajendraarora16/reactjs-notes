import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdown = (event) => {
    
    /* This is how we can access "data-programid" attribute from html page. */
    const { selectedIndex } = event.target;
    
    const selectedDropdownValue =
      event.target[selectedIndex].dataset?.programid;

    setSelectedValue(selectedDropdownValue);
  };

  return (
    <div className="App">
      <h1>Dropdown attribute data-programId</h1>

      <select onChange={handleDropdown}>
        <option value="1" data-programid="id1">
          1
        </option>
        <option value="2" data-programid="id2">
          2
        </option>
        <option value="3" data-programid="id3">
          3
        </option>
      </select>

      <br />
      <br />
      <div>Result: {selectedValue}</div>
    </div>
  );
}
