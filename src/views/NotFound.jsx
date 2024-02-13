import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx"
import "./CSS/notfound.css";

function NotFound(props) {
  return (
    <>
    <Header/>
      <aside className="not-found">
        <h1>Ops.. Pagina não Encontrada...</h1>
      </aside>
      <Footer/>
    </>
  );
}
export default NotFound;
