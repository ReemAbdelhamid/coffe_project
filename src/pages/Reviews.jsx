import React from 'react'
import './reviews.css';
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'react-bootstrap';
import person1 from './../images/istockphoto-1420958859-612x612.jpg';
import person2 from './../images/istockphoto-1490901177-612x612.jpg';
import person3 from './../images/istockphoto-1616727535-612x612.jpg';
import person4 from './../images/istockphoto-1326251481-612x612.jpg';
export default function Reviews() {
  return (
    <div className='reviews-section container'>
      <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
      <div className='row g-4'>
        <div className='col-lg-6'>
        <Card className='h-100 shadow'>
             <CardBody>
              <div className='p-4'>
                 <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi necessitatibus harum rem vel quam hic porro accusantium neque nobis iusto beatae maiores repellendus, mollitia ex dignissimos reiciendis animi? Asperiores?
                 </CardText>
                 </div>
                 </CardBody>
                <CardFooter className='d-flex align-items-center'>
                    <img src={person1} className='img-fluid rounded-circle shadow mx-3'/>
                    <CardTitle className='text-success'>John pile </CardTitle>
                </CardFooter>
         </Card> 
        </div>

        <div className='col-lg-6'>
        <Card className='h-100 shadow'>
             <CardBody>
              <div className='p-4'>
                 <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi necessitatibus harum rem vel quam hic porro accusantium neque nobis iusto beatae maiores repellendus, mollitia ex dignissimos reiciendis animi? Asperiores?
                 </CardText>
                 </div>
                 </CardBody>
                <CardFooter className='d-flex align-items-center'>
                    <img src={person2} className='img-fluid rounded-circle shadow mx-3'/>
                    <CardTitle className='text-success'>John pile </CardTitle>
                </CardFooter>
         </Card> 
        </div>

        <div className='col-lg-6'>
        <Card className='h-100 shadow'>
             <CardBody>
              <div className='p-4'>
                 <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi necessitatibus harum rem vel quam hic porro accusantium neque nobis iusto beatae maiores repellendus, mollitia ex dignissimos reiciendis animi? Asperiores?
                 </CardText>
                 </div>
                 </CardBody>
                <CardFooter className='d-flex align-items-center'>
                    <img src={person3} className='img-fluid rounded-circle shadow mx-3'/>
                    <CardTitle className='text-success'>John pile </CardTitle>
                </CardFooter>
         </Card> 
        </div>

        <div className='col-lg-6'>
        <Card className='h-100 shadow'>
             <CardBody>
              <div className='p-4'>
                 <CardText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi necessitatibus harum rem vel quam hic porro accusantium neque nobis iusto beatae maiores repellendus, mollitia ex dignissimos reiciendis animi? Asperiores?
                 </CardText>
                 </div>
                 </CardBody>
                <CardFooter className='d-flex align-items-center'>
                    <img src={person4} className='img-fluid rounded-circle shadow mx-3'/>
                    <CardTitle className='text-success'>John pile </CardTitle>
                </CardFooter>
         </Card> 
        </div>

        
      </div>
    </div>
  )
}
