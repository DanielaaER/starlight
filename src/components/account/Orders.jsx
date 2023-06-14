import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import AccountData from "./AccountData";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

import client from '../../services/Client';
import { gql, useMutation, query } from '@apollo/client';
import Swal from 'sweetalert2'

import "./style.css";

const Orders = ({ cambiarComponente }) => {


    const [dataOrders, setDataOrders] = useState(
        {
            myOrders:
            {
                total: 0,
                hasMore: false,
                orders: {
                    purchase_date: "",
                    delivery_date: "",
                    quantity: 0,
                    full_name: "",
                    address: [
                        {
                            street: "",
                            city: "",
                            postal_code: "",
                            state: "",
                            country: ""
                        }
                    ],
                    product: {
                        image: "",
                        title: "",
                        short_description: "",
                        price: 0
                    },
                }
            }


        }
    );

    client.query({
        query: gql`
          query{
            myOrders(limit:2, skip: 1){
              total
              hasMore
              orders{
                full_name
                purchase_date
                delivery_date
                quantity
                address{
                  street
                  city
                  postal_code
                  state
                  country
                }
                product{
                  image
                  title
                  short_description
                  price
                }
              }
            }
          }
        `,
        context: {
            headers: {
                Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
            }
        }
    },)
        .then(result => {
            setDataOrders(result.data);
        })

        console.log("DATAORDERS ----- ", dataOrders.myOrders.orders)
        const orders = dataOrders.myOrders.orders ? dataOrders.myOrders.orders : [];
        console.log("ORDERS ----- ", orders)

    if (orders.length == 0) {
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
            {
                Array.prototype.map.call(orders, value => {
                    var purchase_date = new Date(value.purchase_date);
                    var delivery_date = new Date(value.delivery_date);

                    var purchase_date_format_YMD =  `${purchase_date.getDate()}/${purchase_date.getMonth() + 1}/${purchase_date.getFullYear()}`
                    var purchase_date_format_HMS = `${purchase_date.getHours()}:${purchase_date.getMinutes()}:${purchase_date.getSeconds()}`
                    var delivery_date_format_YMD = `${delivery_date.getDate()}/${delivery_date.getMonth() + 1}/${delivery_date.getFullYear()}`
                    var delivery_date_format_HMS = `${delivery_date.getHours()}:${delivery_date.getMinutes()}:${delivery_date.getSeconds()}`

                    console.log("PURCHASE DATE ----- ", purchase_date_format_YMD);
                    console.log("DELIVERY DATE ----- ", delivery_date_format_YMD);
                    
                    console.log(value.purchase_date)
                    console.log(value.delivery_date)
                    return (<>
                        <section className='order-items'>
                            <div className='container d_flex'>
                                <div className='order-details'>
                                    <div className='order-list product d_flex'>
                                        <div className="estatus">
                                        </div>
                                        <div className="estatus">
                                            {
                                                (value.delivery_date != null)?(
                                                    <div>
                                                        <strong>Entregado</strong>
                                                        <br></br>
                                                        <p>
                                                            {delivery_date_format_YMD} {delivery_date_format_HMS}
                                                        </p>
                                                    </div>
                                                ):(
                                                    <div>
                                                        <strong>En camino</strong>
                                                        <br></br>
                                                        <p>
                                                            {purchase_date_format_YMD} {purchase_date_format_HMS}
                                                        </p>
                                                    </div>
                                                )
                                            }
                                          
                                            <Button className="orden" variant="primary" size="md">
                                                Volver a comprar
                                            </Button>


                                            <Button className="orden" variant="primary" size="md" onClick={cambiarComponente}>
                                                Ver detalles
                                            </Button>

                                            {(() => {
                                                if (value.status.toUpperCase() === "ENTREGADO") {
                                                    return <Button className="orden" variant="secondary" size="md">
                                                        Devolver
                                                    </Button>
                                                }


                                            })()}

                                        </div>
                                        <div className="acomodo">
                                            <div className='img-orders'>
                                                <img src={value.product.image} style={{ width: "100%" }} alt='' />
                                            </div>
                                            <div className="detalles">
                                                <div className="informacion">
                                                    <strong> entregado </strong>
                                                    <br></br>
                                                    <div className="detalles-producto">
                                                        <h3><b>{value.product.title}</b></h3>
                                                        <br />
                                                        <h3><strong>${value.product.price}</strong></h3>
                                                    </div>
                                                    <br></br>
                                                    <p>
                                                        {value.product.short_description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="detalles">
                                                <strong>{value.full_name}</strong>
                                                <br></br>
                                                <p>
                                                    {value.address[0].street} - {value.address[0].postal_code} {value.address[0].city}, {value.address[0].state}.{value.address[0].country}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    )
                })
            }
            {/*             {
                orders.map((value, index) => {
                    return (
                        <>
                            <section className='order-items'>
                                <div className='container d_flex'>
                                    <div className='order-details'>
                                        <div className='order-list product d_flex'>
                                            <div className="estatus">
                                            </div>
                                            <div className="estatus">
                                                <h6>
                                                    {value.purchase_date}
                                                </h6>
                                                <Button className="orden" variant="primary" size="md">
                                                    Volver a comprar
                                                </Button>
                                            </div>
                                            <div className="acomodo">
                                                <div className='img-orders'>
                                                    <img src={value.product.image} style={{ width: "100%" }} alt='' />
                                                </div>
                                                <div className="detalles">
                                                    <div className="informacion">
                                                        <strong> entregado </strong>
                                                        <br></br>
                                                        <div className="detalles-producto">
                                                            <h3><b>{value.product.title}</b></h3>
                                                            <br />
                                                            <h3><strong>${value.product.price}</strong></h3>
                                                        </div>
                                                        <br></br>
                                                        <p>
                                                            {value.product.short_description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="detalles">
                                                    <strong>{value.full_name}</strong>
                                                    <br></br>
                                                    <p>
                                                        {value.address[0].street} - {value.address[0].postal_code} {value.address[0].city}, {value.address[0].state}.{value.address[0].country}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                })
            }  */}

        </>
    )
}

export default Orders
