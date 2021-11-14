import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth'

const ReviewAdd = () => {
    const { user } = useAuth()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const review = {
            ...data,
            userName: user.displayName,
            userEmail: user.email
        }
        fetch('https://hidden-temple-16176.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Review Add Successful!')
                    reset()
                }
            })

    };
    return (
        <div >
            <div className="container" style={{ maxWidth: '70rem' }}>
                <div className="row">
                    <div className="col">
                        <div className="mt-3">
                            <div className="py-4" style={{ backgroundColor: 'white', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', margin: 'auto', borderRadius: '20px' }}>
                                <h2>Add Review</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input type="text" placeholder="Enter Review (1-5)" className="form-control border-radius-change  w-75 m-auto mb-3" defaultValue="" {...register("review", { required: true })} />

                                    <textarea placeholder="Comment..." type="text" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("desc", { required: true })} />


                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Add Review" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewAdd;