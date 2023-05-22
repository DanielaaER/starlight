import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccountData from "./AccountData";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Bills = () => {
    const [show, setShow] = useState(false);
    const [showAgregar, setShowAgregar] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedPersona, setSelectedPersona] = useState(""); // Estado para almacenar el tipo de persona seleccionado

    const handleClose = () => setShow(false)
    const handleCloseAgregar = () => setShowAgregar(false);
    const handleShow = (index) => {
        setSelectedCard(index);
        setShow(true);
    };



    const handleShowAgregar = () => {

        setShowAgregar(true);
    };

    const handleAgregar = () => {
        // Crea una copia de AccountData
        console.log("agregare")
        setShowAgregar(true);
        const updatedAccountData = [...AccountData];

        // Obtiene los valores ingresados en el modal
        let newNombre = nombre.trim();
        let newPersona = persona.trim();
        let newRazon = razon.trim();
        let newRfc = rfc.trim();
        let newTelefono = telefono.trim();

        let newDireccion = direccion.trim();
        let newCiudad = ciudad.trim();
        let newEstado = estado.trim();
        let newCodigoPostal = codigoPostal.trim();
        let newRegimen = regimenFiscal.trim();
        let newCfdi = cfdi.trim();
        let newPago = pago.trim();
        let newEmail = email.trim();

        // Crea una nueva tarjeta con los valores ingresados
        const newCard = {
            persona: newPersona,
            name: newNombre,
            razon: newRazon,
            rfc: newRfc,
            telephone: newTelefono,
            address: newDireccion,
            city: newCiudad,
            estate: newEstado,
            cp: newCodigoPostal,
            regimen: newRegimen,
            cfdi: newCfdi,
            pago: newPago,
            email: newEmail


        };

        // Agrega la nueva tarjeta al arreglo de direcciones de entrega
        updatedAccountData[0]["bills_data"].push(newCard);

        // Establece la nueva tarjeta como seleccionada
        setSelectedCard(updatedAccountData[0]["bills_data"].length - 1);

        // Actualiza el estado local con los nuevos valores
        setPersona(newPersona);
        setNombre(newNombre);
        setRazon(newRazon);
        setRfc(newRfc);
        setTelefono(newTelefono);
        setTelefono(newTelefono);
        setDireccion(newDireccion);
        setCiudad(newCiudad);
        setEstado(newEstado);
        setCodigoPostal(newCodigoPostal);
        setRegimenFiscal(newRegimen);
        setCfdi(newCfdi);
        setPago(newPago);
        setEmail(newEmail);
        console.log(email);
        // Cierra el modal
        handleCloseAgregar();
    };

    const handlePersonaChange = (event) => {
        setSelectedPersona(event.target.value);
    };

    const [persona, setPersona] = useState(AccountData[0]["bills_data"][selectedCard]?.persona);
    const [nombre, setNombre] = useState(AccountData[0]["bills_data"][selectedCard]?.name);

    const [razon, setRazon] = useState(AccountData[0]["bills_data"][selectedCard]?.razon);
    const [rfc, setRfc] = useState(AccountData[0]["bills_data"][selectedCard]?.rfc);

    const [telefono, setTelefono] = useState(AccountData[0]["bills_data"][selectedCard]?.telephone);
    const [direccion, setDireccion] = useState(AccountData[0]["bills_data"][selectedCard]?.address);
    const [ciudad, setCiudad] = useState(AccountData[0]["bills_data"][selectedCard]?.city);
    const [estado, setEstado] = useState(AccountData[0]["bills_data"][selectedCard]?.estate);
    const [codigoPostal, setCodigoPostal] = useState(AccountData[0]["bills_data"][selectedCard]?.cp);


    const [regimenFiscal, setRegimenFiscal] = useState(AccountData[0]["bills_data"][selectedCard]?.regimen);
    const [cfdi, setCfdi] = useState(AccountData[0]["bills_data"][selectedCard]?.cfdi);
    const [pago, setPago] = useState(AccountData[0]["bills_data"][selectedCard]?.pago);
    const [email, setEmail] = useState(AccountData[0]["bills_data"][selectedCard]?.email);



    const handleGuardar = () => {
        // Crea una copia de AccountData
        const updatedAccountData = [...AccountData];
        console.log(updatedAccountData[0]["bills_data"][selectedCard].name)

        // Obtiene los valores ingresados en el modal
        let newNombre = nombre ? nombre.trim() : '';
        let newPersona = persona ? persona.trim() : '';
        let newRazon = razon ? razon.trim() : '';
        let newRfc = rfc ? rfc.trim() : '';

        let newTelefono = telefono ? telefono.trim() : '';
        let newDireccion = direccion ? direccion.trim() : '';
        let newCiudad = ciudad ? ciudad.trim() : '';
        let newEstado = estado ? estado.trim() : '';
        let newCodigoPostal = codigoPostal ? codigoPostal.trim() : '';
        let newRegimen = regimenFiscal ? regimenFiscal.trim() : '';
        let newCfdi = cfdi ? cfdi.trim() : '';
        let newPago = pago ? pago.trim() : '';
        let newEmail = email ? email.trim() : '';
        console.log("guardo todo")

        // Verifica si los valores han cambiado
        const isNombreChanged = newNombre !== AccountData[0]["bills_data"][selectedCard]?.name && newNombre !== '';
        const isTelefonoChanged = newTelefono !== AccountData[0]["bills_data"][selectedCard]?.telephone && newTelefono !== '';
        const isDireccionChanged = newDireccion !== AccountData[0]["bills_data"][selectedCard]?.address && newDireccion !== '';
        const isCiudadChanged = newCiudad !== AccountData[0]["bills_data"][selectedCard]?.city && newCiudad !== '';
        const isEstadoChanged = newEstado !== AccountData[0]["bills_data"][selectedCard]?.estate && newEstado !== '';
        const isCodigoPostalChanged = newCodigoPostal !== AccountData[0]["bills_data"][selectedCard]?.cp && newCodigoPostal !== '';

        const isPersonaChanged = newPersona !== AccountData[0]["bills_data"][selectedCard]?.persona && newPersona !== '';
        const isRazonChanged = newRazon !== AccountData[0]["bills_data"][selectedCard]?.razon && newRazon !== '';
        const isRfcChanged = newRfc !== AccountData[0]["bills_data"][selectedCard]?.rfc && newRfc !== '';
        const isRegimenChanged = newRegimen !== AccountData[0]["bills_data"][selectedCard]?.regimen && newRegimen !== '';
        const isCfdiChanged = newCfdi !== AccountData[0]["bills_data"][selectedCard]?.cfdi && newCfdi !== '';
        const isPagoChanged = newPago !== AccountData[0]["bills_data"][selectedCard]?.pago && newPago !== '';

        const isEmailChanged = newEmail !== AccountData[0]["bills_data"][selectedCard]?.email && newEmail !== '';


        // Actualiza los valores correspondientes en la copia de AccountData solo si han cambiado
        if (isNombreChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].name = newNombre;
        } else {
            newNombre = updatedAccountData[0]["bills_data"][selectedCard].name;
        }
        if (isTelefonoChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].telephone = newTelefono;
        } else {
            newTelefono = updatedAccountData[0]["bills_data"][selectedCard].telephone;
        }
        if (isDireccionChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].address = newDireccion;
        } else {
            newDireccion = updatedAccountData[0]["bills_data"][selectedCard].address;
        }
        if (isCiudadChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].city = newCiudad;
        } else {
            newCiudad = updatedAccountData[0]["bills_data"][selectedCard].city;
        }
        if (isEstadoChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].estate = newEstado;
        } else {
            newEstado = updatedAccountData[0]["bills_data"][selectedCard].estate;
        }
        if (isCodigoPostalChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].cp = newCodigoPostal;
        } else {
            newCodigoPostal = updatedAccountData[0]["bills_data"][selectedCard].cp;
        }
        if (isPersonaChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].persona = newPersona;
        } else {
            newPersona = updatedAccountData[0]["bills_data"][selectedCard].persona;
        }
        if (isRfcChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].rfc = newRfc;
        } else {
            newRfc = updatedAccountData[0]["bills_data"][selectedCard].rfc;
        }
        if (isEmailChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].email = newEmail;
        } else {
            newEmail = updatedAccountData[0]["bills_data"][selectedCard].email;
        }
        if (isRazonChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].razon = newRazon;
        } else {
            newRazon = updatedAccountData[0]["bills_data"][selectedCard].razon;
        }
        if (isRegimenChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].regimen = newRegimen;
        } else {
            newRegimen = updatedAccountData[0]["bills_data"][selectedCard].regimen;
        }
        if (isCfdiChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].cfdi = newCfdi;
        } else {
            newCfdi = updatedAccountData[0]["bills_data"][selectedCard].cfdi;
        }
        if (isPagoChanged) {
            updatedAccountData[0]["bills_data"][selectedCard].pago = newPago;
        } else {
            newPago = updatedAccountData[0]["bills_data"][selectedCard].pago;
        }

        // Actualiza el estado local con los nuevos valores
        setNombre(newNombre);
        setTelefono(newTelefono);
        setDireccion(newDireccion);
        setCiudad(newCiudad);
        setEstado(newEstado);
        setCodigoPostal(newCodigoPostal);
        setPersona(newPersona);
        setRfc(newRfc);
        setEmail(newEmail);
        setRazon(newRazon);
        setRegimenFiscal(newRegimen);
        setCfdi(newCfdi);
        setPago(newPago);

        console.log("actualiza");
        console.log(newNombre);
        console.log(nombre);
        // Cierra el modal
        handleClose();
    };


    if (AccountData[0]["bills_data"].length === 0) {
        return (
            <>
                <Row className="justify-content-md-center">
                    <Col className="p-4">
                        <Container className="container-tables">
                            <Card border="info" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Text className="">
                                        No tienes ninguna forma de facturación agregada :(
                                        <br />
                                        Haz clic para agregar una.
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
        );
    }

    return (
        <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">
                        {AccountData[0]["bills_data"].map((value, index) => (
                            <React.Fragment key={index}>
                                <Card border="info" style={{ width: '18rem' }}>
                                    <Card.Header className="card-header"><b>{value.name}</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            <p style={{ color: 'grey' }}>{value.persona}</p>
                                            <b>{value.razon}</b>
                                            <br />
                                            {value.rfc}
                                            <br />
                                            {value.email}
                                            <br />
                                            {value.regimen}
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
                            </React.Fragment>
                        ))}


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Editar {AccountData[0]["bills_data"][selectedCard]?.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresa un nombre para recordar los datos"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.name}
                                            onChange={(e) => setNombre(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de persona
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            id="persona"
                                            placeholder="Selecciona tu tipo de persona fiscal"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.persona}
                                            onChange={handlePersonaChange} // Manejador de cambio para el tipo de persona

                                        >
                                            <option defaultValue="">Selecciona tu tipo de persona</option>
                                            <option defaultValue="Persona fisica">Persona fisica</option>
                                            <option defaultValue="Persona moral">Persona moral</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Razon</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tu nombre o nombre de la empresa"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.razon}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>RFC
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="XXXX0000XX0"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.rfc}
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Regimen Fiscal</Form.Label>
                                        <Form.Select
                                            type="text"
                                            id="regimen"
                                            placeholder="Selecciona tu regimen fiscal"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.regimen}
                                            disabled={!selectedPersona} // Deshabilitar el campo si no se ha seleccionado el tipo de persona
                                        >
                                            {selectedPersona.toUpperCase() === "PERSONA FISICA" && (
                                                <>
                                                    <option value="">Selecciona tu regimen fiscal</option>

                                                    <option value="Sin obligaciones fiscales">Sin obligaciones fiscales</option>
                                                    <option value="Régimen Simplificado de Confianza">Régimen Simplificado de Confianza</option>
                                                    <option value="Sueldos y salarios e ingresos asimilados a salarios">Sueldos y salarios e ingresos asimilados a salarios</option>
                                                    <option value="Régimen de Actividades Empresariales y Profesionales">Régimen de Actividades Empresariales y Profesionales</option>
                                                    <option value="Régimen de Incorporación Fiscal">Régimen de Incorporación Fiscal</option>
                                                    <option value="Enajenación de bienes">Enajenación de bienes</option>
                                                    <option value="Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas">Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                                                    <option value="Régimen de Arrendamiento">Régimen de Arrendamiento</option>
                                                    <option value="Intereses">Intereses</option>
                                                    <option value="Obtención de premios">Obtención de premios</option>
                                                    <option value="Dividendos">Dividendos</option>
                                                    <option value="Demás ingresos">Demás ingresos</option>
                                                </>
                                            )}
                                            {selectedPersona.toUpperCase() === "PERSONA MORAL" && (
                                                <>
                                                    <option value="">Selecciona tu regimen fiscal</option>

                                                    <option value="Régimen General">Régimen General</option>
                                                    <option value="Régimen con fines no lucrativos">Régimen con fines no lucrativos</option>
                                                    <option value="">Demás ingresos</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>CFDI
                                        </Form.Label>
                                        <Form.Select

                                            type="text"
                                            id="cfdi"
                                            placeholder="Uso de CFDI"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.cfdi}
                                            disabled={!selectedPersona} // Deshabilitar el campo si no se ha seleccionado el tipo de persona
                                        >
                                            {selectedPersona.toUpperCase() === "PERSONA FISICA" && (
                                                <>
                                                    <option value="">Selecciona el uso del CFDI</option>
                                                    <option value="CFDI">CFDI</option>

                                                    <option value="Pagos">Pagos</option>
                                                    <option value="Sin Efectos Fsicales">Sin Efectos Fiscales</option>
                                                </>
                                            )}
                                            {selectedPersona.toUpperCase() === "PERSONA MORAL" && (
                                                <>
                                                    <option value="">Selecciona el uso del CFDI</option>
                                                    <option value="CFDI">CFDI</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de pago
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tipo de pago"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.pago}
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Correo electronico
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="correo@example.com"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.email}
                                        />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Dirección
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="calle y avenida"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.address}
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Ciudad
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ciudad"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.city}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Estado
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="estado"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.estate}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Codigo Postal
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="00000"
                                            defaultValue={AccountData[0]["bills_data"][selectedCard]?.cp}
                                        />
                                    </Form.Group>



                                </Form>
                            </Modal.Body >


                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={handleGuardar}>
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Card border="info" style={{ width: '18rem', height: '18rem' }}>
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
                                <Modal.Title>Agregar Facturacion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresa un nombre para recordar los datos"
                                            onChange={(e) => setNombre(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Persona
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu tipo de persona fiscal"
                                            onChange={(e) => {
                                                handlePersonaChange(e);
                                                setPersona(e.target.value);
                                            }}
                                            autoFocus
                                        >
                                            <option defaultValue="">Selecciona tu tipo de persona</option>
                                            <option defaultValue="Persona fisica">Persona fisica</option>
                                            <option defaultValue="Persona moral">Persona moral</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Razon</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tu nombre o nombre de la empresa"
                                            onChange={(e) => setRazon(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>RFC
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="XXXX0000XX0"
                                            onChange={(e) => setRfc(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Regimen Fiscal</Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu regimen fiscal"
                                            onChange={(e) => setRegimenFiscal(e.target.value)}
                                            autoFocus
                                            disabled={!selectedPersona} // Deshabilitar el campo si no se ha seleccionado el tipo de persona
                                        >
                                            {selectedPersona.toUpperCase() === "PERSONA FISICA" && (
                                                <>
                                                    <option defaultValue="">Selecciona tu regimen fiscal</option>

                                                    <option defaultValue="Sin obligaciones fiscales">Sin obligaciones fiscales</option>
                                                    <option defaultValue="Régimen Simplificado de Confianza">Régimen Simplificado de Confianza</option>
                                                    <option defaultValue="Sueldos y salarios e ingresos asimilados a salarios">Sueldos y salarios e ingresos asimilados a salarios</option>
                                                    <option defaultValue="Régimen de Actividades Empresariales y Profesionales">Régimen de Actividades Empresariales y Profesionales</option>
                                                    <option defaultValue="Régimen de Incorporación Fiscal">Régimen de Incorporación Fiscal</option>
                                                    <option defaultValue="Enajenación de bienes">Enajenación de bienes</option>
                                                    <option defaultValue="Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas">Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                                                    <option defaultValue="Régimen de Arrendamiento">Régimen de Arrendamiento</option>
                                                    <option defaultValue="Intereses">Intereses</option>
                                                    <option defaultValue="Obtención de premios">Obtención de premios</option>
                                                    <option defaultValue="Dividendos">Dividendos</option>
                                                    <option defaultValue="Demás ingresos">Demás ingresos</option>
                                                </>
                                            )}
                                            {selectedPersona.toUpperCase() === "PERSONA MORAL" && (
                                                <>
                                                    <option vadefaultValuelue="">Selecciona tu regimen fiscal</option>

                                                    <option defaultValue="Régimen General">Régimen General</option>
                                                    <option defaultValue="Régimen con fines no lucrativos">Régimen con fines no lucrativos</option>
                                                    <option defaultValue="">Demás ingresos</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>CFDI
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Uso de CFDI"
                                            onChange={(e) => setCfdi(e.target.value)}
                                            autoFocus
                                            disabled={!selectedPersona} // Deshabilitar el campo si no se ha seleccionado el tipo de persona
                                        >
                                            {selectedPersona.toUpperCase() === "PERSONA FISICA" && (
                                                <>
                                                    <option value="">Selecciona el uso del CFDI</option>
                                                    <option value="CFDI">CFDI</option>

                                                    <option value="Pagos">Pagos</option>
                                                    <option value="Sin Efectos Fsicales">Sin Efectos Fiscales</option>
                                                </>
                                            )}
                                            {selectedPersona.toUpperCase() === "PERSONA MORAL" && (
                                                <>
                                                    <option value="">Selecciona el uso del CFDI</option>
                                                    <option value="CFDI">CFDI</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Pago
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tipo de pago"
                                            onChange={(e) => setPago(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="correo@example.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Telefono
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="000 000 0000"
                                            onChange={(e) => setTelefono(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Dirección
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="calle y avenida"
                                            onChange={(e) => setDireccion(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Ciudad
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ciudad"
                                            onChange={(e) => setCiudad(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Estado
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="estado"
                                            onChange={(e) => setEstado(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Codigo Postal
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="00000"
                                            onChange={(e) => setCodigoPostal(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>



                                </Form>
                            </Modal.Body >


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
    );
}

export default Bills;
