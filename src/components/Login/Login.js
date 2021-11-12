import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { user, loginUser } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        loginUser(data?.email, data?.password, location, history)
        reset()
    };
    return (
        <div>
            <form className="mt-5 pt-5" onSubmit={handleSubmit(onSubmit)}>

                <input type="email" placeholder="Email" className="form-control border-radius-change  w-50 m-auto mb-3 mt-5"  {...register("email", { required: true })} />


                <input placeholder="Password" type="password" className="form-control border-radius-change  w-50 m-auto mb-3" {...register("password", { required: true })} />


                {errors.exampleRequired && <span>This field is required</span>}

                <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Login" />
            </form>
            <p><Link to="/registration">New User? Please Register</Link></p>
        </div>
    );
};

export default Login;