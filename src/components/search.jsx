import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";
import Control from "./Control.jsx";
import LoadingView from "./Loading.jsx";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [element, setElements] = useState(10);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);

  const query = new URLSearchParams();

  const [listMode, setList] = useState(false);
  const [params, setSearchParams] = useSearchParams();  

  useEffect(() => {
    if(params.get("search")) {
      setName(params.get("search"));
      getSearchParams();
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

  const toggleList = () => {
    setList(!listMode);
  }
  
  const onInputValueChangeEventHandler = (e) => {
    setName(e.target.value)
  }

  const handleIndexClick = (event) => {
    setElements(+event.target.value);
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

  const once = (fn, context) => { 
    let result;
  
    return function() { 
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }
      return result;
    };
  }

  const getSearchParams = once(function() {
    requestData(params.get("search"));
  });

  return (
    
    <div className="search-params">
      <form
        onSubmit={onFormSubmit}
      >
        <label htmlFor="search">
          <input
            id="search-input"
            type="text"
            name="search"
            value={name}
            placeholder="search"
            onChange={onInputValueChangeEventHandler}
          />
        </label>
        <button id="search-button">Search</button>
      </form>
     <Control toggleList={toggleList} handleIndexClick={handleIndexClick} active={active} listMode={listMode}/>
      {
        !loading ? (
          <Results data={data} listMode={listMode} element={element}/>
        ) :
        ( 
          <>
            <LoadingView />
          </>
        )
      }
    </div>
  );
};

export default SearchParams;
