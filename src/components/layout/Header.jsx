// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <input type="checkbox" id="burger-toggle" />
      <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <nav class="menu">
        <div class="menu-inner">
          <ul class="menu-nav">
            <li class="menu-nav-item">
              <Link to="/home" class="menu-nav-link">
                Home
              </Link>
            </li>
            <li class="menu-nav-item">
              <Link to="/blog" class="menu-nav-link">
                Filmes
              </Link>
            </li>
            <li class="menu-nav-item">
              <Link to="/calc" class="menu-nav-link">
                Sobre
              </Link>
            </li>
            <li class="menu-nav-item">
              <Link to="/" class="menu-nav-link-end">
                Exit
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
