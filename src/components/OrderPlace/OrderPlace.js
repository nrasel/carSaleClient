import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const OrderPlace = () => {
    const { id } = useParams()
    const [orders, setOrders] = useState({})
    const { _id, name, img, price, desc } = orders
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [id])
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const orderDetails = {
            productName: name,
            productImg: img,
            productPrice: price,
            productDesc: desc,
            userName: data.name,
            userEmail: data.email,
            userAddress: data.address
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
                <div className="row row-cols-1 row-cols-md-2 mt-5 pt-5 g-4">
                    <div className="col">
                        <div className="card h-100 card-style border-0 text-start">
                            <img src={img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{desc}</p>
                                <h4 className="price">Price: ${price}</h4>
                            </div>
                            <Link to="/home"><button className="buyBtn py-1">Back</button></Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-5 pt-5">
                            <form className="" onSubmit={handleSubmit(onSubmit)}>

                                <input placeholder="name" className="form-control border-radius-change w-75 m-auto mb-3"  {...register("name")} />

                                <input type="email" placeholder="email" className="form-control border-radius-change  w-75 m-auto mb-3"  {...register("email", { required: true })} />


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