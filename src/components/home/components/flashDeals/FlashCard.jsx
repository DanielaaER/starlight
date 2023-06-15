import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
      {productItems && productItems.map((productItem) => {
          return (
            <div className='container-flash'>
              <button className='product'>
                <div className='img-container'>
                  <img className="img-product" src={productItems.cover} alt='' />
                </div>
                <div className='product-details'>
                  <p className="name-product">{productItems.name}</p>
                  <p>(2 disponibles)</p>
                </div>
              </button>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
