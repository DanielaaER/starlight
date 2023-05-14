import React, { useState } from "react"
import { Link } from "react-router-dom"

import Categories from "../../components/Categories/Categories"

const Navbar = () => {

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <Categories />
          <div>
            Devolución gratuita
            <br />
            despues de 30 dias
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
