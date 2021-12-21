import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewcars from '../../images/reviewcars.PNG'
import './CustomerReview.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
import useAuth from "../../Hooks/useAuth";
import Rating from "react-rating";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);
AOS.init()
const CustomerReview = () => {
    const { user } = useAuth()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://hidden-temple-16176.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div className="bg-white pt-5">
            <div className="container-fluid pt-5">
               <div className="row">
                   <div className="col-md-6">
                       <div>
                       <img data-aos-duration="1500" data-aos="zoom-in-right" src={reviewcars} className="img-fluid" alt="" />
                       </div>
                   </div>
                   <div className="col-md-6">
                       <h1 className="text-start customer-review">Customer Feedback</h1>
                   <Swiper slidesPerView={1} spaceBetween={10} slidesPerGroup={1} loop={true}  loopFillGroupWithBlank={true} pagination={{
                "clickable": true
                     }}  className="mySwiper text-start py-5">
                {
                    reviews.map(review=><SwiperSlide>
                        <div className="card h-100 card-style border-0 text-start">
                                <div className="card-body">
                                    <h1 style={{fontSize:'45px',color:'#e22937'}}><i class="fas fa-quote-left"></i></h1>
                                    <h5 style={{color:'#e22937',fontSize:'25px',fontFamily:'Odibee Sans,cursive'}}>{review.userName}</h5>
                                    <h6 style={{ color: '#28a745', fontSize: '17px' }} className="">{review.userEmail}</h6>
                                    <p className="card-text">{review.desc}</p>
                                    <Rating
                                        initialRating={review.review}
                                        emptySymbol="far fa-star start-style"
                                        fullSymbol="fas fa-star start-style"
                                        readonly
                                    />
                                    <span className="ms-3">{review.review}/5</span>
                                </div>
                            </div>
                    </SwiperSlide>)
                }
                </Swiper>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default CustomerReview;