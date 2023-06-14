import React, { useState } from 'react';
import './product.css';

const ProductoDetails = () => {
  const [cantidad, setCantidad] = useState(1);
  const [reseña, setReseña] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);
  const [mostrarEscribirReseña, setMostrarEscribirReseña] = useState(false);

  const handleMostrarDescripcion = () => {
    setMostrarDescripcion(true);
    setMostrarReseñas(false);
  };

  const handleMostrarReseñas = () => {
    setMostrarDescripcion(false);
    setMostrarReseñas(true);
  };

  const handleIncrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleCalificacion = (calificacionSeleccionada) => {
    setCalificacion(calificacionSeleccionada);
  };

  const handleEscribirReseña = () => {
    setMostrarReseñas(false);
    setMostrarEscribirReseña(true);
  };

  const handleEnviarReseña = () => {
    // Lógica para enviar la reseña
    // ...
    // Restablecer el estado después de enviar la reseña
    setReseña('');
    setCalificacion(0);
    setMostrarEscribirReseña(false);
    setMostrarReseñas(true);
  };

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

  const [mainImage, setMainImage] = useState(producto.mainImage);
  const [selectedColor, setSelectedColor] = useState(producto.coloresDisponibles[0]);


  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // Filtrar las imágenes adicionales basadas en el color seleccionado
  const filteredImages = producto.additionalImages.filter(
    (image) => image.includes(selectedColor)
  );

  const reviews = [
    {
      rating: 5,
      text: "¡Excelente producto! Estoy muy satisfecho con mi compra."
    },
    {
      rating: 4,
      text: "Buena calidad y precio. Lo recomendaría a otros."
    }
  ];

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const renderEstrellas = (calificacion) => {
    const estrellas = [];

    for (let i = 1; i <= 5; i++) {
      const clase = i <= calificacion ? 'star selected' : 'star';
      estrellas.push(<span className={clase}></span>);
    }

    return estrellas;
  };


  const [tamañoSeleccionado, setTamañoSeleccionado] = useState('');

  const handleTamañoSeleccionado = (tamaño) => {
    setTamañoSeleccionado(tamaño);
  };


  return (
    <product>    <div className="container">
      <div className="product-details">
        <div className="product-images">
          <div className="main-image">
            <img src={mainImage} alt="Imagen principal del producto" />
          </div>
          <div className="additional-images-container">
            <div className="additional-images">
              {producto.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagen adicional ${index + 1} del producto`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-infor">
          <div className="product-name">
            {producto.nombre}
          </div>
          <div className="product-price">
            {producto.precio}
          </div>
          <div className="product-rating">
            <div className="stars">
              {renderEstrellas(producto.calificacion)}
            </div>
            <div className="reviews-count">
              {producto.totalReseñas} Reseñas
            </div>
          </div>
          <div className="product-availability">
            Disponibilidad: <span className="in-stock">{producto.disponibilidad ? 'En Stock' : 'Sin Stock'}</span>
          </div>
          <div className="product-colors">
            {producto.coloresDisponibles.map((color, index) => (
              <button
                className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                key={index}
                onClick={() => handleColorSelection(color)}
              ></button>
            ))}
          </div>

          <div className="product-sizes">
            {producto.tamañosDisponibles.map((tamaño, index) => (
              <button
                className={`size-button ${tamaño === tamañoSeleccionado ? 'selected' : ''}`}
                key={index}
                onClick={() => handleTamañoSeleccionado(tamaño)}
              >
                {tamaño}
              </button>
            ))}
          </div>

          <div className="product-quantity">
            <button className="quantity-button" onClick={handleDecrementarCantidad}>-</button>
            <span>{cantidad}</span>
            <button className="quantity-button" onClick={handleIncrementarCantidad}>+</button>
          </div>
          <div className="product-buttons">

            <button className="add-to-cart-button">Añadir al Carrito</button>
            <button className="buy-now-button">Comprar Ahora</button>
            <button className="wishlist-button">❤️</button>
          </div>
          <div className="product-extra-info">
            <div className="product-code">
              Código de Referencia: 12345
            </div>
            <div className="product-category">
              Categoría: Ropa
            </div>
            <div className="product-share">
              Compartir:
              <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a>
              <a href="https://www.google.com"><i className="fab fa-google"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="option-buttons">
        <button
          className={`description-button ${mostrarDescripcion ? 'active' : ''}`}
          onClick={handleMostrarDescripcion}
        >
          Descripción
        </button>
        <button
          className={`reviews-button ${mostrarReseñas ? 'active' : ''}`}
          onClick={handleMostrarReseñas}
        >
          Reseñas
        </button>
      </div>

      <div className="product-description">
        {mostrarDescripcion && (
          <div className="description-content">
            <h2>Especificaciones Técnicas</h2>
            <ul>
              <li>Característica 1</li>
              <li>Característica 2</li>
              <li>Característica 3</li>
            </ul>
          </div>
        )}
        {mostrarReseñas && (
          <div className="reviews-content">
            <h2>Opiniones de los Usuarios</h2>
            <div className="review-cards">
              {reviews.map((review, index) => (
                <>
                  <div className="review-card" key={index}>
                    <div className="stars">
                      {renderEstrellas(review.rating)}
                    </div>
                    <div className="review-text">
                      {review.text}
                    </div>
                  </div>
                  <p> </p>
                </>
              ))}
            </div>

            <button className="write-review-content" onClick={handleEscribirReseña}>Escribir Reseña</button>
          </div>
        )}
        {mostrarEscribirReseña && (
          <div className="reviews-content">
            <div className="review-cards">
              <h2>Escribir Reseña</h2>
              <div className="rating">
                <div className="stars">
                  {renderEstrellas(calificacion)}
                </div>
                <div className="rating-text">
                  {calificacion > 0 ? `${calificacion} estrellas` : 'Seleccione una calificación'}
                </div>
              </div>
              <textarea
                className="review-input"
                style={ {width: "100%"}}
                placeholder="Escribe tu reseña aquí..."
                value={reseña}
                onChange={(e) => setReseña(e.target.value) }
              ></textarea>
            </div>

            <button className="submit-review-button" onClick={handleEnviarReseña}>Enviar Reseña</button>

          </div>

        )}
    </div>
      <span> </span><span> </span>
      <div className='product-similar'>
        <div className="reviews-content">
          <div className="review-cards">
            <h2>Productos similares</h2>

          </div>
        </div>
      </div>
    </div>
    </product >

  );
};

export default ProductoDetails;