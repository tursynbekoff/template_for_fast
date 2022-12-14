import React from "react";
import withLoader from "../../hoc/withLoader.jsx";
import Home from "../presentational/Home.jsx";

function ListingsContainerComponent(props) {

  return <Home data={props.data} />
}

export default withLoader(ListingsContainerComponent, 
  'https://raw.githubusercontent.com/tursynbekoff/proj_api/main/src/db.json'
 );
 