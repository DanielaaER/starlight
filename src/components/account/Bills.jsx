import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AccountData from "./AccountData";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import client from "../../services/Client";
import { gql, useMutation, query } from "@apollo/client";
import Swal from "sweetalert2";

const Address = () => {
    // MENU CONTROL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Option control CREATE/EDIT
    const [menuTitle, setMenuTitle] = useState("");

    const [id, setId] = useState("");

    const [title, setTitle] = useState("");
    const [regime, setRegime] = useState("");
    const [regime_fiscal, setRegime_fiscal] = useState("");
    const [name, setName] = useState("");
    const [payment_method, setPayment_method] = useState("");
    const [cfdi, setCfdi] = useState("");
    const [rfc, setRfc] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [town, setTown] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [postal_code, setPostal_code] = useState("");
    const [interior_number, setInterior_number] = useState("");
    const [exterior_number, setExterior_number] = useState("");

    const [data, setData] = useState({
        myUser: {
            billing: {
                id: "",
                title: "",
                regime: "",
                regime_fiscal: "",
                name: "",
                payment_method: "",
                cfdi: "",
                rfc: "",
                email: "",
                street: "",
                city: "",
                town: "",
                state: "",
                country: "",
                phone: "",
                postal_code: "",
                interior_number: "",
                exterior_number: "",
            },
        },
    });

    client
        .query({
            query: gql`
        query {
            myUser{
                billing{
                  id  
                  title
                  regime
                  regime_fiscal
                  name
                  payment_method
                  cfdi
                  rfc
                  email
                  street
                  city
                  town
                  state
                  country
                  phone
                  postal_code
                  interior_number
                  exterior_number
                }
              }
        }
      `,
            context: {
                headers: {
                    Authorization: localStorage.getItem("token")
                        ? `Bearer ${localStorage.getItem("token")}`
                        : "",
                },
            },
        })
        .then((response) => {
            const { data, loading, errors } = response;

            if (loading) {
                console.log("cargando ...");
            }
            if (errors) {
                console.log("Error ->", errors);
            }
            if (data) {
                console.log("ADDRESS ====> ", data);
                setData(data);
            }
        })
        .catch((error) => {
            console.error("Error ->", error);
        });

    const handleDeleteAdress = async (idAddress) => {
        Swal.fire({
            title: "¿Está seguro de eliminar este método de facturación?",
            text: "No podrá deshacer los cambios.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data, errors, loading } = await client.mutate({
                    mutation: gql`
            mutation DeleteBilling($id: ID!) {
                deleteBilling(id: $id)
            }
          `,
                    variables: {
                        id: idAddress,
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem("token")
                                ? `Bearer ${localStorage.getItem("token")}`
                                : "",
                        },
                    },
                });

                if (data) {
                    Swal.fire(
                        "¡Eliminado!",
                        "Método de facturación eliminado correctamente.",
                        "success"
                    );
                    window.location.reload();
                }
                if (errors) {
                    Swal.fire("¡Error!", "No se pudo eliminar el método de facturación.", "error");
                }
            }
        });
    };

    const handleMenu = async (
        option,
        idBilling,
        title,
        regime,
        regime_fiscal,
        name,
        payment_method,
        cfdi,
        rfc,
        email,
        street,
        city,
        town,
        state,
        country,
        phone,
        postal_code,
        interior_number,
        exterior_number,
    ) => {
        handleClearData();
        if (option === 1) {
            setId("");
            setMenuTitle("AGREGAR NUEVO METODO DE FACTURACIÓN");
            handleShow();
        }

        if (option === 2) {
            console.log("ID ====>",idBilling)
            setId(idBilling);
            setTitle(title);
            setRegime(regime);
            setRegime_fiscal(regime_fiscal);
            setName(name);
            setPayment_method(payment_method);
            setCfdi(cfdi);
            setRfc(rfc);
            setEmail(email);
            setStreet(street);
            setCity(city);
            setTown(town);
            setState(state);
            setCountry(country);
            setPhone(phone);
            setPostal_code(postal_code);
            setInterior_number(interior_number);
            setExterior_number(exterior_number);

            setMenuTitle("EDITAR MÉTODO DE FACTURACIÓN");
            handleShow();
        }
    };

    const handleMenuGuardar = async () => {
        if (id === "") {
            try {
                const { data, errors, loading } = await client.mutate({
                    mutation: gql`
            mutation CreateBilling(
                $title: String!
                $regime: String!
                $regime_fiscal: String!
                $name: String!
                $payment_method: String!
                $cfdi: String!
                $rfc: String!
                $email: String!
                $street: String!
                $city: String!
                $town: String!
                $state: String!
                $country: String!
                $phone: String!
                $postal_code: String!
                $interior_number: String!
                $exterior_number: String!

            ) {
                createBilling(
                    title: $title
                    regime: $regime
                    regime_fiscal: $regime_fiscal
                    name: $name
                    payment_method: $payment_method
                    cfdi: $cfdi
                    rfc: $rfc
                    email: $email
                    street: $street
                    city: $city
                    town: $town
                    state: $state
                    country: $country
                    phone: $phone
                    postal_code: $postal_code
                    interior_number: $interior_number
                    exterior_number: $exterior_number
            ) {
                    title
                    regime
                    regime_fiscal
                    name
                    payment_method
                    cfdi
                    rfc
                    email
                    street
                    city
                    town
                    state
                    country
                    phone
                    postal_code
                    interior_number
                    exterior_number
            }
        }
        `,
                    variables: {
                        title,
                        regime,
                        regime_fiscal,
                        name,
                        payment_method,
                        cfdi,
                        rfc,
                        email,
                        street,
                        city,
                        town,
                        state,
                        country,
                        phone,
                        postal_code,
                        interior_number,
                        exterior_number,
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem("token")
                                ? `Bearer ${localStorage.getItem("token")}`
                                : "",
                        },
                    },
                });

                if (data) {
                    handleClearData();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "¡Método de facturación agregado correctamente!",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        window.location.reload();
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "info",
                        title: "Ocurrió un error, por favor intente más tarder.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (error) {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Ocurrió un error, por favor intente más tarder. ",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } else if (id) {
            try {
                const { data, errors, loading } = await client.mutate({
                    mutation: gql`
                    mutation UpdateBilling(
                        $id: ID!
                        $title: String!
                        $regime: String!
                        $regime_fiscal: String!
                        $name: String!
                        $payment_method: String!
                        $cfdi: String!
                        $rfc: String!
                        $email: String!
                        $street: String!
                        $city: String!
                        $town: String!
                        $state: String!
                        $country: String!
                        $phone: String!
                        $postal_code: String!
                        $interior_number: String!
                        $exterior_number: String!
        
                    ) {
                        updateBilling(
                            id: $id
                            title: $title
                            regime: $regime
                            regime_fiscal: $regime_fiscal
                            name: $name
                            payment_method: $payment_method
                            cfdi: $cfdi
                            rfc: $rfc
                            email: $email
                            street: $street
                            city: $city
                            town: $town
                            state: $state
                            country: $country
                            phone: $phone
                            postal_code: $postal_code
                            interior_number: $interior_number
                            exterior_number: $exterior_number
                    ) {
                            id
                            title
                            regime
                            regime_fiscal
                            name
                            payment_method
                            cfdi
                            rfc
                            email
                            street
                            city
                            town
                            state
                            country
                            phone
                            postal_code
                            interior_number
                            exterior_number
                    }
                }
              
          `,
                    variables: {
                        id,
                        title,
                        regime,
                        regime_fiscal,
                        name,
                        payment_method,
                        cfdi,
                        rfc,
                        email,
                        street,
                        city,
                        town,
                        state,
                        country,
                        phone,
                        postal_code,
                        interior_number,
                        exterior_number,
                    },
                    context: {
                        headers: {
                            Authorization: localStorage.getItem("token")
                                ? `Bearer ${localStorage.getItem("token")}`
                                : "",
                        },
                    },
                });

                if (data) {
                    handleClearData();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "¡Método de facturación actualizado correctamente!",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        window.location.reload();
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "info",
                        title: "Ocurrió un error, por favor intente más tarder.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                handleClearData()
            } catch (error) {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Ocurrió un error, por favor intente más tarder. ",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    const handleClearData = async (idAddress) => {
        setId("");
        setTitle("");
        setRegime("");
        setRegime_fiscal("");
        setName("");
        setPayment_method("");
        setCfdi("");
        setRfc("");
        setEmail("");
        setStreet("");
        setCity("");
        setTown("");
        setState("");
        setCountry("");
        setPhone("");
        setPostal_code("");
        setInterior_number("");
        setExterior_number("");
       
    };

    console.log("BILLS==> ",data.myUser.billing)

    const billings = Array.isArray(data.myUser.billing)
        ? data.myUser.billing
        : [];

    return (
        <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">
                        {billings.length === 0 ? (
                            <Row className="justify-content-md-center">
                                <Col className="p-4">
                                    <Container className="container-tables">
                                        <Card border="info" style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Text className="">
                                                    No tienes métodos de facturas registradas :(
                                                    <br />
                                                    Ingresa una para poder comprar
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card
                                            border="info"
                                            style={{ width: "18rem", height: "18rem" }}
                                        >
                                            <Card.Body>
                                                <Card.Text>
                                                    <div className="account-without-data">
                                                        <Button
                                                            variant="primary"
                                                            onClick={() => handleMenu(1)}
                                                        >
                                                            Agregar
                                                        </Button>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Container>
                                </Col>
                            </Row>
                        ) : (
                            <>

                                {billings.map((value, index) => (
                                    <Card border="info" style={{ width: "18rem" }}>
                                        <Card.Header className="card-header">
                                            <b>{value.title}</b>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <b>Regimen:</b> {value.title}
                                                <br />
                                                <b>Nombre:</b> {value.name}
                                                <br />
                                                <b>CFDI:</b> {value.cfdi}
                                                <br />
                                                <b>RFC:</b> {value.rfc}
                                                <br />
                                                <b>Email:</b> {value.email}
                                                <br />
                                                <b>Calle:</b> {value.street}
                                                <br />
                                                <b>Número interior:</b> {value.interior_number}
                                                <br />
                                                <b>Número exterior:</b> {value.exterior_number}
                                                <br />
                                                <b>Municipio:</b> {value.town}
                                                <br />
                                                <b>Ciudad:</b> {value.city}
                                                <br />
                                                <b>Estado:</b> {value.state}
                                                <br />
                                                <b>País</b> {value.country}
                                                <br />
                                                <b>Código Postal</b> {value.postal_code}
                                                <br />
                                                <b>Télefono</b> {value.phone}
                                                <br />

                                            </Card.Text>
                                            <Card.Footer className="text-muted">
                                                <div className="d-grid gap-2">
                                                    <Button
                                                        variant="primary"
                                                        size="md"
                                                        onClick={() => handleMenu(
                                                            2,
                                                            value.id,
                                                            value.title,
                                                            value.regime,
                                                            value.regime_fiscal,
                                                            value.name,
                                                            value.payment_method,
                                                            value.cfdi,
                                                            value.rfc,
                                                            value.email,
                                                            value.street,
                                                            value.city,
                                                            value.town,
                                                            value.state,
                                                            value.country,
                                                            value.phone,
                                                            value.postal_code,
                                                            value.interior_number,
                                                            value.exterior_number,
                                                        )}
                                                    >
                                                        Editar
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        size="md"
                                                        onClick={() => handleDeleteAdress(value.id)}
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                ))}
                                <Card border="info" style={{ width: "18rem", height: "18rem" }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="account-btn-add">
                                                <Button variant="primary" onClick={() => handleMenu(1, "")}>
                                                    Agregar
                                                </Button>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </>
                        )}



                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> {menuTitle}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>Titulo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={title}
                                            placeholder="Agregue un titulo para identificar su dirección"
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de persona
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu tipo de persona fiscal"
                                            defaultValue={regime}
                                            onChange={(e) => setRegime(e.target.value)}
                                        >
                                            <option defaultValue="">Selecciona tu tipo de persona</option>
                                            <option defaultValue="FISICA" value={"FISICA"}>Persona fisica</option>
                                            <option defaultValue="MORAL" value={"MORAL"}>Persona moral</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Razon</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tu nombre o nombre de la empresa"
                                            defaultValue={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>RFC
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="XXXX0000XX0"
                                            defaultValue={rfc}
                                            onChange={(e) => setRfc(e.target.value)}
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Regimen Fiscal</Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Selecciona tu regimen fiscal"
                                            defaultValue={regime_fiscal}
                                            onChange={(e) => setRegime_fiscal(e.target.value)}
                                            disabled={!regime} // Deshabilitar el campo si no se ha seleccionado el tipo de persona
                                        >{
                                        }
                                            {regime.toUpperCase() === "FISICA" && (
                                                <>
                                                    <option value="">Selecciona tu regimen fiscal</option>

                                                    <option value="Sin obligaciones fiscales">Sin obligaciones fiscales</option>
                                                    <option value="Régimen Simplificado de Confianza">Régimen Simplificado de Confianza</option>
                                                    <option value="Sueldos y salarios e ingresos asimilados a salarios">Sueldos y salarios e ingresos asimilados a salarios</option>
                                                    <option value="Régimen de Actividades Empresariales y Profesionales">Régimen de Actividades Empresariales y Profesionales</option>
                                                    <option value="Régimen de Incorporación Fiscal">Régimen de Incorporación Fiscal</option>
                                                    <option value="Enajenación de bienes">Enajenación de bienes</option>
                                                    <option value="Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas">Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                                                    <option value="Régimen de Arrendamiento">Régimen de Arrendamiento</option>
                                                    <option value="Intereses">Intereses</option>
                                                    <option value="Obtención de premios">Obtención de premios</option>
                                                    <option value="Dividendos">Dividendos</option>
                                                    <option value="Demás ingresos">Demás ingresos</option>
                                                </>
                                            )}
                                            {regime.toUpperCase() === "MORAL" && (
                                                <>
                                                    <option value="">Selecciona tu regimen fiscal</option>

                                                    <option value="Régimen General">Régimen General</option>
                                                    <option value="Régimen con fines no lucrativos">Régimen con fines no lucrativos</option>
                                                    <option value="">Demás ingresos</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>CFDI
                                        </Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Uso de CFDI"
                                            defaultValue={cfdi}
                                            onChange={(e) => setCfdi(e.target.value)}
                                            disabled={!regime} // Deshabilitar el campo si no se ha seleccionado el tipo de persona
                                        >
                                            {regime.toUpperCase() === "FISICA" && (
                                                <>
                                                    <option value="">Selecciona el uso del CFDI</option>
                                                    <option value="CFDI">CFDI</option>

                                                    <option value="Pagos">Pagos</option>
                                                    <option value="Sin Efectos Fsicales">Sin Efectos Fiscales</option>
                                                </>
                                            )}
                                            {regime.toUpperCase() === "MORAL" && (
                                                <>
                                                    <option value="">Selecciona el uso del CFDI</option>
                                                    <option value="CFDI">CFDI</option>
                                                </>
                                            )}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Tipo de pago
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tipo de pago"
                                            defaultValue={payment_method}
                                            onChange={(e) => setPayment_method(e.target.value)}
                                        />
                                    </Form.Group>
                                   
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Correo electronico
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="correo@example.com"
                                            defaultValue={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Dirección
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="calle y avenida"
                                            defaultValue={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Número interior
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Número interior"
                                            defaultValue={interior_number}
                                            onChange={(e) => setInterior_number(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Número exterior
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Número exterior"
                                            defaultValue={exterior_number}
                                            onChange={(e) => setExterior_number(e.target.value)}
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Municipio
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Municipio"
                                            defaultValue={town}
                                            onChange={(e) => setTown(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Ciudad
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ciudad"
                                            defaultValue={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Estado
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="estado"
                                            defaultValue={state}
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Codigo Postal
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="00000"
                                            defaultValue={postal_code}
                                            onChange={(e) => setPostal_code(e.target.value)}
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                                        <Form.Label>País
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="pais"
                                            defaultValue={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Telefono
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="0000000000"
                                            defaultValue={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Form.Group>
                                


                                        





                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={handleMenuGuardar}>
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </Col>
            </Row>
        </>
    );
};

export default Address;
