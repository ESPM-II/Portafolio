/*RAFCE*/
import React from 'react'
import './experience.css'
/*ICONO__EXPERIENCIA*/
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>¿Qué Tecnologías Utilizo?</h5>
      <h2>Mi experiencia</h2>
{/*INICIO FRONTEND*/}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
          </div>
        </div>
{/*FIN FRONTEND*/}
{/*INICIO BACKEND*/}
      <div className="experience__backend">
      <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Sql Server</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
            </div>
        </div>
{/*FIN BACKEND*/}
      </div>
    </section>
  )
}

export default Experience