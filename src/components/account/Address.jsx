import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccountData from "./AccountData";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Address = () => {


    const [show, setShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedPersona, setSelectedPersona] = useState(""); // Estado para almacenar el tipo de persona seleccionado

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setSelectedCard(index);
        setShow(true);
    };
    const handleAgregar = () => {
        setSelectedCard(null);
        setShow(true);
    };


    const [nombre, setNombre] = useState(AccountData[0]["delivery_address"][selectedCard]?.name);
    const [pais, setPais] = useState(AccountData[0]["delivery_address"][selectedCard]?.country);
    const [telefono, setTelefono] = useState(AccountData[0]["delivery_address"][selectedCard]?.telephone);
    const [direccion, setDireccion] = useState(AccountData[0]["delivery_address"][selectedCard]?.address);
    const [ciudad, setCiudad] = useState(AccountData[0]["delivery_address"][selectedCard]?.city);
    const [estado, setEstado] = useState(AccountData[0]["delivery_address"][selectedCard]?.estate);
    const [codigoPostal, setCodigoPostal] = useState(AccountData[0]["delivery_address"][selectedCard]?.cp);

    const handleGuardar = () => {
        // Aquí puedes realizar la lógica de guardado de los valores actualizados
        // Puedes acceder a los valores actuales de los estados (nombre, pais, telefono, etc.)
        // y realizar las acciones necesarias, como enviar una solicitud al servidor o actualizar la base de datos.

        // Luego, cierra el modal
        handleClose();
    };


    if (AccountData[0]["delivery_address"].length == 0) {
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
                                        <Button variant="primary">Agregar dirección</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </>
    }


    return (
        <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">
                        {AccountData[0]["delivery_address"].map((value, index) => {
                            return (
                                <>
                                    <Card border="info" style={{ width: '18rem' }}>
                                        <Card.Header className="card-header"><b>{value.name}</b></Card.Header>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                <b>Dirección:</b>{value.address}
                                                <br />

                                                <b>Ciudad:</b>{value.city}
                                                <br />

                                                <b>CP:</b>{value.cp}
                                                <br />

                                                <b>Estado:</b> {value.estate}
                                                <br />

                                                <b>Pais:</b> {value.country}
                                                <br />
                                                <b>Telefono:</b>{value.telephone}
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="md" onClick={() => handleShow(index)}>
                                                    Editar
                                                </Button>
                                                <Button variant="danger" size="md">
                                                    Eliminar
                                                </Button>
                                            </div>
                                        </Card.Footer>
                                    </Card>


                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Editar Dirección de envío</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Nombre de la dirección"
                                                        value={nombre}
                                                        onChange={(e) => setNombre(e.target.value)}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>País</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="País"
                                                        value={pais}
                                                        onChange={(e) => setPais(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Teléfono</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Número de contacto"
                                                        value={telefono}
                                                        onChange={(e) => setTelefono(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Dirección</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Dirección de envío del producto"
                                                        value={direccion}
                                                        onChange={(e) => setDireccion(e.target.value)}
                                                        autoFocus
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Ciudad</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ciudad"
                                                        value={ciudad}
                                                        onChange={(e) => setCiudad(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Estado"
                                                        value={estado}
                                                        onChange={(e) => setEstado(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Código Postal</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Código Postal"
                                                        value={codigoPostal}
                                                        onChange={(e) => setCodigoPostal(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                            <Button variant="primary" onClick={handleGuardar}>
                                                Guardar
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>


                                </>
                            )
                        })}




                        <Card border="info" style={{ width: '18rem', height: '18rem' }} >
                            <Card.Body>
                                <Card.Text>
                                    <div className="account-btn-add">
                                        <Button variant="primary" onClick={handleAgregar}>
                                            Agregar
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>



                    </Container>
                </Col>
            </Row>

        </>
    )
}

export default Address
