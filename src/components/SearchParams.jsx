import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    requestData()
  }, []); 

  async function requestData() {
    const res = await fetch(
      `http://openlibrary.org/search.json?title=${name}`
    );
    const json = (await res.json());

    setData(json);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestData();
        }}
      >
        <label htmlFor="search">
          Book title
          <input
            id="search"
            value={name}
            placeholder="search"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button>Search</button>
      </form>
      <Results data={data} />
    </div>
  );
};

export default SearchParams;
