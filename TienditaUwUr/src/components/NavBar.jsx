import React from 'react'
import "./css/NavBar.css"
function NavBar(){
  return (
    <>
    {/*Categorias  Ventas Contacto Envios AboutUs */}
    <ul className='navbar__menu'>
      <li>Categorias</li>
      <li>Ventas</li>
      <li>Contacto</li>
      <li>Envios</li>
      <li>Sobre Nosotros</li>
    </ul>
    </>
  )
}


export default NavBar