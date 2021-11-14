import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { userRegistration } = useAuth()
    const history = useHistory()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        userRegistration(data?.email, data?.password, data?.name, history)
        reset()
    };
    return (
        <div className="mt-5 pt-5">
            <h3>Please Registration</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" className="form-control border-radius-change w-50 m-auto mb-3 mt-5"  {...register("name")} />

                <input type="email" placeholder="Email" className="form-control border-radius-change  w-50 m-auto mb-3"  {...register("email", { required: true })} />


                <input placeholder="Password" type="password" className="form-control border-radius-change  w-50 m-auto mb-3" {...register("password", { required: true })} />


                {errors.exampleRequired && <span>This field is required</span>}

                <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Register" />
            </form>
            <p><Link to="/login">Already Resister? Please Login</Link></p>
        </div>
    );
};

export default Registration;