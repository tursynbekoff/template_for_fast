import React, {useEffect, useState} from "react";
import Pagination from "./Pagination.jsx";

const Results = ({ data }) => {

  const {numFound, docs} = data;

  return (
    <div className="result">
      {numFound === 0 ? (
        <h2 className="result-text">No Books Found</h2>
      ) : (
        <>
          <h2 className="result-text">{numFound} Books Found</h2>
          <div className="card-wrapper">
            {typeof docs === 'object' &&
              (docs.map((item, index) => {
                return (
                  <Pagination key={`index-${index}`} item={item} />
              )}))
            }
          </div>
          
        </>
      )}
    </div>
  );
};

export default Results;
