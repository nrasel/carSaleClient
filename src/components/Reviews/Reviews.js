import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import useAuth from '../../Hooks/useAuth'
import './Reviews.css'

const Reviews = () => {
    const { user } = useAuth()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://hidden-temple-16176.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div className="container mt-4">
            <h2 style={{ color: '#052046', fontSize: '40px' }}>Check Out Our Reviews</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {
                    reviews.map(review =>
                        <div className="col">
                            <div className="card h-100 card-style border-0 text-start">
                                <div className="card-body">
                                    <h5 className="card-title">{user.displayName}</h5>
                                    <h6 style={{ color: '#28a745', fontSize: '17px' }} className="">{user.email}</h6>
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
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Reviews;


/*

*/