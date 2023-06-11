import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

import Modal from "react-bootstrap/Modal";
import client from "../../services/Client";
import { gql, useMutation, query } from "@apollo/client";
import Swal from "sweetalert2";


function Products() {
  // MENU CONTROL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [menuTitle, setMenuTitle] = useState("");
  const [id, setId] = useState("");

  const [title, setTitle] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const [size, setSize] = useState("");
  const [sku, setSKU] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);
  const [isApproved, setIsApproved] = useState(true);
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");


  const handleMenu = async (option) => {
    /* handleClearData(); */
    if (option === 1) {
      setId("");
      setMenuTitle("AGREGAR NUEVO PRODUCTO");
      handleShow();
    }

    if (option === 2) {
      setMenuTitle("EDITAR PRODUCTO");
      handleShow();
    }
  };

  let brand = client
    .query({
      query: gql`
    query{
      findBrandByName(
        brand: ""
      ){
        brand
      }
    }
`,
    })


  return (
    <>
      <div className='container p-5 shadow'>

        <Container>
          <Row>
            <Col xxl={9}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="¿Qué desea buscar?"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="secondary" id="button-addon2">
                  Buscar
                </Button>
              </InputGroup>
            </Col>

            <Col xxl={3}>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={() => handleMenu(1)}>
                  Añadir producto
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <br />
        <br />

        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>



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
                  placeholder="Agregue el titulo de su producto"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  autoFocus
                />
              </Form.Group>


              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Imagen del producto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL de la imagen"
                  required
                  defaultValue={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Descripción Corta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción corta (No mayor a 200 caracteres)"
                  required
                  defaultValue={short_description}
                  maxLength={200}
                  onChange={(e) => setShortDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Descrpción</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="Descripción detallada del producto"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="color"
                  placeholder="Número exterior"
                  defaultValue={color}
                  onChange={(e) => setColor(e.target.value)}
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tamaño (incluir unidades, ejemplo: 30mm x 700 mm)"
                  required
                  defaultValue={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>SKU</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SKU"
                  required
                  defaultValue={sku}
                  onChange={(e) => setSKU(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Precio"
                  required
                  defaultValue={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Disponibilidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Disponibilidad de unidades"
                  required
                  min={1}
                  max={1000}
                  defaultValue={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Categoria"
                  required
                  defaultValue={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Marca"
                  required
                  defaultValue={brandId}
                  onChange={(e) => setBrandId(e.target.value)}
                />
              </Form.Group>
            </Form>


          </Modal.Body>
          <Modal.Footer>
            {/*  <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleMenuGuardar}>
              Guardar
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>



    </>
  );
}

export default Products;