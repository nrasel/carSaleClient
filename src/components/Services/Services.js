import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import electricar from '../../images/electric-car.png'
import speedmeter from '../../images/speedometer.png'
import calender from '../../images/calendar.png'
import petrol from '../../images/petrol.png'

AOS.init()
const Services = () => {
    const [cars, setCars] = useState([])
   
    
    useEffect(() => {
        fetch('https://hidden-temple-16176.herokuapp.com/homeCars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    return (
        <div className='bg-light py-5'>
        <div className="container mt-4">
            <h2 style={{ color: '#052046', fontSize: '40px' }}>Buy Your Dream Car</h2>
            <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people</p>

            {
                cars.length===0?<div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            :
            <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">

            {
                cars.map(car =>
                    <div key={car._id} className="col">
                        <div data-aos="zoom-in-down" data-aos-duration="1500" className="card h-100 card-style border-0 text-start">
                            <img src={car.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <p className='car-date'>{car.date}</p>
                                <h5 className="card-title">{car.name}</h5>
                                <span className="price">${car.price} <sub>/MRP</sub> </span>
                                <span className='ms-5'>
                                    <Rating
                                    initialRating={4}
                                    emptySymbol="far fa-star start-style"
                                    fullSymbol="fas fa-star start-style"
                                    readonly
                                /> <span>(5 Review)</span></span>
                                <p className="card-text mt-2">{car.desc.slice(0, 67)}</p>
                                <hr />
                                <span className='flat-icon'><img className='flat-icon-width' src={electricar} alt="" /> Auto</span> 

                                <span className='flat-icon'><img className='flat-icon-width' src={speedmeter} alt="" /> 300KM/h</span>

                                <span className='flat-icon'><img className='flat-icon-width' src={calender} alt="" /> Petrol</span>

                                <span className='flat-icon'><img className='flat-icon-width' src={petrol} alt="" /> 2021</span>

                            </div>
                            <NavLink style={{ backgroundColor: '#aaa9d6', color: '#2c4964' }} className="btn btn-lg block" to={`/orderPlace/${car._id}`}><i class="fas fa-shopping-cart"></i> Buy Now</NavLink>
                        </div>
                    </div>
                )
            }
        </div>
            }
            
        </div>
    </div>
    );
};

export default Services;