import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import car from '../../images/car.png'

AOS.init();
// data-aos-duration="1500"

const Banner = () => {
    return (
        <div>
            <section id="top-banner" className="d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-sm-12">
                            <div  className="banner-info text-start">
                                <h1 className="banner-heading" data-aos="fade-down" data-aos-duration="1500"><span>Reliability</span> and Quality Service.</h1>
                                <p data-aos="fade-up-right" data-aos-duration="1500" className="mb-3">The SERVQUAL method measures five dimensions of service quality: Tangibles: The appearance of physical facilities and equipment.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="car-img" data-aos-duration="1500" data-aos="zoom-in-left">
                                <img className="img-fluid" src={car} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;