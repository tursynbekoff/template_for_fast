import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
import SearchParams from "./components/search.jsx";

const App = () => {

  return (
    <StrictMode>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
};


export default App;