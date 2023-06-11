import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useNavigate } from "react-router-dom";
import './products.css'

import Pagination from 'react-bootstrap/Pagination';

function Products() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickProduct = () => {
        navigate("/detail-product");
        window.location.reload();
    };

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Fashion",
            routePage: "",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Electronic",
        },
        {
            cateImg: "./images/category/cat3.png",
            cateName: "Cars",
        },
        {
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Garden",
        },
        {
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts",
        },
        {
            cateImg: "./images/category/cat6.png",
            cateName: "Music",
        },
        {
            cateImg: "./images/category/cat7.png",
            cateName: "Health & Beauty",
        },
        {
            cateImg: "./images/category/cat8.png",
            cateName: "Pets",
        },
        {
            cateImg: "./images/category/cat9.png",
            cateName: "Baby Toys",
        },
        {
            cateImg: "./images/category/cat10.png",
            cateName: "Groceries",
        },
        {
            cateImg: "./images/category/cat11.png",
            cateName: "Books",
        },
    ]

    const disponibilidad = [
        {
            disponibilidad: "En stock"
        },
        {
            disponibilidad: "Agotado"
        },

    ]

    const tipo_de_producto = [
        {
            tipo_de_producto: "Electronico"
        },
        {
            tipo_de_producto: "Domestico"
        }
    ]

    const marcas = [
        {
            marcas: "Samsung"
        },
        {
            marcas: "LG"
        },
        {
            marcas: "Sony"
        },
    ]

    const Products = [
        {
            img: "https://www.selectsound.com.mx/wp-content/uploads/2022/09/SG-TWS1-2.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: true,
        },
        {
            img: "https://obs.mistoremx.com/images/202209/goods_img/973_P_1663906105032.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://m.media-amazon.com/images/I/71xbHjeWoVL._AC_UF1000,1000_QL80_.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/889842651355_2.jpg?scale=500&qlty=75",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: true,
        },
        {
            img: "https://www.selectsound.com.mx/wp-content/uploads/2022/09/SG-TWS1-2.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://obs.mistoremx.com/images/202209/goods_img/973_P_1663906105032.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://m.media-amazon.com/images/I/71xbHjeWoVL._AC_UF1000,1000_QL80_.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: true,
        },
        {
            img: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/889842651355_2.jpg?scale=500&qlty=75",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: true,
        },
        {
            img: "https://www.selectsound.com.mx/wp-content/uploads/2022/09/SG-TWS1-2.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://obs.mistoremx.com/images/202209/goods_img/973_P_1663906105032.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://m.media-amazon.com/images/I/71xbHjeWoVL._AC_UF1000,1000_QL80_.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/889842651355_2.jpg?scale=500&qlty=75",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: true,
        },
        {
            img: "https://www.selectsound.com.mx/wp-content/uploads/2022/09/SG-TWS1-2.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://obs.mistoremx.com/images/202209/goods_img/973_P_1663906105032.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://m.media-amazon.com/images/I/71xbHjeWoVL._AC_UF1000,1000_QL80_.jpg",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },
        {
            img: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/889842651355_2.jpg?scale=500&qlty=75",
            name: "Product Name",
            price: "100",
            discount: "50",
            isFavorite: false,
        },

    ]
    return (
        <>


            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Todas las categorias</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col xs></Col>
                <Col xs={{ order: 12 }}></Col>
                <Col xs={{ order: 1 }}> <Button variant="primary filter-btn" size='lg' onClick={handleShow}>
                    Filtrar
                </Button></Col>
            </Row>

            <br /><br />

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtros</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <strong>Categorias</strong> <Button variant="link" className='clear-btn'>Restablecer</Button>
                        <br />
                        <br />
                        <div key={`inline-checkbox`} className="mb-3">
                            {data.map((value, index) => {
                                return (
                                    <>
                                        <Form.Check
                                            inline
                                            label={value.cateName}
                                            name={`grupo-${index}`}
                                            type="checkbox"
                                            id={`inline-checkboz-${index}`}
                                        />
                                        <br />
                                    </>

                                )
                            })}
                        </div>
                        <hr />

                        <strong>Disponibilidad</strong> <Button variant="link" className='clear-btn'>Restablecer</Button>
                        <br />
                        <br />
                        <div key={`inline-checkbox`} className="mb-3">
                            {disponibilidad.map((value, index) => {
                                return (
                                    <>
                                        <Form.Check
                                            inline
                                            label={value.disponibilidad}
                                            name={`grupo-${index}`}
                                            type="checkbox"
                                            id={`inline-checkboz-${index}`}
                                        />
                                        <br />
                                    </>

                                )
                            })}
                        </div>
                        <hr />

                        <strong>Tipo de producto</strong> <Button variant="link" className='clear-btn'>Restablecer</Button>
                        <br />
                        <br />
                        <div key={`inline-checkbox`} className="mb-3">
                            {tipo_de_producto.map((value, index) => {
                                return (
                                    <>
                                        <Form.Check
                                            inline
                                            label={value.tipo_de_producto}
                                            name={`grupo-${index}`}
                                            type="checkbox"
                                            id={`inline-checkboz-${index}`}
                                        />
                                        <br />
                                    </>

                                )
                            })}
                        </div>
                        <hr />

                        <strong>Marca</strong> <Button variant="link" className='clear-btn'>Restablecer</Button>
                        <br />
                        <br />
                        <div key={`inline-checkbox`} className="mb-3">
                            {marcas.map((value, index) => {
                                return (
                                    <>
                                        <Form.Check
                                            inline
                                            label={value.marcas}
                                            name={`grupo-${index}`}
                                            type="checkbox"
                                            id={`inline-checkboz-${index}`}
                                        />
                                        <br />
                                    </>

                                )
                            })}
                        </div>

                    </Form>
                </Offcanvas.Body>
            </Offcanvas>


            <Container>
                <Row>
                    {Products.map((value, index) => {
                        return (
                            <>
                                <Col xxl={3} xl={3} lg={4} md={4} sm={6} xs={12} >
                                    <div className='container-products shadow'>
                                        <div className="p-5">
                                            {
                                                value.isFavorite ?
                                                    <i class="fa-solid fa-heart fa-xl favorites-icon-products" onClick={() => { setIsFavorite(false) }}></i>
                                                    :
                                                    <i className="fa-regular fa-heart fa-xl favorites-icon-products" onClick={() => { setIsFavorite(true) }}></i>
                                            }
                                            <br />
                                            <div onClick={handleClickProduct}>
                                                <img src={value.img} alt="imagen" width={160} height={180} />
                                                <br /><br />
                                                <strong>{value.name}</strong>
                                                <p>${value.price}</p>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
                <br /> <br />
                <div className='pagination-products'>
                    <Pagination size='lg'>{items}</Pagination>
                </div>
            </Container>


        </>
    );
}

export default Products;