import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import './login.css';

const Login = () => {


    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isUser, setIsUser] = useState(false); // Estado que indica si el usuario está autenticado
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
            /* await AuthService.login(email, password).then(
                () => {*/
            if (isUser) {
                setIsLoggedIn(true); // actualizar el estado a true
                navigate("/");
                window.location.reload();
            } else {
                setUser(user);
                setIsUser(true);
                localStorage.setItem("isUser", true);
            }

            /* },
            (error) => {
                console.error(error);
            }
      );*/
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
                                <Form.Label>Usuario:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="username" required value={user} onChange={(e) => setUser(e.target.value)} />
                            </Form.Group>

                            {isUser ? (
                                <Form.Group className="input-container">
                                    <Form.Label >Contraseña:</Form.Label>
                                    <Form.Control className="input" type="password" placeholder="contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        <Link to='/forgot'> ¿Olvidaste la contraseña? </Link>
                                    </Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        Porfavor ingresa una contraseña valida.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            ) : null}
                            <div className="button-container">

                                <button className="continue-btn" type="submit">Continuar</button>

                                {isUser ? (
                                    <button className="continue-btn" type="submit">Iniciar sesion con codigo</button>
                                ) : null}
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



