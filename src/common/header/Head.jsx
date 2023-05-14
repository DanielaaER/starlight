import React from "react"
import { Link } from "react-router-dom"
import "../header/Head.css"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='left row'>
          <Link to='/track'>
            <i class="fa-solid fa-truck-fast"></i>
            <label> Rastrea tu pedido</label>
          </Link>
        </div>
        <div className='right row RText'>
          <Link to='/contact'>
            <label>¿Necesitas ayuda? llamanos: (+52) 55 75 61 2288</label>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Head
