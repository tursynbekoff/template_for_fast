import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
import Context from "./components/Context.jsx";
import SearchParams from "./components/search.jsx";

const App = () => {

  return (
    <StrictMode>
      <Context.Provider value={""}>
        <BrowserRouter>
            <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </StrictMode>
  )
};


export default App;