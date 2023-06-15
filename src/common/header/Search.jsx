import React, { useState } from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import authService from "../../services/auth.service";

import Image from 'react-bootstrap/Image';
import { gql, useQuery } from '@apollo/client';
import Swal from 'sweetalert2'
import client from '../../services/Client';





const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    if (search) {
      search.classList.toggle("active", window.scrollY > 100);
    }
  });

  const [data, setData] = useState(
    {
      myUser: {
        isVendor: false
      }
    }
  );


  client.query({
    query: gql`
      query {
        myUser{
          isVendor
        }
      }
    `,
    context: {
      headers: {
        Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      }
    }
  },).then(response => {
    const { data, loading, errors } = response;

    if (loading) {
      console.log("cargando ...");
    }
    if (errors) {
      console.log("error ->", errors);
    }
    if (data) {
      console.log("data ->", data.myUser.isVendor);
      setData(data)

    }
  }).catch(error => {
    // Manejar errores
    console.error("ERROR ->", error);
  });


  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key="sm" expand="sm" className="mb-3 navbar " variant="dark" >
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


                <Nav className="justify-content-center flex-grow-1 pe-3">

                  <Form className="d-flex flex-grow-1 pe-3">
                    <Form.Control
                      type="search"
                      placeholder="¿Qué estás buscando?..."
                      className="me-4 search-input"
                      aria-label="Search"
                    />
                    <Button variant="primary" className="btn-input">Search</Button>
                  </Form>


                  <i className='fa fa-user icon-circle p-3'></i>
                  <NavDropdown
                    title="Cuenta"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    {
                      (localStorage.getItem("token")) ? (

                        <>
                          <NavDropdown.Item href="/account">
                            Mi cuenta
                          </NavDropdown.Item>
                          {data.myUser.isVendor && (
                            <NavDropdown.Item href="/sell">
                            Vender
                          </NavDropdown.Item>
                          )}
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/" onClick={authService.logout}>
                            Cerrar sesion
                          </NavDropdown.Item>
                        </>
                      ) : (
                        <>
                          <NavDropdown.Item href="/login">
                            Iniciar sesion
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/signup">
                            Registrarse
                          </NavDropdown.Item>
                        </>
                      )
                    }

                  </NavDropdown>


                  <i class="fa-solid fa-heart icon-circle p-3"></i>
                  <Nav.Link href="/favorrites">Favoritos</Nav.Link>

                  <i class="fa-solid fa-cart-shopping icon-circle p-3"></i>
                  <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                  <Nav.Link href="/cart">Carrito</Nav.Link>

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
