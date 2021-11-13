import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const { isLoading } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
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
                    console.log(data);
                    alert("Make Admin Success!")
                }
            })

        e.preventDefault()
    }
    return (
        <div style={{ backgroundColor: 'white', boxShadow: '1px 1px 3px rgb(0 0 0 / 10%)', width: '70%', margin: 'auto', borderRadius: '20px' }}>
            <div className="py-3 mt-5">
                <h2>Make Admin</h2>
                {!isLoading && <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <br />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>}

                {isLoading && <CircularProgress />}
            </div>
        </div>
    );
};

export default MakeAdmin;