import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch("https://odd-puce-cygnet-hat.cyclic.app/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data));
    }, [orders])
    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure To Delete?")
        if (proceed) {
            fetch(`https://odd-puce-cygnet-hat.cyclic.app/orders/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  alert("Delete Successful");
                  const remainingOrders = orders.filter(
                    (order) => order._id !== id
                  );
                  setOrders(remainingOrders);
                }
              });
        }

    }
    return (
        <div >
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 mt-5 pt-5 g-4">
                    {orders.filter(order => order.userEmail === user.email).map((order) => (<div key={order._id} className="col">
                        <div style={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', borderRadius: '20px' }} className="card h-100 p-4 card-style border-0 text-start">
                            <img style={{ width: '120px', height: '120px', margin: 'auto', borderRadius: '50%' }} src={order.productImg} alt="" />
                            <div className="card-body">
                                <h5 style={{ color: '#304461' }}> {order.productName}</h5>
                                <p className="card-text">Price : ${order.productPrice}</p>
                                <h6 style={{ color: '#28a745' }}>{order.status}</h6>
                            </div>
                            <Button onClick={() => handleDelete(order._id)} style={{ backgroundColor: '#990000' }} variant="contained">Cancel</Button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MyOrders;


// <Button onClick={() => handleDelete(order._id)} style={{ backgroundColor: '#990000' }} variant="contained">Cancel</Button>