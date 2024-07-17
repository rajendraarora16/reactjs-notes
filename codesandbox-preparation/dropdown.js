import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
    
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Jaipur"] },
    { name: "Pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
    { name: "Bangaladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  const [country, setCountry] = useState("");

  const handleDropdown = (event) => {
    const { value } = event.target;
    setCountry(value);
  };

  const selectedCity = countries?.filter(item => item.value === country)[0]?.cities || [];
  
  console.log("selectedCity:",selectedCity)
  
  return (
    <div className="App">
      <select value={country} onChange={handleDropdown}>
        <option value="" disabled>
          Select Country
        </option>
        {countries?.map((item, index) => {
          return <option key={index} value={item.value}>{item.name}</option>;
        })}
      </select>

      <select defaultValue="">
      <option value="" disabled>
          Select City
        </option>
        {
          selectedCity?.map((item, index) => {
            return <option key={index} value={item}>
            {item}
          </option>
          })
        }
        
        {
          
        }
      </select>
    </div>
  );
}
