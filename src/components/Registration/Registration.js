import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Registration.css'

const Registration = () => {
    const { userRegistration } = useAuth()
    const history = useHistory()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        userRegistration(data?.email, data?.password, data?.name, history)
        reset()
    };
    const activeStyle={
        backgroundColor: '#f78c30',
        color: '#fff'
    }
    return (
        <div className="hover-effect">
            <div style={{marginRight:'5%'}} className="m">
                <div className="row">
                    <div style={{backgroundColor:'#eee'}} className="col-md-6 welcome-msg">
                        <div className="info">
                            <h1>WELCOME TO CAR SALE</h1>
                            <p>Huge Savings On Our Inventory Of Pre-Owned Vehicles. Visit Us Today! Finance Center Available.</p>
                        </div>
                    </div>
                    <div className="col-md-6 registration-bg">
                        
                        <div className='bg-form'>
                            <div className='switch-section'>
                                <NavLink activeStyle={activeStyle} className='btn-1' to="/login">LOGIN</NavLink>
                                <NavLink activeStyle={activeStyle} className='btn-2' to="/registration">REGISTER</NavLink>
                            </div>
                            <h3 className='mb-4'>Create An Account</h3>
                        <form  onSubmit={handleSubmit(onSubmit)}>

                            <div className='from-box'>
                                <input placeholder="Name" className="form-control box-control border-radius-change mb-3 "  {...register("name")} />
                                <i class="far fa-user form-box-icon"></i>
                            </div>

                            <div className='from-box'>
                                <input type="email" placeholder="Email" className="form-control box-control border-radius-change mb-3"  {...register("email", { required: true })} />
                                <i class="far fa-envelope form-box-icon"></i>
                            </div>

                            <div className='from-box'>
                                <input placeholder="Password" type="password" className="form-control box-control border-radius-change mb-3" {...register("password", { required: true })} />
                                <i class="fas fa-lock form-box-icon"></i>
                            </div>


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="btn sign-up-btn mb-2" type="submit" value="Register" />
                            </form>
                            <div className='d-md-none'>
                            <p><span>Already Register?</span><Link  to="/login">Please Login</Link></p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;