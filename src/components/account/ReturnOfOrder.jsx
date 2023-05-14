import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccountData from './AccountData';


const ReturnOfOrder = () => {

    if(AccountData[0]["order_list"].length == 0){
        return  <>
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
    }else{
     
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
                                <div className='order-item-delivery-date  p-3'>
                                    <h6>
                                        {value.delivery_date}
                                    </h6>
                                </div>

                                <div className='order-item-shipping-details p-2 '>
                                    <strong>{value.status.toUpperCase()}
                                    </strong>
                                </div>
                                {(() => {
                                    if (value.status.toUpperCase() === "EN PROCESO DE DEVOLUCIÓN") {
                                        return <div className='return-order-item-buttons'>
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="md">
                                                    Imprimir etiqueta de devolucion
                                                </Button>
                                                <Button variant="secondary" size="md">
                                                    Cancelar devolucion
                                                </Button>
                                            </div>
                                        </div>
                                    }

                                    if (value.status.toUpperCase() === "DEVUELTO") {
                                        return <div className='return-order-item-buttons'>
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="md">
                                                    Ver detalles
                                                </Button>

                                            </div>
                                        </div>
                                    }


                                })()}


                            </div>
                        </div>
                    </div>
                </section>

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
