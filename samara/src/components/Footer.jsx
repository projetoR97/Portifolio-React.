import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
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

      <ul className="list">
        <li>
          <a href="#">Perguntas Frequentes</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Sobre Mim</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Depoimentos</a>
        </li>
      </ul>

      <p className="copyright">© Criado por ROGERIO NEVES</p>
    </footer>
  );
};

export default Footer;

