import React, { useState } from "react";
import "./Footer.css";
import logo_footer from "../../components/assets/images/logo_footer.svg";

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link } from "react-router-dom";


import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Footer = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <footer>
        <div className="box-1">
          <div className="box">

            <h1>Suscribete para tener mas novedades</h1>
          </div>
          <div className="box">
            <button className="btn-blue-light-nav" onClick={handleShow}>
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
                <img className="logo" src={logo_footer} alt="startlight" />
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


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Suscribirse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                className="input"
                type="text"
                id="profile-name"
                placeholder="Nombre y apellidos"
                defaultValue=""

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Email address</Form.Label>
              <Form.Control
                className="input"
                type="email"
                id="profile-email"
                placeholder="example@mail.com"
                defaultValue=""

              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="footer-btn" variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="footer-btn" variant="primary" onClick={() => {
            handleClose();
          }}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Footer;
