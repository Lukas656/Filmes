import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import "./CSS/contact.css";

function About(props) {
  return (
    <>
      <Header />
      <h1 id="contato">Entre em Contato</h1>
      <form>
        <div className="inputs">
        <label>Nome: </label>
        <input type="text" solid placeholder="Digite seu Nome" autofocus  required/>
        <label>Telefone: </label>
        <input type="tel" solid placeholder="(DD) Telefone" required />
        <label>Email: </label>
        <input type="email" solid placeholder="Digite seu Email" required />
        </div>
        <button type="submit" className="button-form">
          <span>Enviar</span>
        </button>
      </form>
      <Footer />
    </>
  );
}
export default About;
