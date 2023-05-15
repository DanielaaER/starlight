import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import './login.css';



const Forgot = () => {


    const [email, setEmail] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();



    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                // Verificar si el usuario ya ha iniciado sesión
                const user = await AuthService.getCurrentUser();
                if (user) {
                    setIsLoggedIn(true);
                    navigate("/");
                }
            } catch (err) {
                console.log(err);
            }
        };
        checkLoginStatus();
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email === "correo@mail.com") {
                console.log("valido")
                setIsLoggedIn(true); // actualizar el estado a true
                navigate("/verifyMail");
                window.location.reload();
            } else {
                handleCodeResend();
            }
        } catch (err) {
            console.log(err);
        }
    };


    const [alertStyle, setAlertStyle] = useState({ backgroundColor: "", color: "", fontFamily: "" });

    const handleCodeResend = () => {
        alert("Correo incorrecto");
        setAlertStyle({ backgroundColor: "#B3D3E5", color: "white", fontFamily: "Poppins" });
    };


    return (
        <>
            <login>
                {isLoggedIn ? (
                    <div>
                        <h1>You are already logged in!</h1>
                        <Button onClick={() => navigate("/")}>Go to Dashboard</Button>
                    </div>
                ) : (
                    <div className="login-container">
                        <div className="logo width ">
                            <a href="/">
                                <img src={logo_footer} alt='startlight' />
                            </a>
                        </div>
                        <h1>Recupera tu contraseña </h1>

                        <Form className="form-container" onSubmit={handleLogin}>
                            <Form.Group className="input-container">
                                <Form.Label>Ingresa tu correo:</Form.Label>
                                <Form.Control className="input" type="email" placeholder="correo electronico" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <div className="button-container">

                                <button className="continue-btn" type="submit">Continuar</button>

                                <button className="register-btn" onClick={() => navigate("/login")}>Inicia Sesion </button>
                            </div>

                        </Form>



                        <p className="or-label">O inicia sesión con:</p>
                        <div className="logo-container">
                            <i className='fab fa-google'></i>
                            <i className='fab fa-facebook-f'></i>
                        </div>
                    </div>
                )}
            </login>
        </>
    )
}

export default Forgot


