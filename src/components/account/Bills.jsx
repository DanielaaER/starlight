import React, { useState } from "react"
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
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAgregar = () => setShow(false);

    if (AccountData[0]["delivery_address"].length == 0) {
        return <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text className="">
                                    No tienes ninguna forma de facturacion agregada :(
                                    <br />
                                    haz click para agregar una
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
                        {AccountData[0]["bills_data"].map((value, index) => {
                            return (
                                <>
                                    <Card border="info" style={{ width: '18rem' }}>
                                        <Card.Header className="card-header"><b>{value.name}</b></Card.Header>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>



                                                <p style={{ color: 'grey' }} >{value.persona}</p>

                                                <b>{value.razon}</b>
                                                <br />
                                                {value.rfc}
                                                <br />
                                                {value.email}
                                                <br />
                                                {value.regimen}
                                                <br />
                                                {value.cfdi}
                                                <br />
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="md" onClick={handleShow}>
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
                                            <Modal.Title>Editar {value.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>


                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Tipo de persona
                                                    </Form.Label>
                                                    <Form.Select
                                                        type="text"
                                                        placeholder="Selecciona tu tipo de persona fiscal"
                                                        value={value.persona}
                                                    >
                                                        <option value="">Selecciona tu tipo de persona</option>
                                                        <option value="Persona fisica">Persona fisica</option>
                                                        <option value="Persona fisica">Persona moral</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Razon</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Tu nombre o nombre de la empresa"
                                                        value={value.razon}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>RFC
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="XXXX0000XX0"
                                                        value={value.rfc}
                                                    />
                                                </Form.Group>

                                                {
                                                    value.persona.toUpperCase() === "PERSONA FISICA" ? (


                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Regimen Fiscal
                                                            </Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                placeholder="Selecciona tu regimen fiscal"
                                                                value={value.regimen}
                                                            >
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
                                                                <option value="">Demás ingresos</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    ) : (
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Regimen Fiscal
                                                            </Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                placeholder="Selecciona tu regimen fiscal"
                                                                value={value.regimen}
                                                            >
                                                                <option value="Régimen General">Régimen General</option>
                                                                <option value="Régimen con fines no lucrativos">Régimen con fines no lucrativos</option>

                                                            </Form.Select>
                                                        </Form.Group>
                                                    )}

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>CFDI
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Uso de CFDI"
                                                        value={value.cfdi}
                                                    />
                                                </Form.Group>


                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Tipo de pago
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Tipo de pago"
                                                        value={value.pago}
                                                    />
                                                </Form.Group>


                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Correo electronico
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="correo@example.com"
                                                        value={value.email}
                                                    />
                                                </Form.Group>



                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Dirección
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="calle y avenida"
                                                        value={value.address}
                                                    />
                                                </Form.Group>


                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Ciudad
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="ciudad"
                                                        value={value.city}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Estado
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="estado"
                                                        value={value.estate}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Codigo Postal
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="00000"
                                                        value={value.cp}
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
                                        <Button variant="primary" nClick={() => {
                                            handleAgregar();
                                        }}>Agregar</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>



                        <Modal show={show} onHide={handleAgregar}>
                            <Modal.Header closeButton>
                                <Modal.Title>Agregar datos de facturacion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de persona
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu tipo de persona fiscal"
                                           
                                        >
                                            <option value="">Selecciona tu tipo de persona</option>
                                            <option value="Persona fisica">Persona fisica</option>
                                            <option value="Persona fisica">Persona moral</option>
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

                                    {
                                        value.persona.toUpperCase() === "PERSONA FISICA" ? (


                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Regimen Fiscal
                                                </Form.Label>
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Selecciona tu regimen fiscal"
                                                    value={value.regimen}
                                                >
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
                                                    <option value="">Demás ingresos</option>
                                                </Form.Select>
                                            </Form.Group>
                                        ) : (
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Regimen Fiscal
                                                </Form.Label>
                                                <Form.Select
                                                    type="text"
                                                    placeholder="Selecciona tu regimen fiscal"

                                                >
                                                    <option value="Régimen General">Régimen General</option>
                                                    <option value="Régimen con fines no lucrativos">Régimen con fines no lucrativos</option>

                                                </Form.Select>
                                            </Form.Group>
                                        )}

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>CFDI
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Uso de CFDI"
                                        />
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
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleAgregar}>
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
export default Bills
