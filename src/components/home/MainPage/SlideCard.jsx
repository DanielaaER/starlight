import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import './Home.css'


const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "px"}}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='slider-container' key={index}>
                <div className='info-container'>
                  <h1>{value.title}</h1>
                  <button className='button'>Comprar ya</button>
                  <button className='button1'>Ver mas</button>
                </div>
                <div className='product-container'>
                  <img className="image" src={value.cover} alt='' />
                  <div className="descuento">solo por ${value.desc}</div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
