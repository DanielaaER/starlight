import React, { useState } from "react"
import { Link } from "react-router-dom"

import Categories from "../../components/MainPage/Categories"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
        <Categories />
        </div>
      </header>
    </>
  )
}

export default Navbar
