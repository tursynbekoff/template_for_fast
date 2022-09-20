import React from "react";
import PaginatedItems from "./Pagination.jsx";




const Results = ({ data, listMode, element }) => {

  const {numFound, docs} = data;

  return (
    <div className="result">
      {numFound === 0 ? (
        <h2 className="result-text">No Books Found</h2>
      ) : (
        <>
          <h2 className="result-text">
            <span className="result-number">{+numFound}</span>
            <>{" "}</>
            Books Found
          </h2>
          < PaginatedItems listMode={listMode} itemsPerPage={element} docs={docs}/>
          
        </>
      )}
    </div>
  );
};

export default Results;
