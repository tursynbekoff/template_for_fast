import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [params, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = new URLSearchParams();

  const [list, setList] = useState(false);

  function toggle() {
    setList(!list);
  }

  useEffect(() => {
    if(params.get("search")) {
      setName(params.get("search"))
    }
    requestData()
  }, []);

  console.log(list)

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
      <div>
        <button className="toggle" onClick={toggle} aria-label="toggle list and gride mode"> 
          {
            list ? 
            <img src="https://res.cloudinary.com/tursynbekoff/image/upload/w_20/v1662924335/gofore/list.png" alt="list icon"/>:
            <img src="https://res.cloudinary.com/tursynbekoff/image/upload/w_20/v1662924335/gofore/grid.png" alt="grid icon"/>
          }
        </button>
      </div>
      <Results data={data} toggle={list} />
    </div>
  );
};

export default SearchParams;
