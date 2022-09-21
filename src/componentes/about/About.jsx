/*RAFCE*/
import React from 'react'
import './about.css'
/*IMAGEN SOBRE-MI*/
import ME from '../../items/me-about.jpg'
/*ICONO_N1*/
import {FaAward} from 'react-icons/fa'
/*ICONO_N2*/
import {FiUsers} from 'react-icons/fi'
/*ICONO_N3*/
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>¿Que te puedo comentar?...</h5>
      <h2>Sobre mi.</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre Mi" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>2+ Años desarrollando sitios y aplicaciones web.</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Enfocado en el desarrollo y automatización de la marca.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>20+ Proyectos completados.</small>
            </article>
          </div>
          <p>
          Mi nombre es Juan José Alegría, soy Analista Programador. Siempre me llamó la atención el mundo de la tecnología, lo cual me llevó a interiorizarme primeramente en el funcionamiento de computadores y diferentes artículos electrónicos desde temprana edad. Debido a esta motivación conocí el mundo del desarrollo, me interesé inmediatamente por la agilización y automatización de procesos, así como con la gestión de recursos, es por eso que puedo decir que hoy, soy Desarrollador Web.
          <br />
          <br />
          Me encanta todo lo relacionado con el diseño de interfaces, desde la maquetación de estos, hasta la interactividad, así como la experiencia de usuario. Buscando siempre generar el sitio más amigable posible para el usuario final, es por esto que pongo énfasis en cada proyecto que participo en crear prototipos que se adapten al planteamento de la solución a la necesidad antes de desarrollar. La innovación es mi principal motivación dentro del mundo de la tecnología y me mantengo siempre buscando el conocimiento, nuevas tecnologías y herramientas que permitan mejorar mi trabajo e impulsar mi carrera.
          </p>
          <a href="#contact" className='btn btn-primary'>Contáctame!</a>
        </div>
      </div>
    </section>
  )
}

export default About