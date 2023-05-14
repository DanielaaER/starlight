import React, { useState } from "react"
import { Link } from "react-router-dom"
import '../header/Navbar.css'

/*import Categories from "../../components/MainPage/Categories"
*/
const Navbar = () => {

  return (
    <>
      <header className='header'>
          <button className='busquedaCategoria'>
            Busqueda Categorías
          </button>
          <div>
            Devolución gratuita
            <br />
            despues de 30 dias
          </div>
      </header>
    </>
  )
}

export default Navbar
