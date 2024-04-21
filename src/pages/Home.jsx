import React from 'react';
import Menubtn from '../components/Menubtn';
import './home.css';
import AboutImg from './../images/istockphoto-615428200-612x612.jpg';
import {Link} from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import ContactInfo from '../components/ContactInfo';
import ContactImage from './../images/istockphoto-910449200-612x612.jpg';
export default function Home() {
  return (
    <div className='home'>
      <header className='h-100 min-vh-100 d-flex align-items-center  shadow'>
          <div className='container'>
           <div className='row'>
            <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                <h2 className='mb-0 text-block fw-bold'> Welcome To </h2>
                <h1 className='mb-5 text-block fw-bold text-center text-sm-start'>Our Coffee</h1>
                <Menubtn/>
            </div>
           </div>
          </div>
      </header>

      <div className='container my-5'>
        <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                <img src={AboutImg} className='img-fluid w-50'></img>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda nihil aliquid esse odit sunt necessitatibus consequatur. Vero, maiores, illo amet animi minus et beatae saepe cum, similique quibusdam recusandae.</p>
              <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas placeat sit deserunt qui cum voluptatibus magni optio adipisci, modi fugit nisi deleniti ullam sapiente corporis id. Voluptas, corrupti officiis!</p>
              <Link to="/about">
               <button type="button" className='btn btn-outline-success btn-lg'>More About Us</button>
              </Link>
            </div>
        </div>
      </div>

    <div className='menu py-5 text-light shadow'>
      <div className='container d-flex flex-column align-items-center'>
       <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
       <div className='row mb-5 w-100'>
        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
            <h3 className='fs-2 mb-5'> dark Coffee</h3>
            <ul className='px-0'>
             <li className='d-flex justify-content-between'>
              <p className='fs-3 mx-2'>Espresso</p>
              <p className='fs-3 mx-2 text-success fw-bold'>$12</p>
             </li>
             <li className='d-flex justify-content-between'>
              <p className='fs-3 mx-2'>Latte</p>
              <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
             </li>
             <li className='d-flex justify-content-between'>
              <p className='fs-3 mx-2'>Lungo</p>
              <p className='fs-3 mx-2 text-success fw-bold'>$10</p>
             </li>
            </ul>
        </div>

        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
            <h3 className='fs-2 mb-5'>Light Coffee</h3>
            <ul className='px-0'>
             <li className='d-flex justify-content-between'>
              <p className='fs-3 mx-2'>Cappuccino</p>
              <p className='fs-3 mx-2 text-success fw-bold'>$12</p>
             </li>
             <li className='d-flex justify-content-between'>
              <p className='fs-3 mx-2'>Ristretto</p>
              <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
             </li>
             <li className='d-flex justify-content-between'>
              <p className='fs-3 mx-2'>Cold brew</p>
              <p className='fs-3 mx-2 text-success fw-bold'>$10</p>
             </li>
            </ul>
        </div>
       </div>
       <Menubtn/>
      </div>
    </div>
    <ImageGallery/>

    <div className='bg-dark text-light py-5 shadow'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5'>
            <ContactInfo/>
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={ContactImage} className='img-fluid w-50'/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
