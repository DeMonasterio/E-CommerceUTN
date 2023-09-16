import React from 'react'
import "./css/NavBar.css"
function NavBar() {
  return (
    <>
      <header>
        <div className="hero__title">
          <input type="checkbox" name="" id="" />
          <h1>TienditaUwUr</h1>
          <h2>C</h2>
        </div>
      </header>
      {/*Categorias  Ventas Contacto Envios AboutUs */}
      <ul className='navbar__menu'>
        <li>Categorias</li>
        <li>Convertite en vendedor!</li>
        <li>Contacto</li>
        <li>Envios</li>
        <li>Sobre Nosotros</li>
      </ul>
    </>
  )
}


export default NavBar