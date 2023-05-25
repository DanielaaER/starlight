import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccountData from "./AccountData";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import client from '../../services/Client';
import { gql, useMutation, query } from '@apollo/client';
import Swal from 'sweetalert2'

const Address = () => {


    const [show, setShow] = useState(false);
    const [showAgregar, setShowAgregar] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const [optionTitle, setOptionTitle] = useState("");

    const [id, setId] = useState('');
    const [title, setTitle] = useState("");
    const [street, setStreet] = useState('');
    const [exterior_number, setExteriorNumber] = useState('');
    const [interior_number, setInteriorNumber] = useState('');
    const [town, setTown] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [postal_code, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');






    const handleClose = () => setShow(false)
    const handleCloseAgregar = () => setShowAgregar(false);
    const handleShow = (index) => {
        setSelectedCard(index);
        setShow(true);
    };





    const [data, setData] = useState(
        {
            myUser: {
                address: {
                    id: "",
                    title: "",
                    street: "",
                    postal_code: "",
                    interior_number: "",
                    exterior_number: "",
                    city: "",
                    town: "",
                    state: "",
                    country: "",
                    phone: "",
                }
            }
        }
    );


    client.query({
        query: gql`
          query {
            myUser{
                address{
                  id
                  title
                  street
                  postal_code
                  interior_number
                  exterior_number
                  city
                  town
                  state
                  country
                  phone
                }
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
            console.log("Error ->", errors);
        }
        if (data) {
            setData(data)
        }
    }).catch(error => {
        console.error("Error ->", error);
    });



    const handleDeleteAdress = async (idAddress) => {
        Swal.fire({
            title: '¿Está seguro de eliminar esta dirección?',
            text: "No podrá deshacer los cambios.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {

                const { data, errors, loading } = await client.mutate({
                    mutation: gql`
                    mutation DeleteAddress(
                        $id: ID!,
                        ) {
                            deleteAddress(
                                id: $id,
                            )
                      }
                    `,
                    variables: {
                        id: idAddress
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
                        }
                    }
                })

                if (data) {
                    Swal.fire(
                        '¡Eliminado!',
                        'Dirección eliminada correctamente.',
                        'success'
                    )
                    window.location.reload();
                }
                if (errors) {
                    Swal.fire(
                        '¡Error!',
                        'No se pudo eliminar la dirección.',
                        'error'
                    )
                }
            }
        })
    };


    const handleMenu = async (option, idAddress) => {
        setShowAgregar(true);
        if (option == 1) {
            setId("")
            setOptionTitle("CREAR NUEVA DIRECCIÓN")
        }

        if (option == 2) {
            setId(idAddress)
            setOptionTitle("EDITAR DIRECCIÓN")
        }
    }
    const handleMenuGuardar = async () => {
        if (id == "") {
            setOptionTitle("CREAR NUEVA DIRECCIÓN")

            try {
                const { data, errors, loading } = await client.mutate({
                    mutation: gql`
            mutation CreateAddress(
                $title: String!,
                $street: String!,
                $interior_number: String!,
                $exterior_number: String!,
                $town: String!,
                $city: String!,
                $state: String!,
                $country: String!,
                $postal_code: String!,
                $phone: String!,
                ) {
                    createAddress(
                        title: $title 
                        street: $street
                        interior_number: $interior_number
                        exterior_number: $exterior_number
                        town: $town
                        city: $city 
                        state: $state 
                        country: $country
                        postal_code: $postal_code 
                        phone: $phone 
                    ){
                        title
                        street
                        interior_number
                        exterior_number
                        town
                        city
                        state
                        country
                        postal_code
                        phone

                    }
              }
            `,
                    variables: {
                        title,
                        street,
                        interior_number,
                        exterior_number,
                        town,
                        city,
                        state,
                        country,
                        postal_code,
                        phone,
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
                        }
                    }
                });

                if (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '¡Dirección agregada correctamente!',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(
                        () => {
                            window.location.reload();
                        }
                    )

                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Ocurrió un error, por favor intente más tarder.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

                setTitle('')
                setStreet('')
                setInteriorNumber('')
                setExteriorNumber('')
                setTown('')
                setCity('')
                setState('')
                setCountry('')
                setPostalCode('')
                setPhone('')

            } catch (error) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Ocurrió un error, por favor intente más tarder. ",
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } else {
            setOptionTitle("EDITAR DIRECCIÓN")
            try {
                const { data, errors, loading } = await client.mutate({
                    mutation: gql`
                mutation UpdateAddress(
                    $id: ID!,
                    $title: String!,
                    $street: String!,
                    $interior_number: String!,
                    $exterior_number: String!,
                    $town: String!,
                    $city: String!,
                    $state: String!,
                    $country: String!,
                    $postal_code: String!,
                    $phone: String!,
                    ) {
                        updateAddress(
                            id: $id,
                            title: $title 
                            street: $street
                            interior_number: $interior_number
                            exterior_number: $exterior_number
                            town: $town
                            city: $city 
                            state: $state 
                            country: $country
                            postal_code: $postal_code 
                            phone: $phone 
                        ){
                            title
                            street
                            interior_number
                            exterior_number
                            town
                            city
                            state
                            country
                            postal_code
                            phone
    
                        }
                  }
                `,
                    variables: {
                        id,
                        title,
                        street,
                        interior_number,
                        exterior_number,
                        town,
                        city,
                        state,
                        country,
                        postal_code,
                        phone,
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
                        }
                    }
                });

                if (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '¡Dirección actualizada correctamente!',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(
                        () => {
                            window.location.reload();
                        }
                    )
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Ocurrió un error, por favor intente más tarder.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                setTitle('')
                setStreet('')
                setInteriorNumber('')
                setExteriorNumber('')
                setTown('')
                setCity('')
                setState('')
                setCountry('')
                setPostalCode('')
                setPhone('')

            } catch (error) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Ocurrió un error, por favor intente más tarder. ",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }





    if (data.myUser.address.length == 0) {
        return <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text className="">
                                    No tienes direcciones registradas :(
                                    <br />
                                    Ingresa una para poder comprar
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{ width: '18rem', height: '18rem' }} >
                            <Card.Body>
                                <Card.Text>
                                    <div className="account-without-data">
                                        <Button variant="primary" onClick={() => handleMenu(1, "")}>
                                            Agregar dirección
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </>
    }


    const addresses = Array.isArray(data.myUser.address) ? data.myUser.address : [];

    return (
        <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">

                        {addresses.map((value, index) => (


                            <Card border="info" style={{ width: '18rem' }}>
                                <Card.Header className="card-header"><b>{value.title}</b></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <b>Calle:</b> {value.street}
                                        <br />
                                        <b>Número interior:</b> {value.interior_number}
                                        <br />
                                        <b>Número exterior:</b> {value.exterior_number}
                                        <br />
                                        <b>Municipio:</b> {value.town}
                                        <br />
                                        <b>Ciudad:</b> {value.city}
                                        <br />
                                        <b>Estado:</b> {value.state}
                                        <br />
                                        <b>País</b>{value.country}
                                        <br />
                                        <b>Código Postal</b>{value.postal_code}
                                        <br />
                                        <b>Télefono</b>{value.phone}
                                        <br />
                                    </Card.Text>
                                    <Card.Footer className="text-muted">
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" size="md" onClick={() => handleMenu(2, value.id)}>
                                                Editar
                                            </Button>
                                            <Button variant="danger" size="md" onClick={() => handleDeleteAdress(value.id)} >
                                                Eliminar
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>

                        ))}




                        <Card border="info" style={{ width: '18rem', height: '18rem' }} >
                            <Card.Body>
                                <Card.Text>
                                    <div className="account-btn-add">
                                        <Button variant="primary" onClick={() => handleMenu(1, "")}>
                                            Agregar
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Modal show={showAgregar} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> {optionTitle}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Titulo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Agregue un titulo para identificar su dirección"
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Calle</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Calle"
                                            required
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Número Interior</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Número de interior"
                                            onChange={(e) => setInteriorNumber(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Número exterior</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Número exterior"
                                            onChange={(e) => setExteriorNumber(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Municipio</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Municipio"
                                            required
                                            onChange={(e) => setTown(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ciudad"
                                            required
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Estado"
                                            required
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>País</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Pais"
                                            required
                                            onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Código Postal"
                                            required
                                            onChange={(e) => setPostalCode(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Télefono</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Télefono"
                                            min={7}
                                            max={13}
                                            required
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Form.Group>

                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseAgregar}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={handleMenuGuardar}>
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </Container>
                </Col>
            </Row>

        </>
    )
}

export default Address