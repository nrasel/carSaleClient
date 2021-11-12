import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Explore.css'

const Explore = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mt-5 pt-5 g-4">

                {
                    cars.map(car =>
                        <div className="col">
                            <div className="card h-100 card-style border-0 text-start">
                                <img src={car.img} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{car.name}</h5>
                                    <p className="card-text">{car.desc.slice(0, 100)}</p>
                                    <h4 className="price">Price: ${car.price}</h4>
                                </div>
                                <NavLink to={`/orderPlace/${car._id}`}><button className="buyBtn py-1">Buy Now</button></NavLink>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default Explore;