import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/user.png'

const Profile = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className="container" style={{ maxWidth: '30rem' }}>
                <div className="row">
                    <div className="col">
                        <div class="card" style={{ margin: 'auto', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', padding: '30px 0', borderRadius: '10px' }}>
                            <div class="card-body" >
                                <img style={{ width: '20%' }} src={img} alt="" />
                                <h6 style={{ color: '#28a745', fontSize: '27px' }} class="card-text">{user.displayName}</h6>
                                <h5>{user.email}</h5>
                                <Button className="btn btn" style={{ background: '#D67818', color: 'white' }} onClick={logOut} color="inherit"><span> <i class="fas fa-sign-out-alt"></i></span>  Log Out</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;