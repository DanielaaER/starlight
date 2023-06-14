import React, { useState } from 'react';
import './finishOrder.css';

import { PDFViewer } from '@react-pdf/renderer';
import ReturnReport from './ReturnReport';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const ProductoDetails = () => {


    // Datos de ejemplo en formato JSON
    const producto = {
        nombre: "Xbox",
        precio: "$99.99",
        calificacion: 4.5,
        totalReseñas: 25,
        disponibilidad: true,
        cantidadEnStock: 10,
        coloresDisponibles: ["red", "blue", "#4FA65F"],
        tamañosDisponibles: ["S", "M", "L"],
        mainImage: "https://cdn1.coppel.com/images/catalog/pm/2963653-1.jpg",
        additionalImages: [
            "https://cdn1.coppel.com/images/catalog/pm/2963653-1.jpg",
            "https://cdn1.coppel.com/images/catalog/pm/2963393-1.jpg",
            "https://cdn1.coppel.com/images/catalog/pm/2254093-1.jpg"
        ]
    };
    const account = {
        id: 1,
        user_name: "leo-oh",
        name: "Leonardo Daniel Montiel Martinez",
        email: "leonardo.m2349@gmail.com"
    };
    const addres = {

        id: 1,
        name: "direccion principal",
        country: "Mexico",
        telephone: "234 456 78 34",
        address: "Calle 1 Avenida ",
        city: "Cordoba",
        estate: "Veracruz",
        cp: "090909"
    };
    const product = {
        id: 1,
        name: "Xbox control",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
        price: 1290.0,
        quantity: 1,
        url_img: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088984261392l.jpg",
        delivery_address_id: 1,
        date_of_purchase: "10/04/2023 15:30",
        delivery_date: "11/04/2023 12:30",
        status: "en proceso de devolución"

    };



    return (
        <product>
            <br></br>
            <div className="container">
                <div className="product-finish">
                    <div className="product-infor">
                        <div className="product-name">
                            Pedido realizado
                        </div>
                        <div className="product-price">
                            Se enviara la confirmación a tu correo
                            Enviado a <b>Rafael Contreras Sanchez</b> Av 23, Calle 14, Num Ext 24 , Cordoba, Veracruz
                        </div>


                        <div className="product-price">

                            Llegando el <b>Jueves 15 de Junio 2023</b>
                            fecha de entrega estimada
                        </div>


                        <div className="product-detalles">
                            <div className="product-but">

                                <button className="add-to-cart-button">Seguir comprando</button>
                            </div>
                            {/* <PDFViewer>
                                <ReturnReport product={product} shippingAddress={addres} cliente={account.name} />
                            </PDFViewer> */}

                            <PDFDownloadLink
                                document={

                                    <ReturnReport product={product} shippingAddress={addres} cliente={account.name} />

                                }
                                fileName="EtiquetaCompra.pdf"
                            >
                                {({ blob, url, loading, error }) =>
                                    loading ?

                                        <div className="product-but">

                                            <button className="add-to-cart-button">Cargando etiqueta</button>
                                        </div> :
                                        <div className="product-but">

                                            <button className="add-to-cart-button">Imprimir comprobante</button>
                                        </div>
                                }
                            </PDFDownloadLink>
                        </div>

                    </div>


                    <div className="main-image">
                        <img src={producto.mainImage} alt="Imagen principal del producto" />
                    </div>

                </div >




            </div >


        </product >

    );
};

export default ProductoDetails;