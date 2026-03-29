import React from 'react';
import Logo from "./images/moça.png"
const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2 className="heading">
          Sobre <span>Mim</span>
        </h2>
        <h3 className="text-animation">
          <span></span>
        </h3>
        <p>
          Sou uma desenvolvedora web dedicada, apaixonada por tecnologia e inovação. Com experiência em React, JavaScript e design responsivo, ajudo a criar soluções digitais que fazem a diferença.
        </p>
        <a href="#" className="btn">
          Leia Mais
        </a>
      </div>

      <div className="about-img">
       <img src={Logo} alt="Samara" />
      </div>
    </div>
  );
};

export default About;