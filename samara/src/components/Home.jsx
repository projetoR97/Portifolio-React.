import React from 'react';
import Logo from "./images/moça.png"
const Home = () => {
  return (
    <div className="home">
      <div className="home-img">

        <img src={Logo} alt="Samara" />
      </div>
      <div className="home-content">
        <h1>
          Oi, sou <span>Samara</span>
        </h1>
        <h3 className="text-animation">
          Eu sou <span></span>
        </h3>
        <p>
          Sou uma desenvolvedora apaixonada por criar experiências digitais incríveis. Com habilidades em React e outras tecnologias, ajudo empresas a alcançar seus objetivos online.
        </p>
        <div className="social-icon">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <a href="#" className="btn">
          Contrate-me
        </a>
      </div>
    </div>
  );
};

export default Home;
