import React from "react";


const Card = ({ item, toggle }) => {

  return (
    <div className={`card card__${toggle}-list`}>
      {item.cover_i ?
        <img src={`http://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}/>
        :
        <img src={`https://res.cloudinary.com/tursynbekoff/image/upload/w_50/v1662125174/no-image-1024x1024.png`}/>
      }
      <h3 className="title">
        {item.title_suggest}
      </h3>
      {
        typeof item.author_name === "object" && 
        (
          <p className="author">{item.author_name[0]}</p>
        )
      }
      <p className="publish-year">{item.first_publish_year}</p>
      {
        typeof item.isbn === "object" && 
        (
          <p className="isbn">{item.isbn[0]}</p>
        )
      }
    </div>
  )
}

export default Card;