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
                href="https://www.linkedin.com/in/link-lucas-santos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lukas656/Filmes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório
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
