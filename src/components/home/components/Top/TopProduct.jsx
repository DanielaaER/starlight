import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import './Top.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const TopProduct= () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "px"}}>{dots}</ul>
    },
  }

  const totalProducts = Sdata.length;
  const middleIndex = Math.floor(totalProducts / 2);
  const topProducts = Sdata.slice(0, middleIndex);
  const bottomProducts = Sdata.slice(middleIndex);

  return (
    <>
      <div className="header">
        <h1>Productos populares</h1>
        <ul className="list-buttum">
          <li>
            <button className="button1">Camaras</button>
          </li>
          <li>
            <button className="button1">Laptos</button>
          </li>
          <li>
            <button className="button1">Tablets</button>
          </li>
          <li>
            <button className="button1" >Mouse</button>
          </li>
        </ul>
      </div>
      <Slider {...settings}>
        {topProducts.map((value, index) => {
          return (
            <>
              <button className='Top-container' key={index}>
              <div className='product-top'>
                  <img className="imagep" src={value.cover} alt='' />
                  <button className="wish"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className='info-container'>
                  <p id="p1">{value.title}</p>
                  <p>${value.price}</p>
                  <p>{value.starts}</p>
                </div>
              </button>
            </>
          )
        })}
      </Slider>
      <Slider {...settings}>
        {bottomProducts.map((value, index) => {
          return (
            <>
              <button className='Top-container' key={index}>
              <div className='product-top'>
                  <img className="imagep" src={value.cover} alt='' />
                  <button className="wish"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className='info-container'>
                  <p id="p1">{value.title}</p>
                  <p>${value.price}</p>
                  <p>{value.starts}</p>
                </div>
              </button>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopProduct
