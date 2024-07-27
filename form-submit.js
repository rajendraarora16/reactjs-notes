import "./styles.css";

import React, { useState } from "react";

export default function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: ""
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("form: ", formData);
  }

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormData(prevState => ({...prevState, [name]: value}))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmitForm}>
        <input value={formData.firstName} name="firstName" onChange={handleInputChange} />
        <input value={formData.lastName} name="lastName" onChange={handleInputChange} />
        <input value={formData.gender} name="gender" onChange={handleInputChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
