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

    const initialNombre = AccountData[0]['delivery_address'][selectedCard]?.name;
    const initialPais = AccountData[0]['delivery_address'][selectedCard]?.country;
    const initialTelefono = AccountData[0]['delivery_address'][selectedCard]?.telephone;
    const initialDireccion = AccountData[0]['delivery_address'][selectedCard]?.address;
    const initialCiudad = AccountData[0]['delivery_address'][selectedCard]?.city;
    const initialEstado = AccountData[0]['delivery_address'][selectedCard]?.estate;
    const initialCodigoPostal = AccountData[0]['delivery_address'][selectedCard]?.cp;

    const [nombre, setNombre] = useState(initialNombre);
    const [pais, setPais] = useState(initialPais);
    const [telefono, setTelefono] = useState(initialTelefono);
    const [direccion, setDireccion] = useState(initialDireccion);
    const [ciudad, setCiudad] = useState(initialCiudad);
    const [estado, setEstado] = useState(initialEstado);
    const [codigoPostal, setCodigoPostal] = useState(initialCodigoPostal);



    const [show, setShow] = useState(false);
    const [showAgregar, setShowAgregar] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClose = () => {
        if (show) {
            setShow(false);
        }
    };


    const handleShow = (index) => {
        setSelectedCard(index);
        setShow(true);
    };

    const handleGuardar = () => {

        const datosActualizados = {
            delivery_address: {
                [selectedCard]: {
                    name: nombre,
                    country: pais,
                    telephone: telefono,
                    address: direccion,
                    city: ciudad,
                    estate: estado,
                    cp: codigoPostal,
                },
            },
        };

        // Realizar acciones con los datos actualizados
        // ...

        // Cerrar el Modal
        handleClose();
    };



    const [localData, setLocalData] = useState(AccountData);



    const handleShowAgregar = () => {
        const updatedData = [...localData];
        setSelectedCard(updatedData[0]["delivery_address"].length);
        setShowAgregar(true);
    };

    const handleAgregar = () => {
        const updatedData = [...localData];
        const newCard = {
            name: nombre,
            country: pais,
            telephone: telefono,
            address: direccion,
            city: ciudad,
            estate: estado,
            cp: codigoPostal
        };
        updatedData[0]["delivery_address"].push(newCard);
        setLocalData(updatedData);
        handleCloseAgregar();
    };

    const handleCloseAgregar = () => {
        setShowAgregar(false);
        setNombre("");
        setPais("");
        setTelefono("");
        setDireccion("");
        setCiudad("");
        setEstado("");
        setCodigoPostal("");
    };



    // const handleGuardar = () => {
    //     // Crea una copia de AccountData


    //     // Actualiza el estado local con los nuevos valores

    //     // Abre el modal de agregar

    //     const updatedAccountData = [...AccountData];

    //     console.log(updatedAccountData[0]["delivery_address"][selectedCard].name)
    //     // Obtiene los valores actuales de los campos
    //     console.log(pais);

    //     // Actualiza el estado local con los nuevos valores
    //     setNombre(nombre);
    //     console.log(nombre);
    //     setPais(pais);
    //     setTelefono(telefono);
    //     setDireccion(direccion);
    //     setCiudad(ciudad);
    //     setEstado(estado);
    //     setCodigoPostal(codigoPostal);

    //     // Cierra el modal
    //     handleClose();
    // };


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
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.name}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>País</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="País"
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
                                                    <Form.Label>Ciudad</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ciudad"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.city}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Estado"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.estate}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Código Postal</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Código Postal"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.cp}
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
                                        <Button variant="primary" onClick={handleShowAgregar}>
                                            Agregar
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Modal show={showAgregar} onHide={handleCloseAgregar}>
                            <Modal.Header closeButton>
                                <Modal.Title>Agrega Dirección de envío</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombre de la dirección"
                                            onChange={(e) => setNombre(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>País</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="País"
                                            onChange={(e) => setPais(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Número de contacto"
                                            onChange={(e) => setTelefono(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Dirección de envío del producto"
                                            onChange={(e) => setDireccion(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ciudad"
                                            onChange={(e) => setCiudad(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Estado"
                                            onChange={(e) => setEstado(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Código Postal"
                                            onChange={(e) => setCodigoPostal(e.target.value)}
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseAgregar}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={handleAgregar}>
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
