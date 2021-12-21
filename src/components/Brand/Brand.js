import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import logo1 from '../../images/logo-1.jpg'
import logo2 from '../../images/logo-2.jpg'
import logo3 from '../../images/logo-3.jpg'
import logo4 from '../../images/logo-4.jpg'
import logo5 from '../../images/logo-5.jpg'
import logo6 from '../../images/logo-6.jpg'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './Brand.css'

const Brand = () => {
    return (
        <div className='bg-white py-5'>
            <div className='position-relative'>
                <span className='box-tab-line'>Car Brands</span>
                <h2 className='box-title'>Most Popular Brand</h2>
            </div>
            <div>
                <h3 className='every-day'>Every day we help the world's leading brands create their most vehicles</h3>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={logo3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo6} alt="" /></SwiperSlide>
        
            </Swiper>

            
        </div>
    );
};

export default Brand;