import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../views/Home";
import About from "../views/About";
import Contato from "../views/Contato";
import NotFound from "../views/NotFound";



const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
