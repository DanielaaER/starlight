import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"


const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          <Link to='/'>
            <img src={logo} alt='startlight'/>
          </Link>
          </div>

          <div className='search-box f_flex'>
            <input type='text' className="inpt-search" placeholder='¿Qué estás buscando?...' />
            <button className="btn-blue-light-nav">Buscar</button>
          </div>
          

          <div className='icon f_flex width'>
          <Link to='/account'>
            <i className='fa fa-user icon-circle'></i>
          </Link>
          <Link to='/favorites'>
            <i class="fa-solid fa-heart icon-circle"></i>
          </Link>
           
            <div className='cart'>
              <Link to='/cart'>
              <i class="fa-solid fa-cart-shopping icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
