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

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://hidden-temple-16176.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
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
    return (
        <TableContainer component={Paper} style={{ maxWidth: '60rem' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Id</TableCell>
                        <TableCell align="left">Product Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.filter(order => order.userEmail === user.email).map((order) => (
                        <TableRow
                            key={order._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order._id}
                            </TableCell>
                            <TableCell align="left">{order.productName}</TableCell>
                            <TableCell align="left">$ {order.productPrice}</TableCell>
                            <TableCell align="left">{order.status}</TableCell>
                            <TableCell align="left"><Button onClick={() => handleDelete(order._id)} style={{ backgroundColor: '#990000' }} variant="contained">Cancel</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrders;