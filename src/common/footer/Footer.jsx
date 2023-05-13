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
          <div className="box">

            <h1>Suscribete para tener mas novedades</h1>
          </div>
          <div className="box">
            <button className="btn-blue-light-nav">
              <h3>Email</h3>
              <i className="fas fa-paper-plane"></i>
            </button>

          </div>
          <div className="box">
            <div className="llamada">
              <i className="fas fa-headset"></i>
              <h4>
                Llamanos 24/7: (+52) 55 75 61 2288
              </h4>
            </div>
          </div>
        </div>
        <div className="container grid2">
          <div className="box">
            <div className="logo width">
              <a href="/">
                <img src={logo_footer} alt="startlight" />
              </a>
            </div>
            <p>Visitanos en nuestras redes sociales</p>
            <div className="icon-container">

              <div className="icon d_flex">
                <div className="img d_flex">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="img d_flex">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="img d_flex">

                  <i className="fab fa-google"></i>

                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>Encuentra un producto</h2>
            <ul>
              <li>Mackbooks</li>
              <li>Sillones</li>
              <li>Smartphones</li>
              <li>Reloj Inteligente</li>
              <li>Licuadoras</li>
            </ul>
          </div>
          <div className="box">
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
