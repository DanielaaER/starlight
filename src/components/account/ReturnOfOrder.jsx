import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccountData from './AccountData';

import { PDFViewer } from '@react-pdf/renderer';
import ReturnReport from './ReturnReport';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

import TrackingComponent from '../tracking/tracking'

const ReturnOfOrder = ({ cambiarComponente }) => {




    // const address = {
    //     name: "Facturacion principal",
    //     country: "Mexico",
    //     telephone: "234 456 78 34",
    //     address: "Calle 1 Avenida ",
    //     city: "Cordoba",
    //     estate: "Veracruz",
    //     cp: "090909"
    // }

    // const handlePrintLabel = (producto, address, client) => {
    //     const report = <ReturnReport product={producto} shippingAddress={address} cliente={client} />
    //     const blob = new Blob([report], { type: 'application/pdf' });
    //     const url = URL.createObjectURL(blob);
    //     window.open(url);
    // };



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
    } else {

        return (
            <>
                {AccountData[0]["order_list"].map((value, index) => {

                    if (value.status.toUpperCase() === "EN PROCESO DE DEVOLUCIÓN" || value.status.toUpperCase() === "DEVUELTO") {


                        return (
                            <>
                                <section className='order-items'>
                                    <div className='container d_flex'>
                                        <div className='order-details'>
                                            <div className='order-list product d_flex'>



                                                <div className="acomodo">

                                                    <div className='img-orders'>
                                                        <img src={value.url_img} style={{ width: "100%" }} alt='' />
                                                    </div>

                                                    <div className="detalles">
                                                        <div className="informacion">
                                                            <strong>{value.status.toUpperCase()}</strong>
                                                            <br></br>
                                                            <div className="detalles-producto">

                                                                <h3><b>{value.name}</b></h3>
                                                                <h3><strong>${value.price}</strong></h3>
                                                                <br></br>
                                                            </div>

                                                            <div className="detalles-producto">

                                                                <h3>Cantidad: </h3>
                                                                <h6>
                                                                    {value.quantity}
                                                                </h6>

                                                            </div>
                                                            <div className="detalles-producto">

                                                                <h6>Total a pagar:</h6>

                                                                <h6>
                                                                    ${value.quantity * value.price}
                                                                </h6>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="detalles">
                                                        <strong>{AccountData[0].name}</strong>
                                                        <br></br>

                                                        <p>
                                                            {AccountData[0]['delivery_address'][value.delivery_address_id - 1].address}

                                                        </p>
                                                        <h6>Entrega: </h6>
                                                        <h3>
                                                            {value.delivery_date}
                                                        </h3>

                                                    </div>


                                                </div>

                                                <p>
                                                    {value.description}
                                                </p>


                                                <div className="estatus">

                                                    {(() => {
                                                        if (value.status.toUpperCase() === "EN PROCESO DE DEVOLUCIÓN") {
                                                            return <div className='return-order-item-buttons'>
                                                                <div className="d-grid gap-2">

                                                                    <PDFDownloadLink
                                                                        document={

                                                                            <ReturnReport product={AccountData[0]["order_list"][value.id - 1]} shippingAddress={AccountData[0]['delivery_address'][value.delivery_address_id - 1]} cliente={AccountData[0].name} />

                                                                        }
                                                                        fileName="EtiquetaDevolucion.pdf"
                                                                    >
                                                                        {({ blob, url, loading, error }) =>
                                                                            loading ?

                                                                                <div className="d-grid gap-2">
                                                                                    <Button
                                                                                        variant="primary"
                                                                                        size="md"

                                                                                    >
                                                                                        Cargando etiqueta
                                                                                    </Button>
                                                                                </div> :
                                                                                <div className="d-grid gap-2">
                                                                                    <Button
                                                                                        variant="primary"
                                                                                        size="md"

                                                                                    >
                                                                                        Imprimir etiqueta de devolución
                                                                                    </Button>
                                                                                </div>
                                                                        }
                                                                    </PDFDownloadLink>

                                                                </div>
                                                            </div>
                                                        }



                                                    })()}
                                                    <div>
                                                        <p></p>
                                                    </div>
                                                    <div className='return-order-item-buttons'>
                                                        <div className="d-grid gap-2">
                                                            <Button variant="primary" size="md" onClick={cambiarComponente}>
                                                                Ver detalles
                                                            </Button>

                                                        </div>
                                                    </div>
                                                   
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </section >

                            </>
                        )
                    }
                }
                )}

            </>
        )
    }
}

export default ReturnOfOrder
