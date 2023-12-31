import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i0kjck7', 'template_kogfyku', form.current, '4T47aTXl0Jngoz-Qa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
          If you have any queries or questions about me, don't forget to email me. So, tell me anything via email as soon as possible so that I can fix that.
          </p>

          <div className="contact__info">

            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail Me</span>
                <h4 className="info__desc">mahsajib15@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call Me</span>
                <h4 className="info__desc">+880 16 3720 9558</h4>
              </div>
            </div>

          </div>

          <div className="contact__socials">
            <a href='https://www.facebook.com/' className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href='https://www.twitter.com/' className="contact__social-link">
              <FaTwitter />
            </a>

            <a href='https://www.youtube.com/' className="contact__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

          <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
              <div className="form__input-group">
                <div className="form__input-div">
                  <input 
                    type="text"
                    placeholder='Your Name'
                    className='form__control'
                    name='user_name' required
                   />
                </div>
                <div className="form__input-div">
                  <input 
                    type="email"
                    placeholder='Your Email'
                    className='form__control'
                    name='user_email' required
                   />
                </div>
                <div className="form__input-div">
                  <input 
                    type="text"
                    name='subject'
                    placeholder='Your Subject'
                    className='form__control'
                    required
                   />
                </div>

              </div>

              <div className="form__input-div">
                  <textarea name='message' placeholder='Your Message' className="form__control textarea"></textarea>
                </div>

                <button className="button">
                  Send Message
                  <span className="button__icon contact__button-icon">
                    <FiSend />
                  </span>
                </button>


          </form>
      </div>
    </section>
  )
}

export default Contact