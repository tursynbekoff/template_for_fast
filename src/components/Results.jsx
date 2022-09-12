import React from "react";
import PaginatedItems from "./Pagination.jsx";




const Results = ({ data, toggle, element }) => {

  const {numFound, docs} = data;

  return (
    <div className="result">
      {numFound === 0 ? (
        <h2 className="result-text">No Books Found</h2>
      ) : (
        <>
          <h2 className="result-text">{numFound} Books Found</h2>
          < PaginatedItems toggle={toggle} itemsPerPage={element} docs={docs}/>
          
        </>
      )}
    </div>
  );
};

export default Results;
