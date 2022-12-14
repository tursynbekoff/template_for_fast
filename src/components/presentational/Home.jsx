import React from "react";
import Tooltip from "../tooltip/Tooltip.jsx";

function Home(props) {
  console.log(props.data)
  return (
    <div className="home">
      <div className="text-box">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum has been the{` `}
          <Tooltip>
            Indutry
          </Tooltip>  
          . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  )
}

export default Home;