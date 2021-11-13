import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setEmail(data.email)
        const user = email
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Make Admin Successful!')
                    reset()
                }

            })

    };
    return (
        <div style={{ backgroundColor: 'white', boxShadow: '1px 1px 3px rgb(0 0 0 / 10%)', width: '70%', margin: 'auto', borderRadius: '20px' }}>
            <div className="py-3 mt-5">
                <h2>Make Admin</h2>
                <form className="mt-4 pb-3" onSubmit={handleSubmit(onSubmit)}>

                    <input type="email" placeholder="Enter Email" className="form-control border-radius-change  w-75 m-auto mb-3"  {...register("email", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Make Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;