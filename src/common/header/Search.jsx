import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


import Image from 'react-bootstrap/Image';


const Search = ({ CartItem }) => {
    // fixed Header
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    })
  
  


  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key="sm" expand="sm" className="mb-3 navbar"  variant="dark" >
          <Container fluid>
            <Navbar.Brand href="/"> <Image src={logo} rounded /> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
           

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Startlight
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="flex-grow">

                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="¿Qué estás buscando?..."
                      className="me-2 search-input"
                      aria-label="Search"
                    />
                    <Button variant="primary" className="btn-input">Search</Button>
                  </Form>
                  </div>

                  <i className='fa fa-user icon-circle'></i>
                  <NavDropdown
                    title="Cuenta"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item href="/login">Iniciar sesion</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                      Registrarse
                    </NavDropdown.Item>
                   {/*  <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      otra opcion
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  <i class="fa-solid fa-heart icon-circle"></i>
                  <Nav.Link href="#action2">Favoritos</Nav.Link>
                  <i class="fa-solid fa-cart-shopping icon-circle"></i>
                  <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                  <Nav.Link href="#action2">Carrito</Nav.Link>
                 
                  

                </Nav>

              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Search
