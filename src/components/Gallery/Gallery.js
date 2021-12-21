import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { useState } from 'react';
import { useEffect } from 'react';

  
 
AOS.init()
const Gallery = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
        fetch('./gallery.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    return (
        <div className='pt-5'>
            <div className='rentalinfo'>
                <h1 className='rentalcar'>Featured Rental Vehicles</h1>
                <p>Located just moments away from Liverpool Street station with its unrivalled connections. Flexible Leasing Options. Range of Safety Measure</p>
            </div>
            <SimpleReactLightbox>
            <SRLWrapper>
            {
                images.map(imgs=><span  className='imgs-card'>
                    <span className='offer'>{imgs.offer}</span>
                    <img data-aos="flip-left" data-aos-duration="500" style={{width:'250px',cursor:'pointer'}} src={imgs.image} alt="" />
                    
                    <span className='img-price'>$ {imgs.price}<sub>/MO</sub></span>
                   </span>)
            }
                
            </SRLWrapper>
            </SimpleReactLightbox>

        </div>
    );
};

export default Gallery;