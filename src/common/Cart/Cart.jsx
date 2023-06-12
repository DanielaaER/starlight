import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleClickSelectPaymentMethod = () => {
    navigate("/payment-method");
    window.location.reload();
};

  const products_cart = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto",
      price: 100.00,
      image: "https://picsum.photos/100/100",
      quantity: 1
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto",
      price: 100.00,
      image: "https://picsum.photos/100/100",
      quantity: 1
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción del producto",
      price: 100.00,
      image: "https://picsum.photos/100/100",
      quantity: 1
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Descripción del producto",
      price: 100.00,
      image: "https://picsum.photos/100/100",
      quantity: 1
    },
  ]

  return (
    <>
      <div className="content">
        <div className="cart ">
          <div className="p-3 shadow">

            <h4>Productos ⚡<b><i>Express</i></b></h4>
            <hr />


            <Container>
              <Row>

                <Col xxl={8}>
                  <div className="prooducto-content ">
                    <div className="">
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
                                      <Col xs={7} sm={5} md={4} lg={4} xl={4} xx={4} xxl={4} >
                                        <Form.Check
                                          inline
                                          name={`grupo-1`}
                                          type="checkbox"
                                          id={`inline-checkboz-1`}
                                        />
                                        <img src={value.image} width={100} height={100} alt="producto" />
                                      </Col>
                                      <Col xs={5} sm={3} md={3} lg={3} xl={3} xx={3} xxl={3}>
                                        <h5>{value.name}</h5>
                                        <p>{value.description}</p>

                                      </Col>
                                      <Col xs={5} sm={1} md={2} lg={2} xl={2} xx={2} xxl={2}>
                                        <strong>{value.description}</strong>
                                      </Col>
                                      <Col xs={5} sm={2} md={2} lg={2} xl={2} xx={2} xxl={2}>
                                        <input
                                          type="text"
                                          id="contador"
                                          class="form-control"
                                          value={value.quantity}
                                          min="1"
                                        />
                                      </Col>
                                      <Col xs={2} sm={1} md={1} lg={1} xl={1} xx={1} xxl={1}>
                                        <Button variant="light"><i class="fa-regular fa-circle-xmark"></i></Button>
                                      </Col>
                                    </Row>
                                  </div>
                                  <br />
                                </div>

                              </>
                            )
                          })}

                          <Button variant="primary" size="lg" disabled>
                            Continuar comprando
                          </Button>{' '}
                          <Button variant="outline-danger" size="lg" disabled>
                            Limpiar carrito
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

export default Cart

