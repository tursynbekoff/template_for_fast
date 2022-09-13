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

    if(params.get("search")) {
      setName(params.get("search"));
      canOnlyFireOnce();
    }
  }, []);

  async function requestData(inpt) {

    setLoading(true);
    const res = await fetch(
      !inpt ? `https://openlibrary.org/search.json?title=${name}` : `https://openlibrary.org/search.json?title=${inpt}`
    );
    const json = (await res.json());
    setLoading(false);
    setData(json);
  }
  
  const onInputValueChangeEventHandler = (e) => {
    setName(e.target.value)
  }

  const handleIndexClick = (event) => {
    setElements(event.target.value);
    setActive(+event.target.dataset.index);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    requestData();
    if (name) {
      query.set("search", name);
			setSearchParams(query);	
		}
  }

  function once(fn, context) { 
    let result;
  
    return function() { 
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }
      return result;
    };
  }

  const canOnlyFireOnce = once(function() {
    requestData(params.get("search"));
  });

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
