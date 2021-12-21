import React, { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Feature.css'

AOS.init()

const Features = () => {
    const [features,setFestures]=useState([])
    useEffect(()=>{
        fetch('./extra.json')
        .then(res=>res.json())
        .then(data=>setFestures(data))
    },[])
    return (
        <div className='container py-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                features.map(feature=> <div>
                    
                        <div className="col extra-bg">
                            <div data-aos="flip-left" data-aos-duration="1000" className="card  border-0 h-100">
                                <div className="card-body position-relative text-start">
                                    <h5 className='shadow-number'>{feature.shadow}</h5>
                                    <h5 className="feature-title">{feature.title}</h5>
                                    <p className="feature-text">{feature.desc}</p>
                                </div>
                            </div>
                        </div>
                   
                </div>)
            }
        </div>
        </div>
    );
};

export default Features;