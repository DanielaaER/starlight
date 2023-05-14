import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import './login.css';


const Login = () => {

    const history = useHistory()

    const handleSignup = () => {
        history.push('/signup');
    }
    const [email, setEmail] = useState("");
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
                    navigate("/dashboard/admin/section/user");
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
            await AuthService.login(email, password).then(
                () => {
                    setIsLoggedIn(true); // actualizar el estado a true
                    navigate("/");
                    window.location.reload();
                },
                (error) => {
                    console.error(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <login>
                {isLoggedIn ? (
                    <div>
                        <h1>You are already logged in!</h1>
                        <Button onClick={() => navigate("/dashboard/admin/section/user")}>Go to Dashboard</Button>
                    </div>
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
                                <label htmlFor="username">Usuario:</label>
                                <input type="text" id="username" />
                            </Form.Group>
                            <div className="input-container">
                                <label htmlFor="password">Contraseña:</label>
                                <input type="password" id="password" />
                            </div>
                            <Link to='/forgot'>
                                <p>¿Olvidaste tu contraseña?</p>
                            </Link>

                        </Form>
                        <div className="form-container">
                            <div className="button-container">

                                <button className="continue-btn">Continuar</button>

                                <button className="register-btn" onClick={handleSignup}>Registrarse</button>
                            </div>

                        </div>



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



