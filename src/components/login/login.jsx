import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import './login.css';

import LoginPass from "./loginPass";


const Login = () => {


    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado que indica si el usuario está autenticado
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




    const [loginP, setLoginP] = useState(false);


    const handleLogin = async (e) => {
        /* e.preventDefault();
         try {
             await AuthService.login(email, password).then(
                 () => {*/
        setLoginP(true);
        {
            loginP &&
                <LoginPass usuario={user} />
        }
        window.location.reload();
        /*  },
          (error) => {
              console.error(error);
          }
      );
  } catch (err) {
      console.log(err);
  }*/
    };

    return (
        <>
            <login>
                {isLoggedIn ? (
                    <div></div>
                ) : (
                    <div className="login-container">
                        <div className="logo width ">
                            <a href="/">
                                <img src={logo_footer} alt='startlight' />
                            </a>
                        </div>
                        <h1>Iniciar Sesión</h1>

                        <Form className="form-container" onSubmit={handleLogin}>

                            <Form.Group className="input-container">
                                <Form.Label >Usuario:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="username" required value={user} onChange={(e) => setUser(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un usuario valido .
                                </Form.Control.Feedback>
                            </Form.Group>


                            <div className="button-container">

                                <button className="continue-btn" type="submit">Continuar</button>

                                <button className="register-btn" onClick={() => navigate("/signup")}>Registrarse</button>
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

export default Login



