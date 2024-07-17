import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  
  const arr = ["play cricket", "play video game", "read book"];

  const [checkboxValue, setCheckboxValue] = useState({});
  const [arrCopy, setArrCopy] = useState(arr);

const handleCheckbox = (event) => {
  const { name, checked } = event.target;

  setCheckboxValue(prevState => ({ ...prevState, [name]: checked }))
}

const handleDelete = (index) => {
  const filteredArr = arrCopy.filter(item => item !== arrCopy.slice(index, index + 1)[0])
  setArrCopy(filteredArr);
}

  return (
    <div className="App">
      {arrCopy?.map((item, index) => {
        return <div key={index} >
          <input type="checkbox" name={item} onChange={handleCheckbox} checked={checkboxValue[item]} />
          <label>{item}</label>
          { checkboxValue[item] && <button onClick={() => handleDelete(index)}>delete</button>}
          <br/>
        </div>
      })}
    </div>
  );
}
