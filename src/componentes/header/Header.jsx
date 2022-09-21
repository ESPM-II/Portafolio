/*RAFCE*/
import React from 'react'
import './header.css'
import CP from './CP'
import RedesSociales from './RedesSociales'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>¡Hola!, mi nombre es </h5>
        <h1>Juan José</h1>
        <h5 className='text-light'>Y soy, Desarrollador Web</h5>
        <br/>
        <CP />
        <RedesSociales />

        

        <a href="#contact" className='scroll__down'>Ir al final</a>
      </div>
    </header>
  )
}

export default Header