import React from 'react';
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"

import './login.css';


const Login = () => {
    return (
        <>
            <login>
                <div className="login-container">
                    <div className="logo width ">
                        <a href="/">
                            <img src={logo_footer} alt='startlight' />
                        </a>
                    </div>
                    <h1>Iniciar Sesión</h1>
                    <div className="form-container">
                        <div className="input-container">
                            <label htmlFor="username">Usuario:</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" />
                        </div>
                        <Link to='/forgot'>
                            <p>¿Olvidaste tu contraseña?</p>
                        </Link>

                    </div>
                    <div className="form-container">
                        <div className="button-container">

                            <button className="continue-btn">Continuar</button>

                            <button className="register-btn">Registrarse</button>
                        </div>

                    </div>



                    <p className="or-label">O inicia sesión con:</p>
                    <div className="logo-container">
                        <i className='fab fa-google'></i>
                        <i className='fab fa-facebook-f'></i>
                    </div>
                </div>
            </login>
        </>
    )
}

export default Login



