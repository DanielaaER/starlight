import React from 'react';
import './tracking.css'; // Importar archivo CSS de estilos

import ReturnReport from '../account/ReturnReport';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

import Button from 'react-bootstrap/Button';

import AccountData from '../account/AccountData';


const TrackingComponent = () => {
  const productData = {
    photo: 'https://cdn1.coppel.com/images/catalog/pm/2963653-1.jpg',
    name: 'Nombre del producto',
    color: 'Rojo',
    size: 'M',
    price: '$99.99',
    date: '01/06/2023',
    status: 'En camino',
    timelineData: [
      { id: 1, title: 'Devolución iniciada' },
      { id: 2, title: 'Devolución en curso' },
      { id: 3, title: 'Producto recibido' },
      { id: 4, title: 'Reembolsado' }
    ],
    refundSummary: 'El reembolso se realizará en el método de pago original en un plazo de 5 a 7 días laborales desde que recibamos el producto.',
    total: '$99.99'
  };
  const productDataa = {
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
  const addressData = {
    name: "Facturacion principal",
    country: "Mexico",
    telephone: "234 456 78 34",
    address: "Calle 1 Avenida ",
    city: "Cordoba",
    estate: "Veracruz",
    cp: "090909"
  };

  const clienteData = {
    id: 1,
    name: "direccion principal",
    country: "Mexico",
    telephone: "234 456 78 34",
    address: "Calle 1 Avenida ",
    city: "Cordoba",
    estate: "Veracruz",
    cp: "090909"
  };

  const currentStep = 3; // Etapa actual de seguimiento (puedes cambiarla según tus necesidades)

  return (
    <div className="tracking-container">
      <div className="product-info">
        <div className="product-image">
          <img src={productData.photo} alt="Product" />
        </div>
        <div className="product-detail">
          <div className="product-name">{productData.name}</div>
          <div className="product-color">{productData.color}</div>
          <div className="product-size">{productData.size}</div>
        </div>
        <div className="product-price">{productData.price}</div>
        <div className="product-date">{productData.date}</div>
        <div className="product-status">{productData.status}</div>
        <div className='product-buttons'>
          <div className="estatus">

            {(() => {

              <PDFDownloadLink
                document={

                  <ReturnReport product={productDataa} shippingAddress={addressData} cliente={AccountData[0].name} />

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






            })()}
          </div>


        </div>
      </div>

      <div className="product-info">
        <div className="refund-summary">
          <div className="timeline">
            {productData.timelineData.map(step => (
              <div key={step.id} className="timeline-item">
                <div className={`timeline-dot ${step.id <= currentStep ? 'completed' : ''}`} />
                <div className="timeline-title">{step.title}</div>
              </div>
            ))}
          </div>
          {/* <div className="timeline-description">
            <div className="timeline-description-item">Gestión de la devolución</div>
            <div className="timeline-description-item">Ver detalles del pedido</div>
            <div className="timeline-description-item">Escribir reseña del producto</div>
            <button className="continue-shopping-button">Seguir comprando</button>
          </div> */}
        </div>
        <div className="refund-summary">

          <div className="refund-details">
            <div className="refund-details-item">
              <div className="refund-details-title">Gestión de la devolución</div>
            </div>
            <div className="refund-details-item">
              <div className="refund-details-description">Ver detalles del pedido.</div>
            </div>
            <div className="refund-details-item">
              <div className="refund-details-description">Escribir una reseña del producto.</div>
            </div>
          </div>
          <button className="continue-shopping-button" >Seguir comprando</button>
        </div>
        <div className="refund-summary">
          <div className="refund-details-title">Resumen del reembolso</div>
          <div className="refund-summary-text">El reembolso se realizará en el método de pago original en un plazo de 5 a 7 días laborales desde que recibamos el producto.</div>
          <div className="total-label">Total:</div>
          <div className="total-amount">{productData.total}</div>
        </div>
      </div>
    </div>
  );
};

export default TrackingComponent;
