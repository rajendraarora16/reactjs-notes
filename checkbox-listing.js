import "./styles.css";
import React, { useState } from "react";

const arr = ["play cricket", "play video game", "read book"];

export default function App() {
  const [checked, setChecked] = useState({});
  const [arrCopy, setarrCopy] = useState(arr);

  const handleChecked = (event) => {
    setChecked((prevVal) => ({
      ...prevVal,
      [event.target.name]: event.target.checked
    }));
  };

  console.log("checked: ", checked);

  return (
    <div className="App">
      {arrCopy?.map((val, indexItem) => {
        return (
          <>
            <div key={val}>
              <Checkbox
                name={indexItem}
                label={val}
                checked={checked.indexItem}
                onChange={handleChecked}
              />
              <br />
            </div>
          </>
        );
      })}
    </div>
  );
}

const Checkbox = ({ name, label, onChange, checked }) => {
  return (
    <label>
      <input name={name} type="checkbox" checked={checked} onClick={onChange} />
      {label}
    </label>
  );
};
