import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
          <Link to='/track'>
            <i class="fa-solid fa-truck-fast"></i>
            <label> Rastrea tu pedido</label>
          </Link>
          </div>
          <div className='right row RText'>
            
            {/* We can add more abel here for example config languaje page or divisas */}
            <Link to='/contact'>
              <label>¿Necesitas ayuda? llamanos: (+52) 55 75 61 2288</label>
            </Link>    
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
