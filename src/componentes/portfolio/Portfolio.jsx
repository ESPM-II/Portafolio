/*RAFCE*/
import React from 'react'
import './portfolio.css'
import IMG1 from '../../items/portfolio1.jpg'
import IMG2 from '../../items/portfolio2.jpg'
import IMG3 from '../../items/portfolio3.jpg'

const data = 
[
  {
    id: 1,
    image: IMG1,
    title: 'Portafolio personal. Desarrollado con ReactJS',
    github: 'https://github.com/ESPM-II/Portafolio',
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'El tiempo en tu zona, desarrollado con JavaScript',
    github: 'https://github.com/ESPM-II/AppClima-V2-React',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Acortador de enlaces, desarrollado con ReactJS',
    github: 'https://github.com/ESPM-II/AcortadorEnlace',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis Proyectos</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cp">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio