import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {

  const [selectedValue, setSelectedValue] = useState("");

  const dropdownHandleChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  return (
    <>
      <select value={selectedValue} onChange={dropdownHandleChange}>
        <option value="1">test 1</option>
        <option value="2">test 2</option>
      </select>
    </>
  );
}
