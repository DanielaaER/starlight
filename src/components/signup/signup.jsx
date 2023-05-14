import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import './signup.css';
import { FormSelect } from "react-bootstrap";

import AuthService from "../../services/auth.service";

import axios from 'axios';


const Signup = () => {


    const [name, setName] = useState("");
    const [last_name, setLast_name] = useState("");
    const [vendedor, setVendedor] = useState("");

    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado que indica si el usuario está autenticado
    const navigate = useNavigate();





    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log("intentoo");
            const response = await axios.post("https://apigraphqlecommerce-service-leo-oh.cloud.okteto.net/graphql", {
                query: `
                        mutation {
                            register(
                                first_name: "${name}",
                                last_name: "${last_name}",
                                username: "${user}",
                                email: "${email}",
                                password: "${password}"
                            )
                        }   
                    `
            });
            console.log("intentare conectarme");
            const token = response.data.data.register;
            console.log(token)
            localStorage.setItem("token", token);
            navigate("/verify");
        } catch (err) {
            console.log("errorrr")
            console.log(err);
        }
    };


    return (
        <>
            <signup>
                <div className="signup-container">
                    <div className="logo width ">
                        <a href="/">
                            <img src={logo_footer} alt='startlight' />
                        </a>
                    </div>
                    <h1>Registrarse</h1>
                    <Form className="form1-container" onSubmit={handleRegister}>

                        <div className='form-container'>
                            <Form.Group className="input-container">
                                <Form.Label >Nombre:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="nombre" required value={name} onChange={(e) => setName(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un nombre valido .
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group className="input-container">
                                <Form.Label >Apellido Paterno:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="Apellido Paterno" required value={last_name} onChange={(e) => setLast_name(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un Apellido valido .
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="input-container">
                                <Form.Label >Contraseña:</Form.Label>
                                <Form.Control className="input" type="password" placeholder="contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />


                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa una contraseña valida.
                                </Form.Control.Feedback>
                            </Form.Group>
                            

                            <div className="button-container">

                                <button className="continue-btn" onClick={() => navigate("/login")}>Iniciar Sesion</button>

                                <Link to='/login'> Ya tienes una cuenta? </Link>

                            </div>

                        </div>


                        <div className='form-container'>


                            <Form.Group className="input-container">
                                <Form.Label >Usuario:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="username" required value={user} onChange={(e) => setUser(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un usuario valido .
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electronico:</Form.Label>
                                <Form.Control className="input" type="email" placeholder="example@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Please insert a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="input-container">
                                <Form.Label >Confirma Contraseña:</Form.Label>
                                <Form.Control className="input" type="password" placeholder="contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />


                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa una contraseña valida.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="button-container">
                                <button className="register-btn" type="submit" >Registrarse</button>

                            </div>

                        </div>



                    </Form>




                </div>
            </signup>
        </>
    )
}

export default Signup



