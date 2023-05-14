import React from 'react';
import logo_footer from "../../components/assets/images/logo_footer.svg"

import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";
import './signup.css';


const Signup = () => {

    const navigate = useNavigate();
    return (
        <>
            <signup>
                <div className="signup-container">
                    <div className="logo width ">
                        <a href="/">
                            <img src={logo_footer} alt='startlight' />
                        </a>
                    </div>
                    <h1>Registrarse :)</h1>
                    <div className="form1-container">

                        <div className='form-container'>
                            <div className="input-container">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" id="nombre"
                                    placeholder="ingresa tu nombre o nombres" />
                            </div>


                            <div className="input-container">
                                <label htmlFor="aPaterno">Apellido paterno:</label>
                                <input type="text" id="aPaterno"
                                    placeholder="ingresa tu apellido paterno" />
                            </div>


                            <div className="input-container">
                                <label htmlFor="aMaterno">Apellido materno:</label>
                                <input type="text" id="aMaterno"
                                    placeholder="ingresa tu apellido materno" />
                            </div>


                            <div className="input-container">
                                <label htmlFor="password">Contraseña:</label>
                                <input type="password" id="password" placeholder='ingresa tu contraseña' />
                            </div>

                        </div>


                        <div className='form-container'>


                            <div className="input-container">
                                <label htmlFor="usuario">Usuario:</label>
                                <input type="text" id="usuario"
                                    placeholder="ingresa tu usuario" />
                            </div>

                            <div className="input-container">
                                <label htmlFor="correo">Correo:</label>
                                <input type="email" id="correo"
                                    placeholder="ingresa tu correo electronico" />
                            </div>

                            <div className="input-container">
                                <label htmlFor="celular">Celular:</label>
                                <input type="text" id="celular"
                                    placeholder="ingresa tu numero telefonico" />
                            </div>

                            <div className="input-container">
                                <label htmlFor="password">Confirmar contraseña:</label>
                                <input type="password" id="password" placeholder='ingresa tu contraseña' />
                            </div>

                        </div>



                    </div>
                    <div className="form1-container">
                        <div className="form-container">
                            <div className="button-container">

                                <button className="continue-btn" onClick={() => navigate("/login")}>Iniciar Sesion</button>
                                <p className="or-label">¿Ya tienes cuenta?</p>
                            </div>

                        </div>

                        <div className='form-container'>
                            <div className="button-container">
                                <button className="register-btn">Registrarse</button>

                            </div>
                        </div>



                    </div>



                </div>
            </signup>
        </>
    )
}

export default Signup



