import React from 'react';
import { NavLink } from 'react-router-dom';
import autos from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <section>
                <nav className="navbar navbar-expand-lg fixed-top  navbar-background">
                    <div className="container">
                        <h1 className="logo"><NavLink className="navbar-brand" to="/home"><img src={autos} alt="" /></NavLink></h1>

                        <button className="btn d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fas fa-bars bar-style"></i></button>

                        <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel"></h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body d-lg-none">

                                <ul className="navbar-nav ms-auto mb-2 d-lg-none mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/explore">Explore</NavLink>
                                    </li>

                                    {/* <li className="nav-item">
                                        <span className="nav-link">{user.displayName} </span>
                                    </li> */}
                                    {/* {user?.email ?
                                        <li className="nav-item">
                                            <button onClick={logOut} className="log-out">Log Out</button>
                                        </li>
                                        :
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>} */}
                                </ul>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/explore">Explore</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <span className="nav-link">{user.displayName} </span>
                                </li> */}
                                {/* {user?.email ?
                                    <li className="nav-item">
                                        <button onClick={logOut} className="log-out">Log Out</button>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>} */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div >
    );
};

export default Header;