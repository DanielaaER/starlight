import Sdata from './Sdata.js'
import React from "react"
import Slider from "react-slick"

const Catg = () => {

  const value = Sdata.find((item) => item.id === 1);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
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
            <div className='mom-container'>
            <button className='shop-container' key={index}>
               <div className='value-Shop'>
                  <img className="imageS" src={value.cover} alt='' />
                </div>
                <div className='info-container'>
                  <p id="p1">{value.title}</p>
                  <p>${value.price}</p>
                  <p>{value.starts}</p>
                </div>
              </button>
              <div className='shop-container-small'>
              <button className='shop-container-mini'>
                <div className='value-Shop'>
                  <img className="image-mini" src={value.cover} alt='' />
                </div>
                <div className='info-container'>
                  <p id="p1">{value.title}</p>
                  <p>${value.price}</p>
                  <p>{value.starts}</p>
                </div>
              </button>
              <button className='shop-container-mini' >
                <div className='value-Shop-mini'>
                  <img className="image-mini" src={value.cover} alt='' />
                </div>
                <div className='info-container'>
                  <p id="p1">{value.title}</p>
                  <p>${value.price}</p>
                  <p>{value.starts}</p>
                </div>
              </button>
            </div>
            </div>
              
            </>
          )
        })}
      </Slider>
      
    </>
  )
}

export default Catg