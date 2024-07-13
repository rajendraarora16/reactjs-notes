import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const arr = ["play cricket", "play video game", "read book"];

  const [arrCopy, setArrCopy] = useState(arr);
  const [isChecked, setIsChecked] = useState({});

  const handleOnDelete = (index) => {
    const selectedValue = arrCopy[index];
    const removedArr = arrCopy.reduce((acc, currentValue) => {
      if (currentValue !== selectedValue) {
        acc.push(currentValue);
      }
      return acc;
    }, []);

    setArrCopy(removedArr);
  };

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;

    setIsChecked((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <div>
      {arrCopy.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <input
                type="checkbox"
                checked={isChecked[item] || false}
                name={item}
                onChange={handleCheckbox}
              />
              <span>{item}</span>
              {isChecked[item] === true && (
                <button onClick={() => handleOnDelete(index)}>Delete</button>
              )}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
