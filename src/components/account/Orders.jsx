import React from "react"
import Button from 'react-bootstrap/Button';
import AccountData from "./AccountData";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

import "./style.css";

const Orders = () => {

    if (AccountData[0]["order_list"].length == 0) {
        return <>
            <Row className="justify-content-md-center">
                <Col className="p-4">
                    <Container className="container-tables">
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    No has realizado ningun pedido :(
                                    <br />
                                    Haz clic para poder comprar uno
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{ width: '18rem', height: '18rem' }} >
                            <Card.Body>
                                <Card.Text>
                                    <div className="account-without-data">
                                        <Button variant="primary">Continua comprando</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </>
    }

    return (
        <>
            {AccountData[0]["order_list"].map((value, index) => {
                return (
                    <>
                        <section className='order-items'>
                            <div className='container d_flex'>
                                <div className='order-details'>
                                    <div className='order-list product d_flex'>
                                        <div className='img-orders'>
                                            <img src={value.url_img} style={{ width: "10em" }} alt='' />
                                        </div>
                                        
                                        <div className='order-details p-3'>
                                            <h3><b>{value.name}</b></h3>
                                            <p>
                                                {value.description}
                                            </p>
                                        </div>

                                        <div className='order-item-price p-3'>
                                            <strong>${value.price}</strong>
                                        </div>
                                        <div className='order-item-shipping-details p-3'>
                                            <strong>{AccountData[0].name}</strong>
                                            <br />
                                            <br />
                                            <p>
                                                {AccountData[0]['delivery_address'][value.delivery_address_id].address}

                                            </p>
                                        </div>
                                        <div className='order-item-shipping-details p-3'>
                                            <strong>{value.status.toUpperCase()}</strong>
                                        </div>
                                        <div className='order-item-delivery-date  p-3'>
                                            <h6>
                                                {value.delivery_date}
                                            </h6>
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="md">
                                                    Volver a comprar
                                                </Button>
                                                <Button variant="secondary" size="md">
                                                    Devolver
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </>
                )
            })}


        </>
    )
}

export default Orders
