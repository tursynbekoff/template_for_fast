import React, {useEffect, useState} from "react";


const Results = ({ data }) => {

  console.log(data)
  const {numFound, docs} = data;

  return (
    <div className="search">
      {numFound === 0 ? (
        <h2>No Books Found</h2>
      ) : (
        <>
          <h2>{numFound} Books Found</h2>
          {typeof docs === 'object' &&
            (docs.map((item) => { 
              return (
                <div>
                  <h3>{item.title}</h3>
                  {/* <p>{item.author_name[0]}</p> */}
                    {item.cover_i ?
                      <img src={`http://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}/>
                      :
                      <img src={`https://res.cloudinary.com/tursynbekoff/image/upload/w_50/v1662125174/no-image-1024x1024.png`}/>
                    }
                </div>
              )
            }))}
        </>
      )}
    </div>
  );
};

export default Results;
