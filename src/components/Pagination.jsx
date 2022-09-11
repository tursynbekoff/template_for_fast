import React from "react";
import Card from "./Card.jsx";

const Pagination = ({ item, toggle }) => {
  console.log("item :", item)
  const {cover_i, title} = item;
  return (
    <Card  item={item} toggle={toggle}/>
  )
}

export default Pagination;