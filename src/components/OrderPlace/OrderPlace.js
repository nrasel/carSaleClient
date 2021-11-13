import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const OrderPlace = () => {
    const { id } = useParams()
    const [orders, setOrders] = useState({})
    const { user } = useAuth()
    const { _id, name, img, price, desc } = orders
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [id, orders])
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const orderDetails = {
            productName: name,
            productImg: img,
            productPrice: price,
            productDesc: desc,
            userName: data.name,
            userEmail: data.email,
            userAddress: data.address,
            status: 'pending'
        }
        console.log(data);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('add successful')
                    reset()
                }

            })

    };
    return (
        <div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 mt-4 mb-5 g-4">
                    <div className="col">
                        <div className="card h-100 card-style border-0 text-start">
                            <img src={img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{desc}</p>
                                <h4 className="price">Price: ${price}</h4>
                            </div>
                            <NavLink style={{ backgroundColor: '#aaa9d6', color: '#2c4964' }} className="btn btn-lg block" to="/explore">Back To Explore</NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-5 pt-5">
                            <form className="" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} className="form-control border-radius-change w-75 m-auto mb-3"  {...register("name")} />

                                <input type="email" defaultValue={user.email} className="form-control border-radius-change  w-75 m-auto mb-3"  {...register("email", { required: true })} />


                                <input placeholder="Address ex. village,city etc." type="text" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("address", { required: true })} />

                                <input type="number" placeholder="Phone" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("phone", { required: true })} />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Order Place" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPlace;