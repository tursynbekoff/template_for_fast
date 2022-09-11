import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [params, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = new URLSearchParams();

  useEffect(() => {
    if(params.get("search")) {
      setName(params.get("search"))
    }
    requestData()
  }, []);

  async function requestData() {
    const res = await fetch(
      `http://openlibrary.org/search.json?title=${name}`
    );
    const json = (await res.json());

    setData(json);
  }

  const onInputValueChangeEventHandler = (value) => {
			if (value) {
      query.set("search",  value);
			setSearchParams(query);	
		}
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
          {/* Book title */}
          <input
            id="search"
            type="text"
            name="search"
            value={name}
            placeholder="search"
            onChange={(e) => {
              onInputValueChangeEventHandler(e.target.value)
              setName(e.target.value)
            }}
          />
        </label>
        <button>Search</button>
      </form>
      <Results data={data} />
    </div>
  );
};

export default SearchParams;
