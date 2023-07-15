import React, { useState } from "react";
import "./Footer.css";
import logo_footer from "../../components/assets/images/logo_footer.svg";

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <footer>
        <div className="box-1">
          <div className="box box-1-left">
            <h1>Suscribete para tener mas novedades</h1>
          </div>


          <button className="btn-blue-light-nav box-1-center">
            <h3>Email</h3>
            <i className="fas fa-paper-plane"></i>
          </button>

          <div className="box box-1-right">
            <i className="fas fa-headset"></i>
            <h4>
              Llamanos 24/7: <span>(+52) 55 75 61 2288</span>
            </h4>
          </div>
        </div>

        <div className="footer-links">
          <div className="box col-1">
            <a href="/">
              <img src={logo_footer} alt="startlight" />
            </a>
            <p>Visitanos en nuestras redes sociales</p>
            <hr />
            <div className="icon-social">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
          <div className="box col-2">
            <h2>Encuentra un producto</h2>
            <ul>
              <li>Mackbooks</li>
              <li>Sillones</li>
              <li>Smartphones</li>
              <li>Reloj Inteligente</li>
              <li>Licuadoras</li>
            </ul>
          </div>
          <div className="box col-3">
            <h2>Ayuda</h2>
            <ul>
              <li>Acerca de nosotros</li>
              <li>Contactanos</li>
              <li>Politicas</li>
              <li>Politicas de privacidad</li>
              <li>Politica de pago</li>
            </ul>
          </div>
        </div>



      </footer>
    </>
  );
};

export default Footer;
