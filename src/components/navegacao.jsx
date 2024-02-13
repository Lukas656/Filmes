import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../views/Home.jsx";
import About from "../views/About";
import NotFound from "../views/NotFound";



const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
