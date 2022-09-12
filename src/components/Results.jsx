import React from "react";
import PaginatedItems from "./Pagination.jsx";




const Results = ({ data, toggle }) => {

  const {numFound, docs} = data;

  return (
    <div className="result">
      {numFound === 0 ? (
        <h2 className="result-text">No Books Found</h2>
      ) : (
        <>
          <h2 className="result-text">{numFound} Books Found</h2>
          < PaginatedItems toggle={toggle} itemsPerPage={10} docs={docs}/>
          
        </>
      )}
    </div>
  );
};

export default Results;
