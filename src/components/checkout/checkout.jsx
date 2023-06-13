import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const CheckOut = () => {
    const navigate = useNavigate();


    const handleClickSelectPaymentMethod = () => {
        navigate("/payment-method");
        window.location.reload();
    };
    const handleClickCancel = () => {
        navigate("/Cart");
        window.location.reload();
    };

    const address = [
        {
            id: 1,
            name: "Casa",
            description: "Calle 1, #1-1",
            city: "Bogotá",
            country: "Colombia",
            phone: "3000000000",
            selected: true
        }
    ]


    const payment_method = [
        {
            id: 1,
            name: "Rafael Contreras Sanchez",
            card: "Visa que termina en 3810",
            date_expire: "10/24",
            selected: "on"
        }
    ]
    const products_cart = [
        {
            id: 1,
            name: "Producto 1",
            description: "Descripción del producto",
            price: 100.00,
            image: "https://picsum.photos/100/100",
            quantity: 1
        }
    ]


    return (
        <>
            <div className="content">
                <div className="cart ">
                    <div className="p-3 shadow">

                        <Container>
                            <Row>

                                <Col xxl={8}>
                                    <div className="prooducto-content ">
                                        <div className="shadow">
                                            <Container>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xx={12} xxl={12} className="text-data-payment-method">
                                                        <strong> 1.- Dirección de envio</strong>

                                                    </Col >
                                                </Row>
                                                <Form>
                                                    {address.map((value, index) => {
                                                        return (
                                                            <>

                                                                <div>
                                                                    <div className="producto p-2 shadow ">
                                                                        <Row>
                                                                            <Col xs={1} sm={1} md={1} lg={1} xl={1} xx={1} xxl={1} >
                                                                                <p></p>
                                                                            </Col>
                                                                            <Col xs={7} sm={5} md={4} lg={4} xl={4} xx={4} xxl={4} >
                                                                                <strong>{value.name}</strong>
                                                                                <p>{value.description}, {value.city}.{value.country}
                                                                                    <br />
                                                                                    {value.phone}</p>
                                                                            </Col>
                                                                            <Col xs={5} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3}>

                                                                            </Col>

                                                                        </Row>
                                                                    </div>
                                                                    <br />
                                                                </div>

                                                            </>
                                                        )
                                                    })}
                                                </Form>
                                            </Container>
                                        </div>
                                        <hr />
                                        <div className="shadow">
                                            <Container>
                                                <Row>
                                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xx={1} xxl={1} >
                                                        <p></p>
                                                    </Col>
                                                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xx={4} xxl={4} className="text-data-payment-method">
                                                        <strong>2.-Método de pago</strong>

                                                    </Col >
                                                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xx={4} xxl={4} className="text-data-payment-method">
                                                        <strong>Nombre de la tarjeta</strong>

                                                    </Col >
                                                    <Col xs={3} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3} className="text-data-payment-method">
                                                        <strong>Vencimiento</strong>

                                                    </Col >
                                                </Row>
                                                <Form>
                                                    {payment_method.map((value, index) => {
                                                        return (
                                                            <>

                                                                <div>
                                                                    <div className="producto p-2 shadow ">
                                                                        <Row>
                                                                            <Col xs={1} sm={1} md={1} lg={1} xl={1} xx={1} xxl={1} >
                                                                                <p></p>
                                                                            </Col>
                                                                            <Col xs={7} sm={5} md={4} lg={4} xl={4} xx={4} xxl={4} >
                                                                                <p><i class="fa-solid fa-credit-card"></i> {value.card}</p>
                                                                            </Col>
                                                                            <Col xs={5} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3}>
                                                                                <p> {value.name}</p>
                                                                            </Col>
                                                                            <Col xs={5} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3}>
                                                                                <p> {value.date_expire}</p>
                                                                            </Col>

                                                                        </Row>
                                                                    </div>
                                                                    <br />
                                                                </div>

                                                            </>
                                                        )
                                                    })}
                                                    <div>

                                                    </div>

                                                </Form>
                                            </Container>
                                        </div>


                                        <hr />
                                        <div className="shadow">
                                            <Container>
                                                <Row>
                                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xx={6} xxl={6} className="text-data-products-cart">
                                                        <strong>Producto</strong>

                                                    </Col >

                                                    <Col xs={3} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3} className="text-data-products-cart">
                                                        <div className="text-data-products-cart">
                                                            <strong>Precio</strong>
                                                        </div>
                                                    </Col>
                                                    <Col xs={3} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3} className="text-data-products-cart">
                                                        <strong>Cantidad</strong>
                                                    </Col>
                                                </Row>
                                                <Form>
                                                    {products_cart.map((value, index) => {
                                                        return (
                                                            <>

                                                                <div>
                                                                    <div className="producto p-2 shadow ">
                                                                        <Row>
                                                                            <Col xs={1} sm={1} md={1} lg={1} xl={1} xx={1} xxl={1}>
                                                                            <strong></strong>
                                                                            </Col>
                                                                            <Col xs={7} sm={5} md={4} lg={4} xl={4} xx={4} xxl={4} >
                                                                                <img src={value.image} width={100} height={100} alt="producto" />
                                                                            </Col>
                                                                            <Col xs={5} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3}>
                                                                                <h5>{value.name}</h5>
                                                                                <p>{value.description}</p>

                                                                            </Col>
                                                                            <Col xs={5} sm={1} md={2} lg={2} xl={2} xx={2} xxl={2}>
                                                                                <strong>{value.price}</strong>
                                                                            </Col>
                                                                            <Col xs={5} sm={2} md={2} lg={2} xl={2} xx={2} xxl={2}>
                                                                            <strong>{value.quantity}</strong>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                    <br />
                                                                </div>

                                                            </>
                                                        )
                                                    })}

                                                    <Button variant="outline-danger" size="lg" onClick={handleClickCancel}>
                                                        Cancelar Compra
                                                    </Button>
                                                </Form>
                                            </Container>
                                        </div>


                                    </div>
                                </Col>




                                <Col xxl={4} >
                                    <div className="total-product-content card-total-products">
                                        <div className="total-product shadow p-2">
                                            <Container>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xx={12} xxl={12} className="text-data-products-cart">
                                                        <strong>Total del carrito</strong>
                                                    </Col >
                                                </Row>
                                                <Row>
                                                    <Col xs={8} sm={6} md={3} lg={3} xl={6} xxl={6}>
                                                        <p>Productos: 2</p>
                                                    </Col>
                                                    <Col xs={8} sm={6} md={3} lg={3} xl={6} xxl={6}>
                                                        <p>$0.00</p>
                                                    </Col>
                                                    <Col xs={8} sm={6} md={3} lg={3} xl={6} xxl={6}>
                                                        <p>Envío:</p>
                                                    </Col>
                                                    <Col xs={8} sm={6} md={3} lg={3} xl={6} xxl={6}>
                                                        <p>Gratis</p>
                                                    </Col>
                                                    <hr />
                                                    <Col xs={8} sm={6} md={3} lg={3} xl={6} xxl={6}>
                                                        <h4>Total:</h4>
                                                    </Col>
                                                    <Col xs={8} sm={6} md={3} lg={3} xl={6} xxl={6}>
                                                        <h4>$0.00</h4>
                                                    </Col>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className="d-grid gap-2">
                                                            <Button variant="primary" size="lg" onClick={handleClickSelectPaymentMethod}>
                                                                Continuar compra
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </Container>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CheckOut

