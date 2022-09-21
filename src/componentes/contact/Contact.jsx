/*RAFCE*/
import React from 'react'
import './contact.css'
/*ICONO__EMAIL*/
import {MdOutlineEmail} from 'react-icons/md'
/*ICONO__MESSENGER*/
import {RiContactsBookLine, RiMessengerLine} from 'react-icons/ri'
/*ICONO__WHATSAPP*/
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => 
  {
    e.preventDefault();

    emailjs.sendForm('service_h4hyyoy', 'template_f6qrfnu', 
    form.current, 'f4jOFtwk4S9C5XQxj')

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Ponte en contacto conmigo!</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jjaolivos.02@gmail.com</h5>
            <a href="mailto:jjaolivos.02@gmail.com">Envíame un correo</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook Messenger</h4>
            <h5>Contáctame por Facebook</h5>
            <a href="https://m.me/jjaolivos" target='_blank'>Enviar Mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+569 5943 2921</h5>
            <a href="https://wa.me/+56959432921 target='_blank'">
              Enviar Mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre completo' required />
          <input type="email" name='email' placeholder='Tu correo electrónico' required />
          <textarea name="message" rows='7' placeholder='Escribe tu mensaje aquí'
           required ></textarea>
           <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact