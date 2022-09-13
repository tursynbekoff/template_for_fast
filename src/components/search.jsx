import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";
import Control from "./Control.jsx";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [params, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [element, setElements] = useState(10);
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState(false);

  const query = new URLSearchParams();

  const [list, setList] = useState(false);

  function toggle() {
    setList(!list);
  }

  useEffect(() => {
    requestData();

    if(params.get("search")) {
      setName(params.get("search"));
    }
  }, []);

  async function requestData() {
    setLoading(true);
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${name}`
    );
    const json = (await res.json());
    setLoading(false);
    setData(json);
  }
  
  const onInputValueChangeEventHandler = (e) => {
      setName(e.target.value)
			if (e.target.value) {
      query.set("search",  e.target.value);
			setSearchParams(query);	
		}
  }

  const handleIndexClick = (event) => {
    setElements(event.target.value);
    setActive(+event.target.dataset.index);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    requestData();
  }

  return (
    
    <div className="search-params">
      <form
        onSubmit={onFormSubmit}
      >
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            name="search"
            value={name}
            placeholder="search"
            onChange={onInputValueChangeEventHandler}
          />
        </label>
        <button>Search</button>
      </form>
     <Control toggle={toggle} handleIndexClick={handleIndexClick} active={active} list={list}/>
      {
        !loading ? (
          <Results data={data} toggle={list} element={element}/>
        ) :
        (
          <h2>loading … </h2>
        )
      }
    </div>
  );
};

export default SearchParams;
