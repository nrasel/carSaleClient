import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    const handleCancel = (id) => {
        const proceed = window.confirm("Are Your Sure To Delete?")
        if (proceed) {
            fetch(`http://localhost:5000/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Delete Successful")
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }


    return (
        <div className="container mt-3">
            <h2>Totl Products : {products.length}</h2>
            <div className="row h-100">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <div key={product._id}>
                            <div className="service pb-3">
                                <div className="h-100">
                                    <div className="service-box text-start p-3 bg-white h-100">
                                        <div className="">
                                            <img className="service-img img-fluid" src={product.img} alt="" />
                                        </div>
                                        <h4 className="my-4">{product.name}</h4>
                                        <p>{product.desc.slice(0, 100)}</p>
                                        <h4>Price : ${product.price}</h4>
                                        <button onClick={() => handleCancel(product._id)} className="btn btn-danger me-4">Delete</button>
                                        {/* {order.status === "Pending" ?
                                            <button button onClick={() => handleStatus(order._id)} className="btn btn-success">Pending</button>
                                            :
                                            <button onClick={() => handleStatus(order._id)} className="btn btn-success">Approve</button>
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default ManageProducts;