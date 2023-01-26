import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        fetch("https://odd-puce-cygnet-hat.cyclic.app/product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("Add Successful!");
              reset();
            }
          });

    };
    return (
        <div >
            <div className="mt-3">
                <div className="py-4" style={{ backgroundColor: 'white', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', width: '70%', margin: 'auto', borderRadius: '20px' }}>
                    <h2>Add Products</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue="" placeholder="Img Url" className="form-control border-radius-change w-75 m-auto mb-3"  {...register("img")} />

                        <input type="text" placeholder="Product Name" className="form-control border-radius-change  w-75 m-auto mb-3" defaultValue="" {...register("name", { required: true })} />

                        <input type="text" placeholder="Price" className="form-control border-radius-change  w-75 m-auto mb-3" defaultValue="" {...register("price", { required: true })} />

                        <textarea placeholder="Description" type="text" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("desc", { required: true })} />


                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;