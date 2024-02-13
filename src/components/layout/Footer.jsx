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
                href="https://www.instagram.com/kaiique.nasc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lukas656/KNTEC-EMPRESA-PILOTO"
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
          <p>Kaique.nascimento@collarcapital.com</p>
        </div>
      </div>
      <div class="copyright">
        <span>&copy;2023 Feito por: Lucas Santos Nascimento.</span>
      </div>
    </div>
  </>
);

export default Footer;
