import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css';

const Cart = () => {

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
                    <div className="producto p-2 shadow ">
                      <Container>
                        <Row>
                          <Col xs={8} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            <img src="https://picsum.photos/200/300" width={60} height={60} alt="producto" />
                          </Col>
                          <Col xs={4} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            <Row xs={1} md={1}>
                              <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br /></Col>
                              <Col><Button variant="outline-danger">Elminar</Button></Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            <label for="tentacles">Unidades:</label>
                            <input type="number" id="tentacles" defaultValue={1} name="tentacles" min="1" max="100"></input>
                          </Col>
                          <Col xs={4} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            $0.00
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>




                <Col xxl={8}>
                <br />
          <br />
                  <div className="prooducto-content ">
                    <div className="producto shadow p-2">
                      <Container>
                        <Row>
                          <Col xs={8} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            <img src="https://picsum.photos/200/300" width={60} height={60} alt="producto" />
                          </Col>
                          <Col xs={4} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            <Row xs={1} md={1}>
                              <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br /></Col>
                              <Col><Button variant="outline-danger">Elminar</Button></Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            <label for="tentacles">Unidades:</label>
                            <input type="number" id="tentacles" defaultValue={1} name="tentacles" min="1" max="100"></input>
                          </Col>
                          <Col xs={4} sm={6} md={3} lg={3} xl={3} xxl={3}>
                            $0.00
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>




                <Col xxl={4} >
                  <div className="total-product-content card-total-products">
                    <div className="total-product shadow p-2">
                      <Container>
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
                              <Button variant="primary" size="lg">
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

