import React from 'react'
import Profile from "../../assets/sajib-4.jpg"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile}  alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Md Asmaul Hossain Sajib.</span>
          <br />
            Web Developer
          </h1>

          <p className='home__description'>
            I am a Graphics Designer & front-end Developer on crafting clean and user friendly experiences. I am passionate about building website on new ideas.
          </p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'>< FaArrowRight /></span>
          </Link>

        </div>
      </div>

      <div className="color__block"></div>

    </section> 
  )
}

export default Home