import React from 'react';
import './menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import LatteImg from '../images/istockphoto-615428200-612x612.jpg';
import ristrettoImg from '../images/istockphoto-910449200-612x612.jpg';
import lungoImg from '../images/istockphoto-1232170621-612x612.jpg';
import espressoImg from '../images/istockphoto-615428200-612x612.jpg';

const Latte = [
    {
        id: 1,
        name: 'Bitter Latte',
        description: 'each general flavor can derive in many different flavor',
        price: '£12'
    },
    {
        id: 2,
        name: 'Sweet Latte',
        description: 'each general flavor can derive in many different flavor',
        price: '£8'
    },
    {
        id: 3,
        name: 'Floral Latte',
        description: 'each general flavor can derive in many different flavor',
        price: '£11'
    }
];
const Ristretto = [
    {
        id: 1,
        name: 'Bitter Ristretto',
        description: 'each general flavor can derive in many different flavor',
        price: '£15'
    },
    {
        id: 2,
        name: 'Sweet Ristretto',
        description: 'each general flavor can derive in many different flavor',
        price: '£14'
    },
    {
        id: 3,
        name: 'Floral Ristretto',
        description: 'each general flavor can derive in many different flavor',
        price: '£12'
    }
];

const Lungo = [
    {
        id: 1,
        name: 'Bitter Lungo ',
        description: 'each general flavor can derive in many different flavor',
        price: '£17'
    },
    {
        id: 2,
        name: 'Sweet Lungo ',
        description: 'each general flavor can derive in many different flavor',
        price: '£15'
    },
    {
        id: 3,
        name: 'Floral Lungo ',
        description: 'each general flavor can derive in many different flavor',
        price: '£12'
    }
];

const Espresso = [
    {
        id: 1,
        name: 'Bitter Espresso',
        description: 'each general flavor can derive in many different flavor',
        price: '£9'
    },
    {
        id: 2,
        name: 'Sweet Espresso',
        description: 'each general flavor can derive in many different flavor',
        price: '£11'
    },
    {
        id: 3,
        name: 'Floral Espresso',
        description: 'each general flavor can derive in many different flavor',
        price: '£8'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='latte my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Latte</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LatteImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Latte.map((Latte) => (
                                <div key={Latte.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Latte.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Latte.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {Latte.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='Ristretto bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Ristretto</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Ristretto.map((Ristretto) => (
                                <div key={Ristretto.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Ristretto.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Ristretto.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {Ristretto.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ristrettoImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='Lungo  my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lungo </h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={lungoImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Lungo .map((Lungo ) => (
                                <div key={Lungo .id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Lungo .name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Lungo .description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {Lungo .price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='Espresso bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Espresso</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {Espresso.map((Espresso) => (
                                <div key={Espresso.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {Espresso.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {Espresso.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {Espresso.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={espressoImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
