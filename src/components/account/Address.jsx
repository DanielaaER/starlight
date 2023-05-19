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
                                            <Modal.Title>Editar Dirección de envio</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Nombre de la direccion"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.name}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Pais</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Pais"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.country}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Teléfono</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Número de contacto"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.telephone}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Dirección</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Dirección de envío del producto"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.address}
                                                        autoFocus
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Ciudady</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ciudad"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.city}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Estado"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.estate}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Codigo Postal</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Codigo Postal"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.cp}
                                                        autoFocus
                                                    />
                                                </Form.Group>


                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
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
                                        <Button variant="primary">Agregar</Button>
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
