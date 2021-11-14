import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useFirebase from '../../Hooks/useFirebase'


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useFirebase()
    if (isLoading || !admin) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;