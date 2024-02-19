import React from "react";
import "./footer.css";


const Footer = (props) => (
  <>
    <div class="footer">
      <div class="footer-content">
        <div class="social-links">
          <h2>Redes Sociais</h2>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Código do Projeto
              </a>
            </li>
          </ul>
        </div>
        <div class="contact-info">
          <h2>Contato</h2>
          <p>São Paulo</p>
          <p>lucassantosnasc.21@gmail.com</p>
        </div>
      </div>
      <div class="copyright">
        <span>&copy;2023 Lucas Santos Nascimento.</span>
      </div>
    </div>
  </>
);

export default Footer;
