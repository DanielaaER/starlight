import React, { useState, useEffect } from "react";
import logo_footer from "../../components/assets/images/logo_footer.svg"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import './signup.css';
import { gql, useMutation } from '@apollo/client';
import Swal from 'sweetalert2'
import client from '../../services/Client';



const Signup = () => {

    const [name, setName] = useState("");
    const [fathers_surname, setFathers_surname] = useState("");
    const [mothers_surname, setMothers_surname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();


  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          // Realiza una consulta de GraphQL para registrar un nuevo usuario
          if(password !== repeatPassword){
            setConfirmPasswordError('Las contraseñas no coinciden');
             return;
          }
            const  {data, errors, loading} = await client.mutate({
                mutation: gql`
                mutation Register(
                    $name: String!,
                    $fathers_surname: String!,
                    $mothers_surname: String!,
                    $username: String!,
                    $email: String!,
                    $password: String!,
                    $phone: String!,
                    ) {
                        register(
                            name: $name,
                            fathers_surname: $fathers_surname,
                            mothers_surname: $mothers_surname,
                            username: $username,
                            email: $email,
                            password: $password,
                            phone: $phone
                        )
                  }
                `,
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
              if(data){
                const token = data["register"]
                localStorage.setItem('token', token);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Datos enviados correctamente!',
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
                    title: 'No fue posible crear la cuenta, intente más tarder.',
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
              
                setName('')
                setFathers_surname('')
                setMothers_surname('')
                setUsername('')
                setEmail('')
                setPassword('')
                setPhone('')
        
        
        } catch (error) {
            localStorage.removeItem("token");
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ocurrió un error al crear la cuenta.',
                showConfirmButton: false,
                timer: 1500
              })
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
                                <Form.Control className="input" type="text" placeholder="Apellido Paterno" required value={fathers_surname} onChange={(e) => setFathers_surname(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un Apellido valido .
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="input-container">
                                <Form.Label >Apellido Materno:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="Apellido Materno" required value={mothers_surname} onChange={(e) => setMothers_surname(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un Apellido valido .
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="input-container">
                                <Form.Label >Contraseña:</Form.Label>
                                <Form.Control className="input" type="password" placeholder="contraseña" required value={password}  min={8} onChange={(e) => setPassword(e.target.value)} />


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
                                <Form.Control className="input" type="text" placeholder="username" required value={username} onChange={(e) => setUsername(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Porfavor ingresa un usuario valido .
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group className="input-container">
                                <Form.Label>Correo electronico:</Form.Label>
                                <Form.Control className="input" type="email" placeholder="example@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Please insert a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group className="input-container">
                                <Form.Label> Celular:</Form.Label>
                                <Form.Control className="input" type="text" placeholder="000 000 0000" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                                <Form.Control.Feedback type="invalid">
                                    Please insert a valid cellphone.
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group className="input-container">
                                <Form.Label >Confirma Contraseña:</Form.Label>
                                <Form.Control 
                                className="input" 
                                type="password" 
                                placeholder="contraseña" 
                                required 
                                value={repeatPassword} 
                                min={8}
                                onChange={(e) => setRepeatPassword(e.target.value)} 
                                isInvalid={confirmPasswordError !== ''}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {confirmPasswordError}
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



