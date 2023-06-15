import React from "react"
import './Annocument.css'
import Data from './Data'

const Annocument = () => {
  const product = Data.find((item) => item.id === 1);

  return (
    <>
      <div className='annocument'>
        <div className='img'>
          <img src={product.cover} alt="producto" /> 
        </div>
        <div className="annocument-info">
          <div className="new">nuevo {product.category}</div>
          <h1 id="descont">Venta hasta {product.desc} de descuento</h1>
          <p id="title">{product.title}</p>
          <button className="button">Comprar ahora</button>
        </div>
      </div>
    </>
  );
};

export default Annocument
