import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import './login.css';
import { gql, useQuery } from "@apollo/client"
import client from '../../services/Client';
import Swal from 'sweetalert2'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          // Realiza una consulta de GraphQL para registrar un nuevo usuario
         
            const  {data, errors, loading} = await client.mutate({
                mutation: gql`
                mutation Login(
                    $email: String!,
                    $password: String!,
                    ) {
                        login(
                            email: $email,
                            password: $password,
                        )
                  }
                `,
                variables: { 
                    email,
                    password,
                },
              });
              if(data){
                const token = data["login"]
                localStorage.setItem('token', token);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Bienvenido!',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(
                    () => {
                        navigate("/account");
                        window.location.reload();
                    }
                  )
                
              }else{
                localStorage.removeItem("token");
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'No fue posible acceder a su cuenta ',
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
              
                setEmail('')
                setPassword('')
        
        
        } catch (error) {
            localStorage.removeItem("token");
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.graphQLErrors[0]["message"],
                showConfirmButton: false,
                timer: 1500
              })
        }
      };





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

                        <Form className="form-container" onSubmit={handleLogin}>
                            <Form.Group className="input-container">
                                <Form.Label>Correo electronico:</Form.Label>
                                <Form.Control className="input" type="email" placeholder="example@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            {emailRegex.test(email)   ? (
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

                                {true ? (
                                    <button className="continue-btn" type="submit" onClick={() => navigate("/verifyCode")} >Iniciar sesion con codigo</button>
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
    
            </login>
        </>
    )
}

export default Login



