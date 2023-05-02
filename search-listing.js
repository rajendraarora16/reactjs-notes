import React, { useState } from "react";

export default function HomePageListing() {
  const [searchField, setSearchField] = useState();

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Search input text field</h1>
      <input
        type="search"
        placeholder="Search your word"
        onChange={handleSearchChange}
      />

      <br />
      <br />
      <span>Search value: {searchField}</span>
    </div>
  );
}
