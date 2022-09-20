import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <header className="nav">
      <nav className="nav__wrapper">
        <Link to="/" className="nav__brand brand" 
          onClick={() => {document.location.href.includes("?") ? document.location.href="/" : ""
        }}>
          <span className="brand__one">Book</span><span className="brand__two">Store</span>
        </Link >
      </nav>
    </header>
  )
}

export default Nav;
