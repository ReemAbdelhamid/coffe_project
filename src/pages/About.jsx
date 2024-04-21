import React from 'react'
import './about.css';
import AboutImg from './../images/istockphoto-801290270-612x612.jpg';
import AboutImg2 from './../images/istockphoto-827311882-612x612.jpg';
import ImageGallery from '../components/ImageGallery';
import Reviews from './Reviews';
export default function About() {
  return (
    <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

      <div className='container my-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque nam ipsum asperiores harum iusto unde deleniti natus debitis est et architecto ut sed consequuntur error ad blanditiis, sint amet!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, odit. Nobis, tempore ut animi dignissimos ipsa assumenda esse? Rem laborum ullam id eum similique, laudantium aut sequi sit itaque quae?</p>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={AboutImg} className='img-fluid my-4' />
          </div>

          <div className='col-lg-6'>
            <img src={AboutImg2} className='img-fluid my-4' />
          </div>
        </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio suscipit itaque nostrum quia sequi nam beatae consectetur quo. Exercitationem voluptate nulla nemo sunt tenetur fugit nesciunt provident odio temporibus.</p>
    </div>
    <div className='bg-dark text-light'>
      <ImageGallery/>
    </div>

    <div className='my-5'>
      <Reviews/>
    </div>
    </div>
  )
}
