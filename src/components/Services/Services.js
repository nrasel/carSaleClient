import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import electricar from '../../images/electric-car.png'
import speedmeter from '../../images/speedometer.png'
import calender from '../../images/calendar.png'
import petrol from '../../images/petrol.png'


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
            <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">

                {
                    cars.map(car =>
                        <div key={car._id} className="col">
                            <div className="card h-100 card-style border-0 text-start">
                                <img src={car.img} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className='car-date'>{car.date}</p>
                                    <h5 className="card-title">{car.name}</h5>
                                    <h4 className="price">${car.price} <sub>/MRP</sub> </h4>
                                    <p className="card-text">{car.desc.slice(0, 67)}</p>
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
        </div>
    </div>
    );
};

export default Services;