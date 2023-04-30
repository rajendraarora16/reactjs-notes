import "./styles.css";

import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Jaipur"] },
  { name: "Pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
  { name: "Bangaladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [country, setCountry] = useState([]);

  return (
    <div className="App">
      <h1>React app</h1>
      {/* Drop down 1st */}
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* Drop down 2nd */}
      <select>
        {countries[country]?.cities?.map((city, index) => {
          return (
            <option key={index} value={index}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}
