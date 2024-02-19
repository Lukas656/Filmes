// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header id="menu">
        <h1>
          <img
            src="https://i.ibb.co/p0MTK6n/batman-logo-white-png-3.png"
            alt="batman"
          />
          <strong>THE BATMAN</strong>
        </h1>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="https://www.cinemark.com.br/ingressos" target="_blank" rel="noopener noreferrer">
              Ingressos
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
