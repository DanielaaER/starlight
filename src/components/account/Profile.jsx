import React, { useState } from "react"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { gql, useQuery } from '@apollo/client';
import Swal from 'sweetalert2'
import client from '../../services/Client';




const Profile = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [data, setData] = useState(
        {
            myUser: {
                name: "",
                fathers_surname: "",
                mothers_surname: "",
                username: "",
                email: "",
                phone: "",
            }
        }
    );

    const [name, setName] = useState("");
    const [fathers_surname, setFathers_surname] = useState("");
    const [mothers_surname, setMothers_surname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    
    client.query({
        query: gql`
          query {
            myUser {
              name
              fathers_surname
              mothers_surname
              username
              email
              phone
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

            setData(data)
           
        }
    }).catch(error => {
        // Manejar errores
        console.error("ERROR ->", error);
    });


    const handleEditProfile = async (e) => {
        e.preventDefault();


        const { data, errors, loading } = await client.mutate({
            mutation: gql`
            mutation UpdateUser(
                $name: String!,
                $fathers_surname: String!,
                $mothers_surname: String!,
                $username: String!,
                $email: String!,
                $password: String!,
                $phone: String!,
                ) {
                    updateUser(
                        name: $name,
                        fathers_surname: $fathers_surname,
                        mothers_surname: $mothers_surname,
                        username: $username,
                        email: $email,
                        password: $password,
                        phone: $phone
                    ){
                        name
                        fathers_surname
                        mothers_surname
                        username
                        email
                        phone
                      }
              }
            `,
            context: {
                headers: {
                    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
                }
            },
            variables: {
                name,
                fathers_surname,
                mothers_surname,
                username,
                email,
                password,
                phone,
            },
        });

        if (loading) {
            console.log("cargando");
        }
        if (errors) {
            console.log("error->", errors);
            Swal.fire({
                title: 'Ocurrió un error',
                text: 'No fue posible actualizar el usuario',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        if (data) {
            Swal.fire({
                title: 'Usuario actualizado',
                text: 'Usuario actualizado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(
                ()=>{
                    setName('')
                    setFathers_surname('')
                    setMothers_surname('')
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setPhone('')
        
                    handleClose();
                    window.location.reload()
                }
               
            )
        }

    }


    return (
        <>
            <Container>
                <>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header className="card-header"><b>DATOS PERSONALES</b></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <b>Usuario:</b>{data.myUser.username}
                                <br />
                                <b>Nombre:</b>{data.myUser.name} {data.myUser.fathers_surname} {data.myUser.mothers_surname}
                                <br />
                                <b>Correo:</b>{data.myUser.email}
                                <br />
                                <b>Telefono:</b>{data.myUser.phone}

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
                            <Form onSubmit={handleEditProfile}>

                                <div className='form-container'>
                                    <Form.Group className="input-container">
                                        <Form.Label >Nombre:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="text" 
                                        placeholder="nombre" 
                                        defaultValue={data.myUser.name}
                                        id= "input-name"
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Porfavor ingresa un nombre valido .
                                        </Form.Control.Feedback>
                                    </Form.Group>


                                    <Form.Group className="input-container">
                                        <Form.Label >Apellido Paterno:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="text" 
                                        placeholder="Apellido Paterno" 
                                        required 
                                        defaultValue={data.myUser.fathers_surname}
                                        id= "input-fathers-surname"
                                        onChange={(e) => setFathers_surname(e.target.value)} 
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Porfavor ingresa un Apellido valido .
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="input-container">
                                        <Form.Label >Apellido Materno:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="text" 
                                        placeholder="Apellido Materno" 
                                        required 
                                        defaultValue={data.myUser.mothers_surname}
                                        id= "input-mothers-surname" 
                                        onChange={(e) => setMothers_surname(e.target.value)} />

                                        <Form.Control.Feedback type="invalid">
                                            Porfavor ingresa un Apellido valido .
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                  


                                </div>


                                <div className='form-container'>
                                    <Form.Group className="input-container">
                                        <Form.Label >Usuario:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="text" 
                                        placeholder="username" 
                                        required 
                                        defaultValue={data.myUser.username} 
                                        id= "input-username"
                                        onChange={(e) => setUsername(e.target.value)} 
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Porfavor ingresa un usuario valido .
                                        </Form.Control.Feedback>
                                    </Form.Group>


                                    <Form.Group className="input-container">
                                        <Form.Label>Correo electronico:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="email" 
                                        placeholder="example@mail.com" 
                                        required 
                                        defaultValue={data.myUser.email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Please insert a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="input-container">
                                        <Form.Label >Contraseña:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="password" 
                                        placeholder="contraseña" 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        min={8}
                                        required 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Porfavor ingresa una contraseña valida.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="input-container">
                                        <Form.Label >Confirma Contraseña:</Form.Label>
                                        <Form.Control
                                            className="input"
                                            type="password"
                                            placeholder="contraseña"
                                            required
                                            min={8}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                            isInvalid={confirmPasswordError !== ''}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {confirmPasswordError}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="input-container">
                                        <Form.Label> Celular:</Form.Label>
                                        <Form.Control 
                                        className="input" 
                                        type="text" 
                                        placeholder="000 000 0000" 
                                        required 
                                        defaultValue={data.myUser.phone} 
                                        onChange={(e) => setPhone(e.target.value)} 
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Please insert a valid cellphone.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </div>

                                <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary"  type="submit">
                                Guardar
                            </Button>
                            </Form>

                        </Modal.Body>
                    </Modal>



                </>

            </Container>


        </>
    )
}

export default Profile
