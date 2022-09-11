import React from "react";

const Pagination = ({ item }) => {
  console.log("item :", item)
  const {cover_i, title} = item;
  return (
    <div className="card">
      <h3 className="title">
        {item.title_suggest}
      </h3>
      {
        typeof item.author_name === "object" && 
        (
          <p>{item.author_name[0]}</p>
        )
      }
        {item.cover_i ?
          <img src={`http://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}/>
          :
          <img src={`https://res.cloudinary.com/tursynbekoff/image/upload/w_50/v1662125174/no-image-1024x1024.png`}/>
        }
    </div>
  )
}

export default Pagination;