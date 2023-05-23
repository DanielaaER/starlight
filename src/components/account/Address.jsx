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
    const [showAgregar, setShowAgregar] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClose = () => setShow(false)
    const handleCloseAgregar = () => setShowAgregar(false);
    const handleShow = (index) => {
        setSelectedCard(index);
        setShow(true);
    };





    const handleAgregar = () => {
        // Crea una copia de AccountData
        setShowAgregar(true);
        const updatedAccountData = [...AccountData];

        // Obtiene los valores ingresados en el modal
        const newNombre = nombre.trim();
        const newPais = pais.trim();
        const newTelefono = telefono.trim();
        const newDireccion = direccion.trim();
        const newCiudad = ciudad.trim();
        const newEstado = estado.trim();
        const newCodigoPostal = codigoPostal.trim();

        // Crea una nueva tarjeta con los valores ingresados
        const newCard = {
            name: newNombre,
            country: newPais,
            telephone: newTelefono,
            address: newDireccion,
            city: newCiudad,
            estate: newEstado,
            cp: newCodigoPostal
        };

        // Agrega la nueva tarjeta al arreglo de direcciones de entrega
        updatedAccountData[0]["delivery_address"].push(newCard);

        // Establece la nueva tarjeta como seleccionada
        setSelectedCard(updatedAccountData[0]["delivery_address"].length - 1);

        // Actualiza el estado local con los nuevos valores
        setNombre(newNombre);
        setPais(newPais);
        setTelefono(newTelefono);
        setDireccion(newDireccion);
        setCiudad(newCiudad);
        setEstado(newEstado);
        setCodigoPostal(newCodigoPostal);

        // Cierra el modal
        handleCloseAgregar();
    };


    // const [nombre, setNombre] = useState('');
    // const [pais, setPais] = useState('');
    // const [telefono, setTelefono] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [ciudad, setCiudad] = useState('');
    // const [estado, setEstado] = useState('');
    // const [codigoPostal, setCodigoPostal] = useState('');
    // const initialAccountData = [...AccountData];


    const [nombre, setNombre] = useState(AccountData[0]["delivery_address"][selectedCard]?.name);
    const [pais, setPais] = useState(AccountData[0]["delivery_address"][selectedCard]?.country);
    const [telefono, setTelefono] = useState(AccountData[0]["delivery_address"][selectedCard]?.telephone);
    const [direccion, setDireccion] = useState(AccountData[0]["delivery_address"][selectedCard]?.address);
    const [ciudad, setCiudad] = useState(AccountData[0]["delivery_address"][selectedCard]?.city);
    const [estado, setEstado] = useState(AccountData[0]["delivery_address"][selectedCard]?.estate);
    const [codigoPostal, setCodigoPostal] = useState(AccountData[0]["delivery_address"][selectedCard]?.cp);

    const handleGuardar = () => {
        // Crea una copia de AccountData
        const updatedAccountData = [...AccountData];

        console.log(updatedAccountData[0]["delivery_address"][selectedCard].name)
        // Obtiene los valores actuales de los campos
        let newNombre = nombre ? nombre.trim() : '';
        let newPais = pais ? pais.trim() : '';
        let newTelefono = telefono ? telefono.trim() : '';
        let newDireccion = direccion ? direccion.trim() : '';
        let newCiudad = ciudad ? ciudad.trim() : '';
        let newEstado = estado ? estado.trim() : '';
        let newCodigoPostal = codigoPostal ? codigoPostal.trim() : '';

        // Verifica si los valores han cambiado
        const isNombreChanged = newNombre !== AccountData[0]["delivery_address"][selectedCard]?.name && newNombre !== '';
        const isPaisChanged = newPais !== AccountData[0]["delivery_address"][selectedCard]?.country && newPais !== '';
        const isTelefonoChanged = newTelefono !== AccountData[0]["delivery_address"][selectedCard]?.telephone && newTelefono !== '';
        const isDireccionChanged = newDireccion !== AccountData[0]["delivery_address"][selectedCard]?.address && newDireccion !== '';
        const isCiudadChanged = newCiudad !== AccountData[0]["delivery_address"][selectedCard]?.city && newCiudad !== '';
        const isEstadoChanged = newEstado !== AccountData[0]["delivery_address"][selectedCard]?.estate && newEstado !== '';
        const isCodigoPostalChanged = newCodigoPostal !== AccountData[0]["delivery_address"][selectedCard]?.cp && newCodigoPostal !== '';

        // Actualiza los valores correspondientes en la copia de AccountData solo si han cambiado
        if (isNombreChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].name = newNombre;
        } else {
            newNombre = updatedAccountData[0]["delivery_address"][selectedCard].name;
        }
        if (isPaisChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].country = newPais;
        } else {
            newPais = updatedAccountData[0]["delivery_address"][selectedCard].country;
        }
        if (isTelefonoChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].telephone = newTelefono;
        } else {
            newTelefono = updatedAccountData[0]["delivery_address"][selectedCard].telephone;
        }
        if (isDireccionChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].address = newDireccion;
        } else {
            newDireccion = updatedAccountData[0]["delivery_address"][selectedCard].address;
        }
        if (isCiudadChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].city = newCiudad;
        } else {
            newCiudad = updatedAccountData[0]["delivery_address"][selectedCard].city;
        }
        if (isEstadoChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].estate = newEstado;
        } else {
            newEstado = updatedAccountData[0]["delivery_address"][selectedCard].estate;
        }
        if (isCodigoPostalChanged) {
            updatedAccountData[0]["delivery_address"][selectedCard].cp = newCodigoPostal;
        } else {
            newCodigoPostal = updatedAccountData[0]["delivery_address"][selectedCard].cp;
        }

        // Actualiza el estado local con los nuevos valores
        setNombre(newNombre);
        setPais(newPais);
        setTelefono(newTelefono);
        setDireccion(newDireccion);
        setCiudad(newCiudad);
        setEstado(newEstado);
        setCodigoPostal(newCodigoPostal);

        // Cierra el modal
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
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.name}
                                                        onChange={(e) => setNombre(e.target.value)}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>País</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="País"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.country}
                                                        onChange={(e) => setPais(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Teléfono</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Número de contacto"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.telephone}
                                                        onChange={(e) => setTelefono(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Dirección</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Dirección de envío del producto"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.address}
                                                        onChange={(e) => setDireccion(e.target.value)}
                                                        autoFocus
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Ciudad</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ciudad"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.city}
                                                        onChange={(e) => setCiudad(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Estado"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.estate}
                                                        onChange={(e) => setEstado(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Código Postal</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Código Postal"
                                                        defaultValue={AccountData[0]["delivery_address"][selectedCard]?.cp}
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

                        <Modal show={showAgregar} onHide={handleClose}>
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