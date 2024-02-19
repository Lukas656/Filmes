import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import "./CSS/home.css";

function Home(props) {
  return (
    <>
      <Header />
      <div class="banner">
        <div className="banner-text">
          <h2>Novo lançamento nos Cinemas de 3 de março de 2022</h2>
          <p class="texto">
            Da Warner Bros. Pictures chega THE BATMAN com o realizador Matt
            Reeves no comando e protagonizado por Robert Pattinson no duplo
            papel de detetive de Gotham City e do seu alter ego, o bilionário
            solitário Bruce Wayne
          </p>

          <button>
            <span>
              <a href="https://www.cinemark.com.br/ingressos" target="_blank" rel="noopener noreferrer" >
                buy ticket
              </a>
            </span>
          </button>
        </div>

        <div class="imgMorcego">
          <figure class="image">
            <img
              src="https://i.ibb.co/2KppW9R/bat.webp"
              width="400"
              alt="img-batman"
            />
          </figure>
        </div>
        
      </div>
      <div>
        <h1>Ingressos Disponiveis</h1>
        <div className="conteiner">
          <div className="card">
            <div class="content">
              <h2>Manhã</h2>
              <h3>Horario: 09:30</h3>
              <button>
                <span>$25,00</span>
              </button>
            </div>
          </div>
          <div className="card">
            <h2>Tarde</h2>
            <h3>Horario: 17:30</h3>
            <button>
              <span>$25,00</span>
            </button>
          </div>
          <div className="card">
            <h2>Noite</h2>
            <h3>Horario: 22:30</h3>
            <button>
              <span>$25,00</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
