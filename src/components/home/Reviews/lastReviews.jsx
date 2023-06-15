import React from "react";
import "./reviews.css"
import Sdata from "./Rdata";
import Slider from "react-slick";

const LastReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1>Ultimas reseñas</h1>
          <button className="button">Ver más</button>
        </div>

        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <div className="review-container" key={index}>
                <div className="content-container">
                  <div className="img-product">
                    <img src={value.imgProduct} alt="" style={{ Width: "150px", height: "150px"}} />
                  </div>
                  <div className="info">
                    <p id="date">{value.date}</p>
                    <h1 className="title-review">{value.title}</h1>
                    <p>{value.review}</p>
                    <p id="start">{value.starts}</p>
                    <p>{value.user}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};


export default LastReviews