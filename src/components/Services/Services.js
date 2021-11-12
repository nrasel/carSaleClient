import React, { useEffect, useState } from 'react';

const Services = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/homeCars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className="container mt-4">
            <h2 style={{ color: '#052046', fontSize: '40px' }}>Buy Your Dream Car</h2>
            <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people</p>
            <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">

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
                                <button className="buyBtn py-1">Buy Now</button>
                            </div>


                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default Services;