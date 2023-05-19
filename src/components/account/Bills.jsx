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

    const handlePersonaChange = (event) => {
        setSelectedPersona(event.target.value);
    };


    if (AccountData[0]["delivery_address"].length === 0) {
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

                        <Card border="info" style={{ width: '18rem', height: '18rem' }}>
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

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Editar {AccountData[0]["bills_data"][selectedCard]?.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de persona
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
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
                                <Button variant="primary" onClick={handleClose}>
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Modal>



                        <Modal show={show} onHide={handleAgregar}>
                            <Modal.Header closeButton>
                                <Modal.Title>Agregar Facturacion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de persona
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu tipo de persona fiscal"
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
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>RFC
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="XXXX0000XX0"
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Regimen Fiscal</Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu regimen fiscal"
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
                                            placeholder="Uso de CFDI"
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
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Correo electronico
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="correo@example.com"
                                        />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Dirección
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="calle y avenida"
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Ciudad
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ciudad"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Estado
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="estado"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Codigo Postal
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="00000"
                                        />
                                    </Form.Group>



                                </Form>
                            </Modal.Body >


                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
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
