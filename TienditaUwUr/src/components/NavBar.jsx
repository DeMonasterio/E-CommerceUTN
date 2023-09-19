import React from 'react'
import "./css/NavBar.css"

import { FaShoppingCart  } from 'react-icons/fa'


function NavBar() {
  return (
    <>
      <header>
        <div className="hero__title">
          <input className='header__checkbox' type="checkbox" name="" id="burguermenu" />
          <label className='header__label' htmlFor="burguermenu" aria-label='Botón del Menú Desplegable'>
            <span className='header__icon'></span>
            <span className='header__icon'></span>
            <span className='header__icon'></span>
          </label>
          <h1>TienditaUwUr</h1>
          <h2 className='carrito' ><FaShoppingCart />
         
          </h2>{/*  C de carrito falta hacerlo */}
          {/*Categorias  Ventas Contacto Envios AboutUs */}
            <ul className='hero__nav'>
              <li>Categorias</li>
              <li>Convertite en vendedor!</li>
              <li>Contacto</li>
              <li>Envios</li>
              <li>Sobre Nosotros</li>
            </ul>
        </div>
      </header>
    </>
  )
}


export default NavBar