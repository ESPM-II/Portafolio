/*RAFCE*/
import React from 'react'
import './footer.css'
/*ICONO__FACEBOOK*/
import {FaFacebookF} from 'react-icons/fa'
/*ICONO_INSTAGRAM*/
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JJAOLIVOS</a>


      <div className="footer__socials">
        <a href="https://m.me/jjaolivos" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/jjaolivos_/" target="_blank"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Juan José Alegría. 2022</small>
      </div>
    </footer>
  )
}

export default Footer