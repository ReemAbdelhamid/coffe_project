import React from 'react';
import Gallery1 from './../images/istockphoto-1232170621-612x612.jpg';
import Gallery2 from './../images/istockphoto-545087624-612x612.jpg';
import Gallery3 from './../images/istockphoto-593338970-612x612.jpg';
import Gallery4 from './../images/istockphoto-615428200-612x612.jpg';
import Gallery5 from './../images/istockphoto-910449200-612x612.jpg';
import Gallery6 from './../images/istockphoto-801290270-612x612.jpg';
export default function ImageGallery() {
  return (
    <div className='container py-5'>
      <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold'>Image Gallery</h2>
      <div className='row'>
        <div className='col-md-4 px-2'>
            <div className='my-3'>
                <img src={Gallery1} className='img-fluid' />
            </div>
            <div className='my-3'>
                <img src={Gallery2} className='img-fluid' />
            </div>
        </div>

        <div className='col-md-4 px-2'>
            <div className='my-3'>
                <img src={Gallery3} className='img-fluid' />
            </div>
            <div className='my-3'>
                <img src={Gallery4} className='img-fluid' />
            </div>
        </div>

        <div className='col-md-4 px-2'>
            <div className='my-3'>
                <img src={Gallery5} className='img-fluid' />
            </div>
            <div className='my-3'>
                <img src={Gallery6} className='img-fluid' />
            </div>
        </div>
      </div>
    </div>
  )
}
