import React, { useState } from "react"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AccountData from "./AccountData";



const changeDataProfile = () => {
    
}



const Profile = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <>
            <Container>
                {AccountData.map((value, index) => {
                    return (
                        <>
                            <Card border="info" style={{ width: '18rem' }}>
                                <Card.Header className="card-header"><b>DATOS PERSONALES</b></Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <b>Username:</b>{value.user_name}
                                        <br />
                                        <b>Name:</b>{value.name}
                                        <br />
                                        <b>Email:</b>{value.email}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" className="btn-primary" size="md" onClick={handleShow}>
                                            Editar
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                            <br />


                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Editar perfil</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Nombre de usuario</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="profile-user-name"
                                                placeholder="Ejemplo.01"
                                                defaultValue={value.user_name}
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Nombre completo</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="profile-name"
                                                placeholder="Ejemplo"
                                                defaultValue={value.name}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="profile-email"
                                                placeholder="ejemplo.01@ejemplo.com"
                                                defaultValue={value.email}
                                            
                                            />
                                        </Form.Group>

                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button variant="primary" onClick={() => {
                                        changeDataProfile();
                                        handleClose();
                                    }}
                                    >
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                        </>
                    )
                })}
            </Container>


        </>
    )
}

export default Profile
