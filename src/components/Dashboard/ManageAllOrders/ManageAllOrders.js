import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [statusId, setStatusId] = useState()
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://hidden-temple-16176.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [statusId, orders])
    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure To Delete?")
        if (proceed) {
            fetch(`https://hidden-temple-16176.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successful')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders)
                    }
                })
        }

    }

    const handleStatus = (id) => {
        fetch(`https://hidden-temple-16176.herokuapp.com/orders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                setStatusId(id)
            })

    }



    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mt-5 pt-5 g-4">
                {orders.map((order) => (
                    <div className="col">
                        <div style={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', borderRadius: '20px' }} className="card h-100 p-4 card-style border-0 text-start">
                            <img style={{ width: '100px', height: '100px', margin: 'auto', borderRadius: '50%' }} src={order.productImg} alt="" />
                            <div className="card-body">
                                <h5 style={{ color: '#304461' }}> {order.productName}</h5>
                                <p className="card-text">Price : ${order.productPrice}</p>
                                <h6 style={{ color: '#28a745' }}>{order.status}</h6>

                                <button className="btn me-1 text-white" onClick={() => handleDelete(order._id)} style={{ backgroundColor: '#990000' }} >Cancel</button>

                                {order.status === 'pending' ?
                                    <button className="btn text-white" onClick={() => handleStatus(order._id)} style={{ backgroundColor: '#990000' }} >Pending</button>
                                    :
                                    <button className="btn text-white" onClick={() => handleStatus(order._id)} style={{ backgroundColor: 'green', marginLeft: '10px' }} >Shipped</button>
                                }
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default ManageAllOrders;


