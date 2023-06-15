import React from "react";
import "./reviews.css"
import Reviews from "./allreviews";

const PagesReviews = () => {
 return(
		<>
		  <section className="container">
			  <h1>reseñas de paginas</h1>
			  <div className="lastreviews-conteiner">
			  	<Reviews 
					  calificacion/>
			  </div>
			  <button className='btn-allviews'>ver todas las reseñas</button>
		  </section>
		</>
	)
}

export default PagesReviews