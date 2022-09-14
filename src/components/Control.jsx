import React from "react";

const paginateList = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 50,
  },
]

const Control = ({handleIndexClick, toggleList, active, list}) => {

  return (
    <div className="control">
        Books per page
        {
          paginateList.map((item, index) => {
            return (
              <button 
                key={`key-button-${index}`}
                className={`paginate ${index === active ? "active" : ""}`}
                value={item.value}
                onClick={handleIndexClick}
                data-index={index}  
              >
              {item.value}
            </button>
            )   
          })
        }
        <button className="toggle" onClick={toggleList} aria-label="toggleList list and gride mode"> 
          {
            list ? 
            <img src="https://res.cloudinary.com/tursynbekoff/image/upload/w_20/v1662924335/gofore/list.png" alt="list icon"/>:
            <img src="https://res.cloudinary.com/tursynbekoff/image/upload/w_20/v1662924335/gofore/grid.png" alt="grid icon"/>
          }
        </button>
      </div>
  )
}

export default Control;