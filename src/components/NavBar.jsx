import React from 'react'
import "./css/NavBar.css"
import cartIcon from "../assets/carticon.svg"



function NavBar() {
  return (
    <>
      <div className="hero__title">
        <input className='header__checkbox' type="checkbox" name="" id="burguermenu" />
        <label className='header__label' htmlFor="burguermenu" aria-label='Botón del Menú Desplegable'>
          <span className='header__icon'></span>
          <span className='header__icon'></span>
          <span className='header__icon'></span>
        </label>
        <h1>TienditaUwUr</h1>
        <h2><img className='carrito' src={cartIcon} alt="" /></h2>

        {/*Categorias  Ventas Contacto Envios AboutUs */}
        <ul className='hero__nav'>
          <li>Categorias</li>
          <li>Convertite en vendedor!</li>
          <li>Contacto</li>
          <li>Envios</li>
          <li>Sobre Nosotros</li>
        </ul>
      </div>
    </>
  )
}


export default NavBar